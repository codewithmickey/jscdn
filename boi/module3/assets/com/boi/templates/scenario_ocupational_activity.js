var scenario_ocupational_activity = function(dom,data){

    var evts= new Events();
    var scenario_ocupational_activity_audio_flag_counter=0;
    var SCENARIO_OCUPATIONAL_ACTIVITY_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find(".slide19_next").click(function () {
        _html.find(".slide19_prev").removeClass("hide");
        _html.find('.show_section1').addClass("hide");
        _html.find(".show_section2").removeClass("hide");
    });
    
    _html.find(".slide20_prev").click(function () {
        _html.find(".slide19_prev").addClass("hide");
        _html.find('.show_section2').addClass("hide");
        _html.find(".show_section1").removeClass("hide");
    });
    
    _html.find(".slide20_next").click(function () {
        _html.find(".slide21_next").addClass("hide");
        _html.find(".show_section2").addClass("hide");
        _html.find('.show_section3').removeClass("hide");
    });
    
    _html.find(".slide21_prev").click(function () {
        _html.find('.show_section3').addClass("hide");
        _html.find('.show_section2').removeClass("hide");
    });
    
    _html.find(".slide22_prev").click(function () {
        _html.find(".wrong_ans").addClass("hide");
        _html.find(".correct_ans").addClass("hide");
        _html.find(".answer_desc").addClass("hide");
        _html.find(".slide21_prev").removeClass("hide");
        // _html.find(".slide21_next").removeClass("hide");
        _html.find(".slide21_submit").removeClass("hide");
    });
    
    _html.find(".slide23_prev").click(function () {
        _html.find(".wrong_ans").addClass("hide");
        _html.find(".correct_ans").addClass("hide");
        _html.find(".answer_desc").addClass("hide");
        _html.find(".slide21_prev").removeClass("hide");
        // _html.find(".slide21_next").removeClass("hide");
        _html.find(".slide21_submit").removeClass("hide");
    });
    
    _html.find(".slide20a_prev").click(function () {
        _html.find(".slide19_prev").addClass("hide");
        _html.find('.show_section2').addClass("hide");
        _html.find(".show_section1").removeClass("hide");
    });
    
    _html.find(".slide20a_next").click(function () {
        _html.find(".slide21_next").addClass("hide");
        _html.find(".show_section2").addClass("hide");
        _html.find('.show_section3').removeClass("hide");
    });
    $('.slide21_submit').on('click', function(e) {

        // $("input[name=answer]").each(function(){
        //     $(this).parent('.control').addClass('disabled-events');
        //     $(this).attr('disabled', 'disabled');
        // });
    });
    
    _html.find(document).ready(function(){
        // _html.find("input[type='button']").click(function(){
        _html.find(".slide21_submit").click(function(){

            if(!$(".slide21_submit").hasClass("scenario_ocupational_activity_audio_flag")){
                _html.find('.slide21_submit').addClass('scenario_ocupational_activity_audio_flag');
                scenario_ocupational_activity_audio_flag_counter++;
            }

            var radioValue = _html.find("input[name='answer']:checked").val();
            if(radioValue != undefined){
                $(".tab_btn_submit").removeClass('submit__btn_scenario');
                $(".tab_btn_submit").addClass('no_pinter_scenario');
                $("input[name=answer]").each(function(){
                    $(this).parent('.control_scenario').addClass('disabled-events-scenario');
                    $(this).attr('disabled', 'disabled');
                    // $('.slide21_submit').addClass('disabled');
                })
            }
            if(radioValue == 'yes'){

                _html.find(".slide21_prev").addClass("hide");
                // _html.find(".slide21_next").addClass("hide");
                // _html.find(".slide21_submit").addClass("hide");
                _html.find(".wrong_ans").addClass("hide");
                _html.find(".correct_ans").removeClass("hide");
                _html.find(".answer_desc").removeClass("hide");
    
            }else if(radioValue == 'no'){

                _html.find(".slide21_prev").addClass("hide");
                // _html.find(".slide21_next").addClass("hide");
                // _html.find(".slide21_submit").addClass("hide");
                _html.find(".correct_ans").addClass("hide");
                _html.find(".wrong_ans").removeClass("hide");
                _html.find(".answer_desc").removeClass("hide");
            }
            dispatchScenarioOcupationalActivity();
        });
    });

    function dispatchScenarioOcupationalActivity(){
        if(scenario_ocupational_activity_audio_flag_counter == 1){
            SCENARIO_OCUPATIONAL_ACTIVITY_FLAG = true;
            evts.dispatchEvent("SCENARIO_OCUPATIONAL_ACTIVITY", SCENARIO_OCUPATIONAL_ACTIVITY_FLAG);
        }
    }
    
    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}