var Legal_Advisor = function(dom,data){

    var evts= new Events();
    var Legal_Advisor_audio_flag_counter = 0;
    var LEGAL_ADVISOR_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find(".setting_green_LA").click(function(){
        if(!$(".setting_green_LA").hasClass("Legal_Advisor_audio_flag")){
            _html.find('.setting_green_LA').addClass('Legal_Advisor_audio_flag');
            Legal_Advisor_audio_flag_counter++;
        }
        _html.find(".setting_green_after_LA").removeClass("hide");
        _html.find(".search_orange_after_LA").addClass("hide");
        _html.find(".notes_blue_after_LA").addClass("hide");
        _html.find(".setting_green_rectangle_LA").removeClass("hide");
        _html.find(".search_orange_rectangle_LA").addClass("hide");
        _html.find(".notes_blue_rectangle_LA").addClass("hide");
        // $('.setting_green_rectangle_LA').focus();
        dispatchLegalAdvisor();
    })

    _html.find(".search_orange_LA").click(function(){
        if(!$(".search_orange_LA").hasClass("Legal_Advisor_audio_flag")){
            _html.find('.search_orange_LA').addClass('Legal_Advisor_audio_flag');
            Legal_Advisor_audio_flag_counter++;
        }
        _html.find(".search_orange_after_LA").removeClass("hide");
        _html.find(".notes_blue_after_LA").addClass("hide");
        _html.find(".setting_green_after_LA").addClass("hide");
        _html.find(".search_orange_rectangle_LA").removeClass("hide");
        _html.find(".setting_green_rectangle_LA").addClass("hide");
        _html.find(".notes_blue_rectangle_LA").addClass("hide");
        // $('.search_orange_rectangle_LA').focus();
        dispatchLegalAdvisor();
    })

    _html.find(".notes_blue_LA").click(function(){
        if(!$(".notes_blue_LA").hasClass("Legal_Advisor_audio_flag")){
            _html.find('.notes_blue_LA').addClass('Legal_Advisor_audio_flag');
            Legal_Advisor_audio_flag_counter++;
        }
        _html.find(".notes_blue_after_LA").removeClass("hide");
        _html.find(".search_orange_after_LA").addClass("hide");
        _html.find(".setting_green_after_LA").addClass("hide");
        _html.find(".notes_blue_rectangle_LA").removeClass("hide");
        _html.find(".search_orange_rectangle_LA").addClass("hide");
        _html.find(".setting_green_rectangle_LA").addClass("hide");
        // $('.notes_blue_rectangle_LA').focus();
        dispatchLegalAdvisor();
    })

    function dispatchLegalAdvisor(){
        if(Legal_Advisor_audio_flag_counter == 3){
            LEGAL_ADVISOR_FLAG = true;
            evts.dispatchEvent("LEGAL_ADVISOR", LEGAL_ADVISOR_FLAG);
        }
    }

    $(".click_cursor_replay").click(function () {

        _html.find(".setting_green_after_LA").addClass("hide");
        _html.find(".setting_green_rectangle_LA").addClass("hide");
        _html.find(".search_orange_after_LA").addClass("hide");
        _html.find(".search_orange_rectangle_LA").addClass("hide");
        _html.find(".notes_blue_after_LA").addClass("hide");
        _html.find(".notes_blue_rectangle_LA").addClass("hide");
    });
    
    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.setting_green_LA, .search_orange_LA, .notes_blue_LA').unbind('keypress').bind('keypress', function(e){


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