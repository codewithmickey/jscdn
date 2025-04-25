var BOI_Officer = function(dom,data){

    var evts= new Events();
    var BOI_Officer_audio_flag_counter = 0;
    var BOI_OFFICER_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find(".setting_green").click(function(){

        if(!$(".setting_green").hasClass("BOI_Officer_audio_flag")){
            _html.find('.setting_green').addClass('BOI_Officer_audio_flag');
            BOI_Officer_audio_flag_counter++;
        }
        _html.find(".setting_green_after").removeClass("hide");
        _html.find(".search_orange_after").addClass("hide");
        _html.find(".notes_blue_after").addClass("hide");
        _html.find(".setting_green_rectangle").removeClass("hide");
        _html.find(".search_orange_rectangle").addClass("hide");
        _html.find(".notes_blue_rectangle").addClass("hide");
        // $('.setting_green_rectangle').focus();
        dispatchBoiOfficer();
    })

    _html.find(".search_orange").click(function(){
        if(!$(".search_orange").hasClass("BOI_Officer_audio_flag")){
            _html.find('.search_orange').addClass('BOI_Officer_audio_flag');
            BOI_Officer_audio_flag_counter++;
        }
        _html.find(".search_orange_after").removeClass("hide");
        _html.find(".notes_blue_after").addClass("hide");
        _html.find(".setting_green_after").addClass("hide");
        _html.find(".search_orange_rectangle").removeClass("hide");
        _html.find(".setting_green_rectangle").addClass("hide");
        _html.find(".notes_blue_rectangle").addClass("hide");
        // $('.search_orange_rectangle').focus();
        dispatchBoiOfficer();
    })

    _html.find(".notes_blue").click(function(){
        if(!$(".notes_blue").hasClass("BOI_Officer_audio_flag")){
            _html.find('.notes_blue').addClass('BOI_Officer_audio_flag');
            BOI_Officer_audio_flag_counter++;
        }
        _html.find(".notes_blue_after").removeClass("hide");
        _html.find(".search_orange_after").addClass("hide");
        _html.find(".setting_green_after").addClass("hide");
        _html.find(".notes_blue_rectangle").removeClass("hide");
        _html.find(".search_orange_rectangle").addClass("hide");
        _html.find(".setting_green_rectangle").addClass("hide");
        // $('.notes_blue_rectangle').focus();
        dispatchBoiOfficer();
    })

    $(".click_cursor_replay").click(function(){
        // setTimeout(function() {

            _html.find(".setting_green_after").addClass("hide");
            _html.find(".setting_green_rectangle").addClass("hide");
            _html.find(".search_orange_after").addClass("hide");
            _html.find(".search_orange_rectangle").addClass("hide");
            _html.find(".notes_blue_after").addClass("hide");
            _html.find(".notes_blue_rectangle").addClass("hide");
        // }, 2000); 
    })

    $(".click_cursor_replay").click(function () {

        _html.find(".setting_green_after").addClass("hide");
        _html.find(".setting_green_rectangle").addClass("hide");
        _html.find(".search_orange_after").addClass("hide");
        _html.find(".search_orange_rectangle").addClass("hide");
        _html.find(".notes_blue_after").addClass("hide");
        _html.find(".notes_blue_rectangle").addClass("hide");
    });

    function dispatchBoiOfficer(){
        if(BOI_Officer_audio_flag_counter == 3){
            BOI_OFFICER_FLAG = true;
            evts.dispatchEvent("BOI_OFFICER", BOI_OFFICER_FLAG);
        }
    }
    
    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.setting_green, .search_orange, .notes_blue').unbind('keypress').bind('keypress', function(e){


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