var ancident_qualify_occupational_accident = function(dom,data){

    var evts= new Events();
    //var _html = dom
    // var counter = 0;
    var ancident_qualify_occupational_accident_audio_flag_counter = 0;
    var ANCIDENT_QUALIFY_OCCUPATIONAL_ACCIDENT_FLAG = false;
    var audio_counter = 0;

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()
    
    _html.find(".slide20_next").click(function () {
        _html.find('.show_section1').addClass("hide");
        _html.find(".show_section2").removeClass("hide");
        // counter = 1;
    });

    _html.find(".slide19_1_prev").click(function () {
        _html.find('.show_section2').addClass("hide");
        _html.find(".show_section1").removeClass("hide");
        // counter = 0;
    });
    
    _html.find(".slide20_1_next").click(function () {
        _html.find('.show_section2').addClass("hide");
        _html.find(".show_section3").removeClass("hide");
        // counter = 2;
    });

    _html.find(".slide19_2_prev").click(function () {
        _html.find('.show_section3').addClass("hide");
        _html.find(".show_section2").removeClass("hide");
        // counter = 1;
    });
    
    _html.find(".slide20_2_next").click(function () {
        _html.find('.show_section3').addClass("hide");
        _html.find(".show_section4").removeClass("hide");
        // counter = 3;
    });

    _html.find(".slide19_3_prev").click(function () {
        _html.find('.show_section4').addClass("hide");
        _html.find(".show_section3").removeClass("hide");
        // counter = 2;
    });

    // _html.find(".slide21_submit_new0").click(function(){
    //     if(!$(".slide21_submit_new0").hasClass("ancident_qualify_occupational_accident_audio_flag")){
    //         _html.find('.slide21_submit_new0').addClass('ancident_qualify_occupational_accident_audio_flag');
    //         ancident_qualify_occupational_accident_audio_flag_counter++;
    //     }
    //     dispatchAncidentQualifyOccupationalAccident();
    // });

    // _html.find(".slide21_submit_new1").click(function(){
    //     if(!$(".slide21_submit_new1").hasClass("ancident_qualify_occupational_accident_audio_flag")){
    //         _html.find('.slide21_submit_new1').addClass('ancident_qualify_occupational_accident_audio_flag');
    //         ancident_qualify_occupational_accident_audio_flag_counter++;
    //     }
    //     dispatchAncidentQualifyOccupationalAccident();
    // });

    // _html.find(".slide21_submit_new2").click(function(){
    //     if(!$(".slide21_submit_new2").hasClass("ancident_qualify_occupational_accident_audio_flag")){
    //         _html.find('.slide21_submit_new2').addClass('ancident_qualify_occupational_accident_audio_flag');
    //         ancident_qualify_occupational_accident_audio_flag_counter++;
    //     }
    //     dispatchAncidentQualifyOccupationalAccident();

    // });

    function dispatchAncidentQualifyOccupationalAccident(){

        if(ancident_qualify_occupational_accident_audio_flag_counter == 1){
            ANCIDENT_QUALIFY_OCCUPATIONAL_ACCIDENT_FLAG = true;
            evts.dispatchEvent("ANCIDENT_QUALIFY_OCCUPATIONAL_ACCIDENT",ANCIDENT_QUALIFY_OCCUPATIONAL_ACCIDENT_FLAG);
        }
    }

    _html.find(document).ready(function(){
        _html.find("input[type='button']").click(function(){
    
            // if(counter == 1){
            //     var radioValueFirst = _html.find("input[name='answer']:checked").val();

            //     if(radioValueFirst != undefined){
            //         $("input[name=answer]").each(function(){
            //             $(this).parent('.check-box-container').addClass('disabled-events-scenario_mod4');
            //             $(this).attr('disabled', 'disabled');
            //             // $('.slide21_submit').addClass('disabled');
            //         });

            //         if(!$(".slide21_submit_new0").hasClass("ancident_qualify_occupational_accident_audio_flag")){
            //             _html.find('.slide21_submit_new0').addClass('ancident_qualify_occupational_accident_audio_flag');
            //             ancident_qualify_occupational_accident_audio_flag_counter++;
            //         }
            //         dispatchAncidentQualifyOccupationalAccident();
            //     }
            //     if(radioValueFirst == 'Convening_a_BOI'){
            //         _html.find(".wrong_ans_first").removeClass("hide");
            //         _html.find(".correct_ans_first").addClass("hide");
            //         _html.find(".answer_desc_first").removeClass("hide");

            //     }else if(radioValueFirst == 'Preparing_a_HOMR'){
            //         _html.find(".wrong_ans_first").addClass("hide");
            //         _html.find(".correct_ans_first").removeClass("hide");
            //         _html.find(".answer_desc_first").removeClass("hide");
            //     }
            // }

            // if(counter == 2){
            //     var radioValueSecond = _html.find("input[name='answer1']:checked").val();

            //     if(radioValueSecond != undefined){
            //         $("input[name=answer1]").each(function(){
            //             $(this).parent('.check-box-container').addClass('disabled-events-scenario_mod4');
            //             $(this).attr('disabled', 'disabled');
            //             // $('.slide21_submit').addClass('disabled');
            //         });

            //         if(!$(".slide21_submit_new1").hasClass("ancident_qualify_occupational_accident_audio_flag")){
            //             _html.find('.slide21_submit_new1').addClass('ancident_qualify_occupational_accident_audio_flag');
            //             ancident_qualify_occupational_accident_audio_flag_counter++;
            //         }
            //         dispatchAncidentQualifyOccupationalAccident();
            //     }
            //     if(radioValueSecond == 'yes_first'){
            //         _html.find(".wrong_ans_second").removeClass("hide");
            //         _html.find(".correct_ans_second").addClass("hide");
            //         _html.find(".answer_desc_second").removeClass("hide");

            //     }else if(radioValueSecond == 'no_first'){
            //         _html.find(".wrong_ans_second").addClass("hide");
            //         _html.find(".correct_ans_second").removeClass("hide");
            //         _html.find(".answer_desc_second").removeClass("hide");
            //     }
            // }

            // if(counter == 3){
                var radioValueThird = _html.find("input[name='answer2']:checked").val();

                if(radioValueThird != undefined){
                    $("input[name=answer2]").each(function(){
                        $(this).parent('.check-box-container').addClass('disabled-events-scenario_mod4');
                        $(this).attr('disabled', 'disabled');
                        // $('.slide21_submit').addClass('disabled');
                    });

                    if(!$(".slide21_submit_new2").hasClass("ancident_qualify_occupational_accident_audio_flag")){
                        _html.find('.slide21_submit_new2').addClass('ancident_qualify_occupational_accident_audio_flag');
                        ancident_qualify_occupational_accident_audio_flag_counter++;
                    }
                    dispatchAncidentQualifyOccupationalAccident();
                }
                if(radioValueThird == 'no_second'){
                    _html.find(".wrong_ans_third").addClass("hide");
                    _html.find(".correct_ans_third").removeClass("hide");
                    _html.find(".answer_desc_third").removeClass("hide");
                    _html.find(".report-two-bottom-section").removeClass("hide");

                }else if(radioValueThird == 'yes_second'){
                    _html.find(".correct_ans_third").addClass("hide");
                    _html.find(".wrong_ans_third").removeClass("hide");
                    _html.find(".answer_desc_third").removeClass("hide");
                    _html.find(".report-two-bottom-section").removeClass("hide");
                }
            // }
        });
    });

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.slide19_prev, .slide20_next, .slide19_1_prev, .slide20_1_next, .checkmark, .checkmark, .submit_btn_click_tab, .slide19_2_prev, .slide20_2_next, .slide19_3_prev').unbind('keypress').bind('keypress', function(e){


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