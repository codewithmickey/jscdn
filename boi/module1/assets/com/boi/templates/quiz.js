var quiz = function(dom,data){

    var evts= new Events();
    //var _html = dom
    let jsonData;
    let nCurrentQuestion = 0;
    let marks = 0;
    let counter = 0;
    let correctAnsCount = 0;

    function construct(){
        _html = dom

        _html.find('.quiz__section').html(data.content)
        evts.dispatchEvent("PageCreated123")

        loadAssessment();
        addReviewModelEvents();
    }
    construct()

        // Loaded Assessment

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
            $('footer').hide()
            $('nextback').hide()
            // $('.nav-link.btn').addClass('disabled');
            $('a[menu-data = '+'Back'+']').addClass('disabled');
            evts.dispatchEvent("QUIZ_START_FIRST");
            loadQuiz();
        });

        function loadQuiz() {
            let question = jsonData.Assessment[nCurrentQuestion].question;
            let instruction = jsonData.Assessment[nCurrentQuestion].instruction;
            let option = '';
            switch (jsonData.Assessment[nCurrentQuestion].type) {
                case "MCSS":
                    for (let index = 0; index < jsonData.Assessment[nCurrentQuestion].data.length; index++) {
                        option = option + '<label class="control control--radio"><input type="radio" name="question_option" value="'+jsonData.Assessment[nCurrentQuestion].data[index].answer+'" /><div class="controlIndicator"></div><span>'+ jsonData.Assessment[nCurrentQuestion].data[index].label +'</span></label>' ;
                    }
                    break;
                
                case "MCMS":
                    correctAnsCount = jsonData.Assessment[nCurrentQuestion].correctAnsCount;
                    for (let index = 0; index < jsonData.Assessment[nCurrentQuestion].data.length; index++) {
                        option = option + '<label class="control control--checkbox"><input type="checkbox" name="question_option" value="'+jsonData.Assessment[nCurrentQuestion].data[index].answer+'"/><div class="controlIndicator"></div><span>' + jsonData.Assessment[nCurrentQuestion].data[index].label +'</span></label>';
                    }
                    break;
            
            }
            _html.find('#question__number').html('<p>Q'+(nCurrentQuestion+1)+'</p>')
            _html.find('#question').html('<p>' + instruction + '</p><p>' + question + '</p>');
            _html.find('#question_options').html(option);
        }


        _html.find('#submit_question').on('click', function(e) {
            e.preventDefault();
            if(validate()) {
                
                $("input[name=question_option]:checked").each(function(){
                    
                    if($(this).val() == "true") {
                        $(this).parent('.control').addClass('correct__ans');
                    } else {
                        $(this).parent('.control').addClass('wrong__ans');
                    }
                });
                $("input[name=question_option]").each(function(){
                    $(this).parent('.control').addClass('disabled-events');
                    $(this).attr('disabled', 'disabled');
                });

                $(this).addClass('hide');
                _html.find('#next_question').removeClass('hide');
            }
        });

        _html.find('#next_question').on('click', function(e) {
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
                        break;
                }
                nCurrentQuestion++;
                _html.find('#submit_question').removeClass('hide');
                _html.find('#next_question').addClass('hide');
                
                if(jsonData.Assessment.length == nCurrentQuestion) {
                    clearQuestion();
                    displayScoreBoard();
                } else {
                    loadQuiz();
                }
            }
        });

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
            let percentage = 0;
            percentage = ((marks * 100) / jsonData.Assessment.length).toFixed(2)

            _html.find('#scoreboard__section').removeClass('hide');
            $('section').addClass("topPadding100")
            
            if(percentage>=80) {
                _html.find('#exit__module').removeClass('hide');
                _html.find('#scoreboard__title').html('<p><b>You have completed the module quiz.</b></p>');
                _html.find('#scoreboard__title_text').html('<p>Given below is your score.</p>');
                _html.find('.pcc_percents_wrapper').html(''+counter+' of '+jsonData.Assessment.length+'');
                _html.find('#scoreboard__footer__title').html('<p><b>You have now completed this module.</b></p><p><small>You can do one of the following:</small></p>');
                _html.find('#scoreboard__title_numbers').addClass("hide");
                if(counter == jsonData.Assessment.length){
                    _html.find('#retake__quiz').addClass('hide');
                }
            } else {
                _html.find('#exit__module').addClass('hide');
                _html.find('#scoreboard__title_numbers').removeClass("hide");
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


            //alert(percentage+'percentage');


            if (percentage > 50) {
                $ppc.addClass('gt-50');
            }

            // if(deg == 360){
            //     _html.find('#retake__quiz').addClass("hide");
            // }
            // if(deg == 72){
            //      _html.find('#exit__module').addClass("hide");
            // }

            _html.find('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
            _html.find('.ppc-percents span').html(percent+'%');
            
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
            clearQuestion();
            clearScoreBoard();
            nCurrentQuestion = 0;
            marks = 0;
            counter = 0;
            $('section').addClass("topPadding100")
            $('footer').show()
            $('nextback').show()
            $('a[menu-data = '+'Back'+']').removeClass('disabled');
            evts.dispatchEvent("RETAKE__QUIZ");
            loadQuiz();
        });

        function addReviewModelEvents(){
            _html.find('#review__module').on('click', function(e) {
                $('footer').show()
                clearQuestion();
                clearScoreBoard();
                nCurrentQuestion = 0;
                marks = 0;

                evts.dispatchEvent("REVIEW_MODEL_CLICKED")
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
                    // $("input[name=question_option]:checked").each(function(){
                    //     valid = true;
                    // });
                    break;
            }
            
            if (!valid) {
                // alert("Select the option and then Submit.");
                return false;
            }
            return true;
        
        }

    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}