var interviewing_witnesses_and_collecting_information = function(dom,data){

    var evts= new Events();
    var interviewing_witnesses_audio_flag_counter = 0;
    var INTERVIEWING_WITNESSES_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find(".orange_rectangle_clickable").click(function () {
        if(!$(".orange_rectangle_clickable").hasClass("interviewing_witnesses_audio_flag")){
            _html.find('.orange_rectangle_clickable').addClass('interviewing_witnesses_audio_flag');
            interviewing_witnesses_audio_flag_counter++;
        }
        _html.find(".orange_straight_line_with_filled_circle").removeClass("hide");
        _html.find(".orange_rectangle_desc_text").removeClass("hide");
        // $('.orange_rectangle_desc_text1').focus();
        _html.find(".dark_cyan_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_cyan_rectangle_desc_text").addClass("hide");
        _html.find(".light_purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".light_purple_rectangle_desc_text").addClass("hide");
        _html.find(".blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".blue_rectangle_desc_text").addClass("hide");
        _html.find(".dark_blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_blue_rectangle_desc_text").addClass("hide");
        _html.find(".purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".purple_rectangle_desc_text").addClass("hide");
        _html.find(".jazzberry_straight_line_with_filled_circle").addClass("hide");
        _html.find(".jazzberry_rectangle_desc_text").addClass("hide");
        _html.find(".marun_straight_line_with_filled_circle").addClass("hide");
        _html.find(".marun_rectangle_desc_text").addClass("hide");
        _html.find(".red_straight_line_with_filled_circle").addClass("hide");
        _html.find(".red_rectangle_desc_text").addClass("hide");
        dispatchInterviewingWitnesses();
    });

    _html.find(".red_rectangle_clickable").click(function () {
        if(!$(".red_rectangle_clickable").hasClass("interviewing_witnesses_audio_flag")){
            _html.find('.red_rectangle_clickable').addClass('interviewing_witnesses_audio_flag');
            interviewing_witnesses_audio_flag_counter++;
        }
        _html.find(".red_straight_line_with_filled_circle").removeClass("hide");
        _html.find(".red_rectangle_desc_text").removeClass("hide");
        // $('.red_rectangle_desc_text1').focus();
        _html.find(".orange_straight_line_with_filled_circle").addClass("hide");
        _html.find(".orange_rectangle_desc_text").addClass("hide");
        _html.find(".dark_cyan_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_cyan_rectangle_desc_text").addClass("hide");
        _html.find(".light_purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".light_purple_rectangle_desc_text").addClass("hide");
        _html.find(".blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".blue_rectangle_desc_text").addClass("hide");
        _html.find(".dark_blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_blue_rectangle_desc_text").addClass("hide");
        _html.find(".purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".purple_rectangle_desc_text").addClass("hide");
        _html.find(".jazzberry_straight_line_with_filled_circle").addClass("hide");
        _html.find(".jazzberry_rectangle_desc_text").addClass("hide");
        _html.find(".marun_straight_line_with_filled_circle").addClass("hide");
        _html.find(".marun_rectangle_desc_text").addClass("hide");
        dispatchInterviewingWitnesses();
    });

    _html.find(".marun_rectangle_clickable").click(function () {
        if(!$(".marun_rectangle_clickable").hasClass("interviewing_witnesses_audio_flag")){
            _html.find('.marun_rectangle_clickable').addClass('interviewing_witnesses_audio_flag');
            interviewing_witnesses_audio_flag_counter++;
        }
        _html.find(".marun_straight_line_with_filled_circle").removeClass("hide");
        _html.find(".marun_rectangle_desc_text").removeClass("hide");
        // $('.marun_rectangle_desc_text1').focus();
        _html.find(".red_straight_line_with_filled_circle").addClass("hide");
        _html.find(".red_rectangle_desc_text").addClass("hide");
        _html.find(".orange_straight_line_with_filled_circle").addClass("hide");
        _html.find(".orange_rectangle_desc_text").addClass("hide");
        _html.find(".dark_cyan_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_cyan_rectangle_desc_text").addClass("hide");
        _html.find(".light_purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".light_purple_rectangle_desc_text").addClass("hide");
        _html.find(".blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".blue_rectangle_desc_text").addClass("hide");
        _html.find(".dark_blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_blue_rectangle_desc_text").addClass("hide");
        _html.find(".purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".purple_rectangle_desc_text").addClass("hide");
        _html.find(".jazzberry_straight_line_with_filled_circle").addClass("hide");
        _html.find(".jazzberry_rectangle_desc_text").addClass("hide");
        dispatchInterviewingWitnesses();
    });

    _html.find(".jazzberry_rectangle_clickable").click(function () {
        if(!$(".jazzberry_rectangle_clickable").hasClass("interviewing_witnesses_audio_flag")){
            _html.find('.jazzberry_rectangle_clickable').addClass('interviewing_witnesses_audio_flag');
            interviewing_witnesses_audio_flag_counter++;
        }
        _html.find(".jazzberry_straight_line_with_filled_circle").removeClass("hide");
        _html.find(".jazzberry_rectangle_desc_text").removeClass("hide");
        // $('.jazzberry_rectangle_desc_text1').focus();
        _html.find(".marun_straight_line_with_filled_circle").addClass("hide");
        _html.find(".marun_rectangle_desc_text").addClass("hide");
        _html.find(".red_straight_line_with_filled_circle").addClass("hide");
        _html.find(".red_rectangle_desc_text").addClass("hide");
        _html.find(".orange_straight_line_with_filled_circle").addClass("hide");
        _html.find(".orange_rectangle_desc_text").addClass("hide");
        _html.find(".dark_cyan_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_cyan_rectangle_desc_text").addClass("hide");
        _html.find(".light_purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".light_purple_rectangle_desc_text").addClass("hide");
        _html.find(".blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".blue_rectangle_desc_text").addClass("hide");
        _html.find(".dark_blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_blue_rectangle_desc_text").addClass("hide");
        _html.find(".purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".purple_rectangle_desc_text").addClass("hide");
        dispatchInterviewingWitnesses();
    });

    _html.find(".purple_rectangle_clickable").click(function () {
        if(!$(".purple_rectangle_clickable").hasClass("interviewing_witnesses_audio_flag")){
            _html.find('.purple_rectangle_clickable').addClass('interviewing_witnesses_audio_flag');
            interviewing_witnesses_audio_flag_counter++;
        }
        _html.find(".purple_straight_line_with_filled_circle").removeClass("hide");
        _html.find(".purple_rectangle_desc_text").removeClass("hide");
        // $('.purple_rectangle_desc_text1').focus();
        _html.find(".jazzberry_straight_line_with_filled_circle").addClass("hide");
        _html.find(".jazzberry_rectangle_desc_text").addClass("hide");
        _html.find(".marun_straight_line_with_filled_circle").addClass("hide");
        _html.find(".marun_rectangle_desc_text").addClass("hide");
        _html.find(".red_straight_line_with_filled_circle").addClass("hide");
        _html.find(".red_rectangle_desc_text").addClass("hide");
        _html.find(".orange_straight_line_with_filled_circle").addClass("hide");
        _html.find(".orange_rectangle_desc_text").addClass("hide");
        _html.find(".dark_cyan_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_cyan_rectangle_desc_text").addClass("hide");
        _html.find(".light_purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".light_purple_rectangle_desc_text").addClass("hide");
        _html.find(".blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".blue_rectangle_desc_text").addClass("hide");
        _html.find(".dark_blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_blue_rectangle_desc_text").addClass("hide");
        dispatchInterviewingWitnesses();
    });

    _html.find(".dark_blue_rectangle_clickable").click(function () {
        if(!$(".dark_blue_rectangle_clickable").hasClass("interviewing_witnesses_audio_flag")){
            _html.find('.dark_blue_rectangle_clickable').addClass('interviewing_witnesses_audio_flag');
            interviewing_witnesses_audio_flag_counter++;
        }
        _html.find(".dark_blue_straight_line_with_filled_circle").removeClass("hide");
        _html.find(".dark_blue_rectangle_desc_text").removeClass("hide");
        // $('.dark_blue_rectangle_desc_text1').focus();
        _html.find(".purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".purple_rectangle_desc_text").addClass("hide");
        _html.find(".jazzberry_straight_line_with_filled_circle").addClass("hide");
        _html.find(".jazzberry_rectangle_desc_text").addClass("hide");
        _html.find(".marun_straight_line_with_filled_circle").addClass("hide");
        _html.find(".marun_rectangle_desc_text").addClass("hide");
        _html.find(".red_straight_line_with_filled_circle").addClass("hide");
        _html.find(".red_rectangle_desc_text").addClass("hide");
        _html.find(".orange_straight_line_with_filled_circle").addClass("hide");
        _html.find(".orange_rectangle_desc_text").addClass("hide");
        _html.find(".dark_cyan_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_cyan_rectangle_desc_text").addClass("hide");
        _html.find(".light_purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".light_purple_rectangle_desc_text").addClass("hide");
        _html.find(".blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".blue_rectangle_desc_text").addClass("hide");
        dispatchInterviewingWitnesses();
    });

    _html.find(".blue_rectangle_clickable").click(function () {
        if(!$(".blue_rectangle_clickable").hasClass("interviewing_witnesses_audio_flag")){
            _html.find('.blue_rectangle_clickable').addClass('interviewing_witnesses_audio_flag');
            interviewing_witnesses_audio_flag_counter++;
        }
        _html.find(".blue_straight_line_with_filled_circle").removeClass("hide");
        _html.find(".blue_rectangle_desc_text").removeClass("hide");
        // $('.blue_rectangle_desc_text1').focus();
        _html.find(".dark_blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_blue_rectangle_desc_text").addClass("hide");
        _html.find(".purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".purple_rectangle_desc_text").addClass("hide");
        _html.find(".jazzberry_straight_line_with_filled_circle").addClass("hide");
        _html.find(".jazzberry_rectangle_desc_text").addClass("hide");
        _html.find(".marun_straight_line_with_filled_circle").addClass("hide");
        _html.find(".marun_rectangle_desc_text").addClass("hide");
        _html.find(".red_straight_line_with_filled_circle").addClass("hide");
        _html.find(".red_rectangle_desc_text").addClass("hide");
        _html.find(".orange_straight_line_with_filled_circle").addClass("hide");
        _html.find(".orange_rectangle_desc_text").addClass("hide");
        _html.find(".dark_cyan_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_cyan_rectangle_desc_text").addClass("hide");
        _html.find(".light_purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".light_purple_rectangle_desc_text").addClass("hide");
        dispatchInterviewingWitnesses();
    });

    _html.find(".light_purple_rectangle_clickable").click(function () {
        if(!$(".light_purple_rectangle_clickable").hasClass("interviewing_witnesses_audio_flag")){
            _html.find('.light_purple_rectangle_clickable').addClass('interviewing_witnesses_audio_flag');
            interviewing_witnesses_audio_flag_counter++;
        }
        _html.find(".light_purple_straight_line_with_filled_circle").removeClass("hide");
        _html.find(".light_purple_rectangle_desc_text").removeClass("hide");
        // $('.light_purple_rectangle_desc_text1').focus();
        _html.find(".blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".blue_rectangle_desc_text").addClass("hide");
        _html.find(".dark_blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_blue_rectangle_desc_text").addClass("hide");
        _html.find(".purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".purple_rectangle_desc_text").addClass("hide");
        _html.find(".jazzberry_straight_line_with_filled_circle").addClass("hide");
        _html.find(".jazzberry_rectangle_desc_text").addClass("hide");
        _html.find(".marun_straight_line_with_filled_circle").addClass("hide");
        _html.find(".marun_rectangle_desc_text").addClass("hide");
        _html.find(".red_straight_line_with_filled_circle").addClass("hide");
        _html.find(".red_rectangle_desc_text").addClass("hide");
        _html.find(".orange_straight_line_with_filled_circle").addClass("hide");
        _html.find(".orange_rectangle_desc_text").addClass("hide");
        _html.find(".dark_cyan_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_cyan_rectangle_desc_text").addClass("hide");
        dispatchInterviewingWitnesses();
    });

    _html.find(".dark_cyan_rectangle_clickable").click(function () {
        if(!$(".dark_cyan_rectangle_clickable").hasClass("interviewing_witnesses_audio_flag")){
            _html.find('.dark_cyan_rectangle_clickable').addClass('interviewing_witnesses_audio_flag');
            interviewing_witnesses_audio_flag_counter++;
        }
        _html.find(".dark_cyan_straight_line_with_filled_circle").removeClass("hide");
        _html.find(".dark_cyan_rectangle_desc_text").removeClass("hide");
        // $('.dark_cyan_rectangle_desc_text1').focus();
        _html.find(".light_purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".light_purple_rectangle_desc_text").addClass("hide");
        _html.find(".blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".blue_rectangle_desc_text").addClass("hide");
        _html.find(".dark_blue_straight_line_with_filled_circle").addClass("hide");
        _html.find(".dark_blue_rectangle_desc_text").addClass("hide");
        _html.find(".purple_straight_line_with_filled_circle").addClass("hide");
        _html.find(".purple_rectangle_desc_text").addClass("hide");
        _html.find(".jazzberry_straight_line_with_filled_circle").addClass("hide");
        _html.find(".jazzberry_rectangle_desc_text").addClass("hide");
        _html.find(".marun_straight_line_with_filled_circle").addClass("hide");
        _html.find(".marun_rectangle_desc_text").addClass("hide");
        _html.find(".red_straight_line_with_filled_circle").addClass("hide");
        _html.find(".red_rectangle_desc_text").addClass("hide");
        _html.find(".orange_straight_line_with_filled_circle").addClass("hide");
        _html.find(".orange_rectangle_desc_text").addClass("hide");
        dispatchInterviewingWitnesses();
    });

    function dispatchInterviewingWitnesses(){
        if(interviewing_witnesses_audio_flag_counter == 9){
            INTERVIEWING_WITNESSES_FLAG = true;
            evts.dispatchEvent("INTERVIEWING_WITNESSES", INTERVIEWING_WITNESSES_FLAG);
        }
    }

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.orange_rectangle_clickable, .red_rectangle_clickable, .marun_rectangle_clickable, .jazzberry_rectangle_clickable, .purple_rectangle_clickable, .dark_blue_rectangle_clickable, .blue_rectangle_clickable, .light_purple_rectangle_clickable, .dark_cyan_rectangle_clickable').unbind('keypress').bind('keypress', function(e){


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