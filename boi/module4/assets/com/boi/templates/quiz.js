var quiz = function(dom,data){

    var evts= new Events();
    //var _html = dom
    var scorm;
    var lmsConnect;
    let jsonData;
    let nCurrentQuestion = 0;
    let marks = 0;
    let counter = 0;
    let correctAnsCount = 0;
    let attemptedQuestionCounter = 0;
    let submittedQuestionCounter = 0;
    var checkedAnswer = [];
    var data_value = 'key';
    var currentAttemptedQuestion = 'currentAttemptedQuestion';
    var retakeQuizFlag = false;
    var REVIEW_MODEL_CLICKED_FLAG = false;
    var retake__quiz_flag = false;

    function construct(){
        scorm = window.pipwerks.SCORM;
        console.log(scorm,'scorm');
        _html = dom
        _html.find('.quiz__section__main_mod4').html(data.content)
        evts.dispatchEvent("PageCreated123")
        loadAssessment();
        addReviewModelEvents();
    }
    construct()
        function loadAssessment() {
            $.getJSON('./assets/json/Assessment.json',function(data){
                jsonData = data;
            });
        }

        _html.find('#start__quiz').on('click', function(e) {
            e.preventDefault();
            _html.find('#quiz__start').hide();
            _html.find('#question__section').removeClass('hide');
            _html.find('custom__quiz').removeClass('topPadding100')
            _html.find('.nextback').addClass('hide')
            $('section').removeClass("topPadding100")
            _html.find('quiz_prev_mod4').addClass('disabled');
            $('img.quiz_prev_mod4').attr("tabindex", -1);
            $('footer').hide()
            $('nextback').hide()
            $('a[menu-data = '+'Back'+']').addClass('hide');
            $('a[menu-data = '+'Next'+']').addClass('hide');
            evts.dispatchEvent("QUIZ_START_FIRST");
            loadQuiz();
        });

        function setScore(num){
            let percentage = ((num * 100) / jsonData.Assessment.length).toFixed(2);
            scorm.set("cmi.core.score.raw",percentage);
            var API = scorm.API.getHandle();
            API.LMSCommit("");
        }

        function setScormPassFail(status){
            scorm.set("cmi.core.lesson_status", status);
            var API = scorm.API.getHandle();
            API.LMSCommit("")
        }

        function loadQuiz() {
            let question = jsonData.Assessment[nCurrentQuestion].question;
            let instruction = jsonData.Assessment[nCurrentQuestion].instruction;
            let option = '';
            switch (jsonData.Assessment[nCurrentQuestion].type) {
                case "MCSS":
                    for (let index = 0; index < jsonData.Assessment[nCurrentQuestion].data.length; index++) {
                        option = option + '<label class="control control--radio"><input type="radio" name="question_option" value="'+jsonData.Assessment[nCurrentQuestion].data[index].answer+'" data-value="'+jsonData.Assessment[nCurrentQuestion].data[index].dataValue+'"/><div class="controlIndicator"></div><span>'+ jsonData.Assessment[nCurrentQuestion].data[index].label +'</span></label>' ;
                    }
                    break;
                case "MCMS":
                    correctAnsCount = jsonData.Assessment[nCurrentQuestion].correctAnsCount;
                    for (let index = 0; index < jsonData.Assessment[nCurrentQuestion].data.length; index++) {
                        option = option + '<label class="control control--checkbox"><input type="checkbox" name="question_option" value="'+jsonData.Assessment[nCurrentQuestion].data[index].answer+'" data-value="'+jsonData.Assessment[nCurrentQuestion].data[index].dataValue+'"/><div class="controlIndicator"></div><span>' + jsonData.Assessment[nCurrentQuestion].data[index].label +'</span></label>';
                    }
                    break;
            }

            if(attemptedQuestionCounter == nCurrentQuestion && retakeQuizFlag == false){
                $('.quiz_next_mod4').addClass('disabled');
                $('img.quiz_next_mod4').attr("tabindex", -1);
            }else{
                $('.quiz_next_mod4').removeClass('disabled');
                $('img.quiz_next_mod4').attr("tabindex", 0);
            }
            _html.find('#question__number').html('<p>Q'+(nCurrentQuestion+1)+'</p>')
            _html.find('#question').html('<p tabindex="0">' + question + '</p><p tabindex="0">' + instruction + '</p>');
            _html.find('#question_options').html(option);
        }

        _html.find('#review__quiz').on('click', function(e){
            retakeQuizFlag = true;
            nCurrentQuestion = 0;
            e.preventDefault();
            _html.find('#question__section').removeClass('hide');
            _html.find('#scoreboard__section').addClass('hide');
            evts.dispatchEvent("QUIZ_REVIEW");
            $('#next_question').removeClass('hide');
            $('#next_question').attr("tabindex", -1);
            $('.quiz_prev_mod4').addClass('disabled');
            $('img.quiz_prev_mod4').attr("tabindex", -1);
            $('.quiz_next_mod4').removeClass('disabled');
            $('img.quiz_next_mod4').attr("tabindex", 0);
            loadQuiz();
            displayAttemptedQuestion();
        });

        _html.find('#submit_question').on('click', function(e) {
            e.preventDefault();
            if(validate()) {
                submittedQuestionCounter++;
                $("input[name=question_option]:checked").each(function(){
                    if($(this).val() == "true") {
                        $(this).parent('.control').addClass('correct__ans');
                        $(this).parent('.control').attr("tabindex", 0);
                        $(this).parent('.control').attr("aria-label", "correct answer");
                    } else {
                        $(this).parent('.control').addClass('wrong__ans');
                        $(this).parent('.control').attr("tabindex", 0);
                        $(this).parent('.control').attr("aria-label", "wrong answer");
                    }
                    obj = {};
                    obj[currentAttemptedQuestion] = jsonData.Assessment[nCurrentQuestion].nCurrentQuestionIndex;
                    obj[data_value] = $(this).data('value');
                    checkedAnswer.push(obj);
                });
                $("input[name=question_option]").each(function(){
                    $(this).parent('.control').addClass('disabled-events');
                    $(this).attr('disabled', 'disabled');
                });
                $(this).addClass('hide');
                _html.find('#next_question').removeClass('hide');
                // $('.quiz_prev_mod4').addClass('disabled');
                if(submittedQuestionCounter == 1){
                    $('.pagination_circle1_mod4').css("background", "#3087C8");
                    $('.pagination_circle2_mod4').css("background", "#ffffff");
                    $('.pagination_circle3_mod4').css("background", "#ffffff");
                    $('.pagination_circle4_mod4').css("background", "#ffffff");
                    $('.pagination_circle5_mod4').css("background", "#ffffff");
                }else if(submittedQuestionCounter == 2){
                    $('.pagination_circle1_mod4').css("background", "#3087C8");
                    $('.pagination_circle2_mod4').css("background", "#3087C8");
                    $('.pagination_circle3_mod4').css("background", "#ffffff");
                    $('.pagination_circle4_mod4').css("background", "#ffffff");
                    $('.pagination_circle5_mod4').css("background", "#ffffff");
                }else if(submittedQuestionCounter == 3){
                    $('.pagination_circle1_mod4').css("background", "#3087C8");
                    $('.pagination_circle2_mod4').css("background", "#3087C8");
                    $('.pagination_circle3_mod4').css("background", "#3087C8");
                    $('.pagination_circle4_mod4').css("background", "#ffffff");
                    $('.pagination_circle5_mod4').css("background", "#ffffff");
                }else if(submittedQuestionCounter == 4){
                    $('.pagination_circle1_mod4').css("background", "#3087C8");
                    $('.pagination_circle2_mod4').css("background", "#3087C8");
                    $('.pagination_circle3_mod4').css("background", "#3087C8");
                    $('.pagination_circle4_mod4').css("background", "#3087C8");
                    $('.pagination_circle5_mod4').css("background", "#ffffff");
                }else if(submittedQuestionCounter == 5){
                    $('.pagination_circle1_mod4').css("background", "#3087C8");
                    $('.pagination_circle2_mod4').css("background", "#3087C8");
                    $('.pagination_circle3_mod4').css("background", "#3087C8");
                    $('.pagination_circle4_mod4').css("background", "#3087C8");
                    $('.pagination_circle5_mod4').css("background", "#3087C8");
                }
            }
        });

        _html.find('#next_question').on('click', function(e) {
            $('#question__number').focus();
            if(!$("#next_question").hasClass("disabled")){
                attemptedQuestionCounter++;
                e.preventDefault();
                if(validate()) {
                    switch (jsonData.Assessment[nCurrentQuestion].type) {
                        case "MCSS":
                            $("input[name=question_option]:checked").each(function(){
                                if($(this).val() == "true") {
                                    let eachCorrectAnsMarks = jsonData.Assessment[nCurrentQuestion].correctAnsMarks;
                                    marks = (marks + eachCorrectAnsMarks);
                                    counter++;
                                }
                            });
                            break;
                        case "MCMS":
                            let excludeMarks = false;
                            let countAns = 0;
                            for (let index = 0; index < jsonData.Assessment[nCurrentQuestion].data.length; index++) {
                                if(jsonData.Assessment[nCurrentQuestion].data[index].answer == true) {
                                    countAns++;
                                }                
                            }

                            if($("input[name=question_option]:checked").length == countAns) {    
                                $("input[name=question_option]:checked").each(function(){
                                    if($(this).val() == "false") {
                                        excludeMarks = true;
                                    }
                                });
                                if(excludeMarks == false) {
                                    let eachCorrectAnsMarks = jsonData.Assessment[nCurrentQuestion].correctAnsMarks;
                                    marks = (marks + eachCorrectAnsMarks);
                                    counter++;
                                }
                            }
                            if($("img").hasClass("disabled")){
                                if(jsonData.Assessment[nCurrentQuestion].nCurrentQuestionIndex + 1 > 0){
                                    $("img.quiz_prev_mod4").removeClass("disabled");
                                    $('img.quiz_prev_mod4').attr("tabindex", 0);
                                }
                            }
                            break;
                    }
                    nCurrentQuestion++;
                    _html.find('#submit_question').removeClass('hide');
                    _html.find('#next_question').addClass('hide');
                    $('.quiz_prev_mod4').removeClass('disabled');
                    $('img.quiz_prev_mod4').attr("tabindex", 0);
                    if(jsonData.Assessment.length == nCurrentQuestion) {
                        clearQuestion();
                        displayScoreBoard();
                    } else {
                        loadQuiz();
                    }
                }
            }
        });

        _html.find('.quiz_prev_mod4').on('click', function(e){
            if(!$("img.quiz_prev_mod4").hasClass("disabled")){
                nCurrentQuestion--;
                if(jsonData.Assessment[nCurrentQuestion].nCurrentQuestionIndex == 0){
                    $("img.quiz_prev_mod4").addClass("disabled");
                    $('img.quiz_prev_mod4').attr("tabindex", -1);
                }
                $('#next_question').removeClass("hide")
                $('#next_question').addClass("disabled")
                $('#next_question').attr("tabindex", -1);
                $('.quiz_next_mod4').removeClass("disabled")
                $('img.quiz_next_mod4').attr("tabindex", 0);
                loadQuiz();
                displayAttemptedQuestion();
            } 
        });

        _html.find('.quiz_next_mod4').on('click', function(e){
            if(!$("img.quiz_next_mod4").hasClass("disabled") && retakeQuizFlag == false){
                nCurrentQuestion++;
                if(jsonData.Assessment[nCurrentQuestion].nCurrentQuestionIndex == 4){
                    $("img.quiz_next_mod4").addClass("disabled");
                    $('img.quiz_next_mod4').attr("tabindex", -1);
                }
                if(jsonData.Assessment[nCurrentQuestion].nCurrentQuestionIndex > 0){
                    $("img.quiz_prev_mod4").removeClass("disabled");
                    $('img.quiz_prev_mod4').attr("tabindex", 0);
                }
                // if(attemptedQuestionCounter > nCurrentQuestion){
                //     $('#next_question').removeClass("hide")
                // }else{
                //     $('#submit_question').removeClass("hide")
                //     $('#next_question').removeClass("disabled")
                //     $('#next_question').addClass("hide")
                // }
                loadQuiz();
                displayAttemptedQuestion();
                for(i=0; i<checkedAnswer.length; i++){
                    if(checkedAnswer[i].currentAttemptedQuestion == nCurrentQuestion && attemptedQuestionCounter < nCurrentQuestion){
                        _html.find('#submit_question').addClass('hide');
                        _html.find('#next_question').removeClass('hide');
                        _html.find('#next_question').removeClass('disabled');
                        $('#next_question').attr("tabindex", 0);
                        break;
                    }else if(checkedAnswer[i].currentAttemptedQuestion == nCurrentQuestion && nCurrentQuestion >= attemptedQuestionCounter){
                        _html.find('#submit_question').addClass('hide');
                        _html.find('#next_question').removeClass('hide');
                        _html.find('#next_question').removeClass('disabled');
                        $('#next_question').attr("tabindex", 0);
                        break;
                    }else if(checkedAnswer[i].currentAttemptedQuestion == nCurrentQuestion && attemptedQuestionCounter > nCurrentQuestion){
                        _html.find('#submit_question').addClass('hide');
                        _html.find('#next_question').removeClass('hide');
                        _html.find('#next_question').addClass('disabled');
                        $('#next_question').attr("tabindex", -1);
                        break;
                    }else{
                        _html.find('#submit_question').removeClass('hide');
                        _html.find('#next_question').addClass('hide');
                        _html.find('#next_question').removeClass('disabled');
                        $('#next_question').attr("tabindex", 0);
                    }
                }
            }else if(retakeQuizFlag == true){
                nCurrentQuestion++;
                if(jsonData.Assessment.length == nCurrentQuestion && retakeQuizFlag == true) {
                    clearQuestion();
                    displayScoreBoard();
                }else{
                    $('.quiz_next_mod4').removeClass('disabled');
                    $('img.quiz_next_mod4').attr("tabindex", 0);
                    if(jsonData.Assessment[nCurrentQuestion].nCurrentQuestionIndex > 0){
                        $("img.quiz_prev_mod4").removeClass("disabled");
                        $('img.quiz_prev_mod4').attr("tabindex", 0);
                    }
                    loadQuiz();
                    displayAttemptedQuestion();
                }
            }

        });

        function displayAttemptedQuestion(){ 
            checkedAnswer.forEach(function(el){
                if(nCurrentQuestion == el.currentAttemptedQuestion){
                    $("input[name=question_option]").each(function(){
                        if($(this).attr("data-value") == el.key) {
                            $(this).prop('checked', true);
                        }
                    });
                    $("input[name=question_option]:checked").each(function(){
                        if($(this).val() == "true") {
                            $(this).parent('.control').addClass('correct__ans');
                            $(this).parent('.control').attr("tabindex", 0);
                            $(this).parent('.control').attr("aria-label", "correct answer");
                        } else {
                            $(this).parent('.control').addClass('wrong__ans');
                            $(this).parent('.control').attr("tabindex", 0);
                            $(this).parent('.control').attr("aria-label", "wrong answer");
                        }
                    });
                    $("input[name=question_option]").each(function(){
                        $(this).parent('.control').addClass('disabled-events');
                        $(this).attr('disabled', 'disabled');
                        $(this).attr("tabindex", -1);
                        $(this).attr("aria-disabled", true);
                    });
                    _html.find('#submit_question').addClass('hide');
                    _html.find('#next_question').addClass('disabled');
                    $('#next_question').attr("tabindex", -1);
                }
            });
            $('#question__number').focus();
        }

        function clearQuestion() {
            _html.find('#question').empty();
            _html.find('#question_options').empty();
            _html.find('#question__section').addClass('hide');
        }

        function clearScoreBoard() {
            _html.find('#scoreboard__section').addClass('hide');
            _html.find('#scoreboard__title').empty();
            _html.find('#scoreboard__footer__title').empty();
        }

        function displayScoreBoard() {
            let percentage = ((marks * 100) / jsonData.Assessment.length).toFixed(2);
            setScore(marks);
            _html.find('#scoreboard__section').removeClass('hide');
            $('section').addClass("topPadding100")
            if(percentage>=80) {
                setScormPassFail("passed");
                _html.find('#exit__module').removeClass('hide');
                $('#scoreboard__title').attr('tabindex',0)
                _html.find('#scoreboard__title').html('<p><b>You have completed the module quiz.</b></p>');
                _html.find('#scoreboard__title_text').html('<p>Given below is your score.</p>');
                _html.find('.pcc_percents_wrapper').html(''+counter+' of '+jsonData.Assessment.length+'');
                _html.find('#scoreboard__footer__title').html('<p><b>You have now completed this module.</b></p><p><small>You can do one of the following:</small></p>');
                _html.find('#scoreboard__title_numbers').addClass("hide");
                if(counter == jsonData.Assessment.length){
                    _html.find('#retake__quiz').addClass('hide');
                }
            } else {
                setScormPassFail("failed");
                _html.find('#exit__module').addClass('hide');
                _html.find('#scoreboard__title_numbers').removeClass("hide");
                $('#scoreboard__title').attr('tabindex',0)
                _html.find('#scoreboard__title').html('<p><b>This is end of the quiz.</b></p> <p><b>To pass you need a minimum of 4 correct answers.</b</p>');
                _html.find('#scoreboard__title_text').html('<p>Given below is your score.</p>');
                _html.find('.pcc_percents_wrapper').html(''+counter+' of '+jsonData.Assessment.length+'');
                _html.find('#scoreboard__footer__title').html('<p><b>Retake the quiz to complete the module.</b></p>');
            }
            loadProgress(percentage);
        }

        function loadProgress(percentage) {
            var $ppc = _html.find('.progress-pie-chart'),
            percent = parseFloat(percentage);
            deg = 360*percent/100;
            if (percentage > 50) {
                $ppc.addClass('gt-50');
            }
            _html.find('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
            _html.find('.ppc-percents span').html(percent+'%');
            var $ppc1 = _html.find('.progress-pie-chart1'),
            percent = parseFloat($ppc1.data('percent')),
            deg = 360*percent/100;
            $ppc1.addClass('gt-50');
            _html.find('.ppc-progress-fill1').css('transform','rotate('+ deg +'deg)');
            _html.find('.ppc-percents1 span').html(percent+'%');
            // var $ppc1 = _html.find('.progress-pie-chart1'),
            //     percent = parseFloat($ppc1.data('percent')),
            //     deg = 360*percent/100;
                
            // if (percentage > 50) {
               // $ppc1.addClass('gt-50');
            // }
            // _html.find('.ppc-progress-fill1').css('transform','rotate('+ deg +'deg)');
            // _html.find('.ppc-percents1 span').html(percent+'%');
            // _html.find('.pcc-percents-wrapper span').html('6 / 6');

            //var classes = 72;
            // switch(deg)
            // {
            //     case 72:
            //         _html.find('.pcc-percents-wrapper span').html('1 / 5');
            //     break;
            //     case 144:
            //         _html.find('.pcc-percents-wrapper span').html('2 / 5'); 
            //     break;      
            //     case 216:
            //        _html.find('.pcc-percents-wrapper span').html('3 / 5'); 
            //     break;     
            //     case 288:
            //         _html.find('.pcc-percents-wrapper span').html('4 / 5'); 
            //     break;
            //      case 360:
            //         _html.find('.pcc-percents-wrapper span').html('5 / 5'); 
            //     break;
            //     default:
            //     _html.find('.pcc-percents-wrapper span').html('0 / 5'); 
            // }
        }

        _html.find('#retake__quiz').on('click', function(e) {
            e.preventDefault();
            _html.find('#quiz__start').show();
            $('.quiz_head_text_mod4').focus();
            clearQuestion();
            clearScoreBoard();
            nCurrentQuestion = 0;
            marks = 0;
            setScore(marks);
            counter = 0;
            checkedAnswer = [];
            attemptedQuestionCounter = 0;
            submittedQuestionCounter = 0;
            retakeQuizFlag = false;
            retake__quiz_flag = true;
            $('#submit_question').removeClass('disabled');
            $('#submit_question').removeClass('hide');
            $('#next_question').removeClass('disabled');
            $('#next_question').addClass('hide');
            $('section').addClass("topPadding100")
            $('footer').show()
            $('nextback').show()
            $('a[menu-data = '+'Back'+']').removeClass('hide');
            $('a[menu-data = '+'Next'+']').removeClass('hide');
            $('.quiz_prev_mod4').addClass('disabled');
            $('.pagination_circle1_mod4').css("background", "#ffffff");
            $('.pagination_circle2_mod4').css("background", "#ffffff");
            $('.pagination_circle3_mod4').css("background", "#ffffff");
            $('.pagination_circle4_mod4').css("background", "#ffffff");
            $('.pagination_circle5_mod4').css("background", "#ffffff");
            evts.dispatchEvent("RETAKE__QUIZ", retake__quiz_flag);
            loadQuiz();
        });

        function addReviewModelEvents(){
            _html.find('#review__module').on('click', function(e) {
                $('footer').show()
                clearQuestion();
                clearScoreBoard();
                nCurrentQuestion = 0;
                marks = 0;
                setScore(marks);
                REVIEW_MODEL_CLICKED_FLAG = true;
                evts.dispatchEvent("REVIEW_MODEL_CLICKED", REVIEW_MODEL_CLICKED_FLAG)
            });
        }
        _html.find('#exit__module').on('click', function(e) {
            window.top.close();
        });

        function validate() {
            let valid = false;
            switch (jsonData.Assessment[nCurrentQuestion].type) {
                case "MCSS":
                    $("input[name=question_option]:checked").each(function(){
                        valid = true;
                    });
                    break;
                case "MCMS":
                    var total=$('input[name=question_option]:checked').length; 

                    if(total >= correctAnsCount){
                        valid = true;
                    }  
                    break;
            }
            if (!valid) {
                return false;
            }
            return true;
        }

        $(document).ready(function() {
            $.getJSON( "assets/json/config.json", function( data ) {
                $('.quiz_prev_mod4, .quiz_next_mod4').unbind('keypress').bind('keypress', function(e){
                    if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){
                        return false;
                    }
                    if(e.keyCode !=9){
                        $(e.target).trigger('click');
                    }
                })
            });
        })

    return {
        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}