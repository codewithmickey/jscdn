var clickandreveal_activity = function(dom,data){

    var evts= new Events();
    var clickandreveal_activity_audio_flag_counter=1;
    var CLICKANDREVEAL_ACTIVITY_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()


    _html.find(".slide15_circles_1").click(function () {
        _html.find(".slide15_circles_1").css("background-color", "#2e88c7");
        _html.find(".slide15_first").css("color", "#ffffff");
        _html.find(".slide15_circles_2").css("background-color", "#ffffff");
        _html.find(".slide15_second").css("color", "#1e4e79");
        _html.find(".slide15_circles_3").css("background-color", "#ffffff");
        _html.find(".slide15_third").css("color", "#1e4e79");
        _html.find(".slide15_circles_4").css("background-color", "#ffffff");
        _html.find(".slide15_fourth").css("color", "#1e4e79");
        _html.find(".show_section1").removeClass("hide");
        _html.find('.show_section2').addClass("hide");
        _html.find(".show_section3").addClass("hide");
        _html.find(".show_section4").addClass("hide");
        dispatchClickAndRevealActivity();
    });
    
    _html.find(".slide15_circles_2").click(function () {
        if(!$(".slide15_circles_2").hasClass("clickandreveal_activity_audio_flag")){
            _html.find('.slide15_circles_2').addClass('clickandreveal_activity_audio_flag');
            clickandreveal_activity_audio_flag_counter++;
        }
        _html.find(".slide15_circles_1").css("background-color", "#ffffff");
        _html.find(".slide15_first").css("color", "#1e4e79");
        _html.find(".slide15_circles_2").css("background-color", "#2e88c7");
        _html.find(".slide15_second").css("color", "#ffffff");
        _html.find(".slide15_circles_3").css("background-color", "#ffffff");
        _html.find(".slide15_third").css("color", "#1e4e79");
        _html.find(".slide15_circles_4").css("background-color", "#ffffff");
        _html.find(".slide15_fourth").css("color", "#1e4e79");
        _html.find(".show_section1").addClass("hide");
        _html.find('.show_section2').removeClass("hide");
        _html.find(".show_section3").addClass("hide");
        _html.find(".show_section4").addClass("hide");
        dispatchClickAndRevealActivity();
    });
    
    _html.find(".slide15_circles_3").click(function () {
        if(!$(".slide15_circles_3").hasClass("clickandreveal_activity_audio_flag")){
            _html.find('.slide15_circles_3').addClass('clickandreveal_activity_audio_flag');
            clickandreveal_activity_audio_flag_counter++;
        }
        _html.find(".slide15_circles_1").css("background-color", "#ffffff");
        _html.find(".slide15_first").css("color", "#1e4e79");
        _html.find(".slide15_circles_2").css("background-color", "#ffffff");
        _html.find(".slide15_second").css("color", "#1e4e79");
        _html.find(".slide15_circles_3").css("background-color", "#2e88c7");
        _html.find(".slide15_third").css("color", "#ffffff");
        _html.find(".slide15_circles_4").css("background-color", "#ffffff");
        _html.find(".slide15_fourth").css("color", "#1e4e79");
        _html.find(".show_section1").addClass("hide");
        _html.find('.show_section2').addClass("hide");
        _html.find(".show_section3").removeClass("hide");
        _html.find(".show_section4").addClass("hide");
        dispatchClickAndRevealActivity();
    });
    
    _html.find(".slide15_circles_4").click(function () {
        if(!$(".slide15_circles_4").hasClass("clickandreveal_activity_audio_flag")){
            _html.find('.slide15_circles_4').addClass('clickandreveal_activity_audio_flag');
            clickandreveal_activity_audio_flag_counter++;
        }
        _html.find(".slide15_circles_1").css("background-color", "#ffffff");
        _html.find(".slide15_first").css("color", "#1e4e79");
        _html.find(".slide15_circles_2").css("background-color", "#ffffff");
        _html.find(".slide15_second").css("color", "#1e4e79");
        _html.find(".slide15_circles_3").css("background-color", "#ffffff");
        _html.find(".slide15_third").css("color", "#1e4e79");
        _html.find(".slide15_circles_4").css("background-color", "#2e88c7");
        _html.find(".slide15_fourth").css("color", "#ffffff");
        _html.find(".show_section1").addClass("hide");
        _html.find('.show_section2').addClass("hide");
        _html.find(".show_section3").addClass("hide");
        _html.find(".show_section4").removeClass("hide");
        dispatchClickAndRevealActivity();
    });

    function dispatchClickAndRevealActivity(){
        if(clickandreveal_activity_audio_flag_counter == 4){
            CLICKANDREVEAL_ACTIVITY_FLAG = true;
            evts.dispatchEvent("CLICKANDREVEAL_ACTIVITY", CLICKANDREVEAL_ACTIVITY_FLAG);
        }
    }

    $(document).ready(function(){
        $('.slide15_circles_1, .slide15_circles_2, .slide15_circles_3, .slide15_circles_4').unbind('keypress').bind('keypress', function(e){


            if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

            return false;
            }
            if(e.keyCode !=9){

            $(e.target).trigger('click');
            }
        })
    });

    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}