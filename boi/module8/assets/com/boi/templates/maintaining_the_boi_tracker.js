var maintaining_the_boi_tracker = function(dom,data){

    var evts= new Events();
    var maintaining_the_boi_tracker_audio_flag_counter=0;
    var MAINTAINING_THE_BOI_TRACKER_FLAG=false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    /* Maintaining The BOI Tracker */

    _html.find(".blue_border").click(function () {
        if(!$(".blue_border").hasClass("maintaining_the_boi_tracker_audio_flag")){
            _html.find('.blue_border').addClass('maintaining_the_boi_tracker_audio_flag');
            maintaining_the_boi_tracker_audio_flag_counter++;
        }
        _html.find(".img_slide19_disp_mod8_animate").addClass("hide");
        _html.find(".blue_border_step1").css("border", "1px solid #0074B3");
        _html.find(".purple_border_step2").css("border", "1px solid #fff");
        _html.find(".description_box_step1").removeClass("hide");
        _html.find(".description_box_step2").addClass("hide");
        dispatchMaintainingTheBoiTracker();
    });

    _html.find(".purple_border").click(function () {
        if(!$(".purple_border").hasClass("maintaining_the_boi_tracker_audio_flag")){
            _html.find('.purple_border').addClass('maintaining_the_boi_tracker_audio_flag');
            maintaining_the_boi_tracker_audio_flag_counter++;
        }
        _html.find(".img_slide19_disp_mod8_animate").addClass("hide");
        _html.find(".purple_border_step2").css("border", "1px solid #4D4082");
        _html.find(".blue_border_step1").css("border", "1px solid #fff");
        _html.find(".description_box_step2").removeClass("hide");
        _html.find(".description_box_step1").addClass("hide");
        dispatchMaintainingTheBoiTracker();
    });

    $(".click_cursor_replay").click(function () {
        _html.find(".img_slide19_disp_mod8_animate").removeClass("hide");
         _html.find(".description_box_step1").addClass("hide");
        _html.find(".description_box_step2").addClass("hide");
        _html.find(".blue_border_step1").css("border", "1px solid #fff");
        _html.find(".purple_border_step2").css("border", "1px solid #fff");
    });

    function dispatchMaintainingTheBoiTracker(){
        if(maintaining_the_boi_tracker_audio_flag_counter == 2){
            MAINTAINING_THE_BOI_TRACKER_FLAG = true;
            evts.dispatchEvent("MAINTAINING_THE_BOI_TRACKER",MAINTAINING_THE_BOI_TRACKER_FLAG);
        }
    }

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.blue_border, .purple_border').unbind('keypress').bind('keypress', function(e){


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