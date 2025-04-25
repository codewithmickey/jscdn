var Investigation_aviation_activity = function(dom,data){

    var evts= new Events();
    var Investigation_aviation_activity_audio_flag_counter = 0;
    var INVESTIGATION_AVIATION_ACTIVITY_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find('.investigation_aviation_puzzle1').click(function(){
        if(!$(".investigation_aviation_puzzle1").hasClass("Investigation_aviayion_activity_audio_flag")){
            _html.find('.investigation_aviation_puzzle1').addClass('Investigation_aviayion_activity_audio_flag');
            Investigation_aviation_activity_audio_flag_counter++;
        }
        _html.find('.investigation_aviation_inner_mod3').addClass('investigation_aviation_inner_mod3_click');
        _html.find('.investigation_aviation_right_box_mod3').css("display","block");

        _html.find('.investigation_aviation_puzzle1_bold').css("display","block");
        _html.find('.investigation_aviation_puzzle2_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle3_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle4_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle5_bold').css("display","none");

        _html.find('.investigation_aviation_puzzle1').css("display","none");
        _html.find('.investigation_aviation_puzzle2').css("display","block");
        _html.find('.investigation_aviation_puzzle3').css("display","block");
        _html.find('.investigation_aviation_puzzle4').css("display","block");
        _html.find('.investigation_aviation_puzzle5').css("display","block");

        _html.find('.puzzle1_inves_avi_desc_mod3').css("display","block");
        _html.find('.puzzle2_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle3_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle4_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle5_inves_avi_desc_mod3').css("display","none");
        dispatchInvestigationAviationActivity();
    })
    _html.find('.investigation_aviation_puzzle2').click(function(){
        if(!$(".investigation_aviation_puzzle2").hasClass("Investigation_aviayion_activity_audio_flag")){
            _html.find('.investigation_aviation_puzzle2').addClass('Investigation_aviayion_activity_audio_flag');
            Investigation_aviation_activity_audio_flag_counter++;
        }
        _html.find('.investigation_aviation_inner_mod3').addClass('investigation_aviation_inner_mod3_click');
        _html.find('.investigation_aviation_right_box_mod3').css("display","block");

        _html.find('.investigation_aviation_puzzle1_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle2_bold').css("display","block");
        _html.find('.investigation_aviation_puzzle3_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle4_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle5_bold').css("display","none");

        _html.find('.investigation_aviation_puzzle2').css("display","none");
        _html.find('.investigation_aviation_puzzle1').css("display","block");
        _html.find('.investigation_aviation_puzzle3').css("display","block");
        _html.find('.investigation_aviation_puzzle4').css("display","block");
        _html.find('.investigation_aviation_puzzle5').css("display","block");

        _html.find('.puzzle1_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle2_inves_avi_desc_mod3').css("display","block");
        _html.find('.puzzle3_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle4_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle5_inves_avi_desc_mod3').css("display","none");
        dispatchInvestigationAviationActivity();
    })
    _html.find('.investigation_aviation_puzzle3').click(function(){
        if(!$(".investigation_aviation_puzzle3").hasClass("Investigation_aviayion_activity_audio_flag")){
            _html.find('.investigation_aviation_puzzle3').addClass('Investigation_aviayion_activity_audio_flag');
            Investigation_aviation_activity_audio_flag_counter++;
        }
        _html.find('.investigation_aviation_inner_mod3').addClass('investigation_aviation_inner_mod3_click');
        _html.find('.investigation_aviation_right_box_mod3').css("display","block");

        _html.find('.investigation_aviation_puzzle1_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle2_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle3_bold').css("display","block");
        _html.find('.investigation_aviation_puzzle4_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle5_bold').css("display","none");

        _html.find('.investigation_aviation_puzzle3').css("display","none");
        _html.find('.investigation_aviation_puzzle1').css("display","block");
        _html.find('.investigation_aviation_puzzle2').css("display","block");
        _html.find('.investigation_aviation_puzzle4').css("display","block");
        _html.find('.investigation_aviation_puzzle5').css("display","block");

        _html.find('.puzzle1_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle2_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle3_inves_avi_desc_mod3').css("display","block");
        _html.find('.puzzle4_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle5_inves_avi_desc_mod3').css("display","none");
        dispatchInvestigationAviationActivity();
    })
    _html.find('.investigation_aviation_puzzle4').click(function(){
        if(!$(".investigation_aviation_puzzle4").hasClass("Investigation_aviayion_activity_audio_flag")){
            _html.find('.investigation_aviation_puzzle4').addClass('Investigation_aviayion_activity_audio_flag');
            Investigation_aviation_activity_audio_flag_counter++;
        }
        _html.find('.investigation_aviation_inner_mod3').addClass('investigation_aviation_inner_mod3_click');
        _html.find('.investigation_aviation_right_box_mod3').css("display","block");

        _html.find('.investigation_aviation_puzzle1_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle2_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle3_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle4_bold').css("display","block");
        _html.find('.investigation_aviation_puzzle5_bold').css("display","none");

        _html.find('.investigation_aviation_puzzle4').css("display","none");
        _html.find('.investigation_aviation_puzzle1').css("display","block");
        _html.find('.investigation_aviation_puzzle2').css("display","block");
        _html.find('.investigation_aviation_puzzle3').css("display","block");
        _html.find('.investigation_aviation_puzzle5').css("display","block");

        _html.find('.puzzle1_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle2_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle3_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle4_inves_avi_desc_mod3').css("display","block");
        _html.find('.puzzle5_inves_avi_desc_mod3').css("display","none");
        dispatchInvestigationAviationActivity();
    })
    _html.find('.investigation_aviation_puzzle5').click(function(){
        if(!$(".investigation_aviation_puzzle5").hasClass("Investigation_aviayion_activity_audio_flag")){
            _html.find('.investigation_aviation_puzzle5').addClass('Investigation_aviayion_activity_audio_flag');
            Investigation_aviation_activity_audio_flag_counter++;
        }
        _html.find('.investigation_aviation_inner_mod3').addClass('investigation_aviation_inner_mod3_click');
        _html.find('.investigation_aviation_right_box_mod3').css("display","block");
        
       _html.find('.investigation_aviation_puzzle1_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle2_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle3_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle4_bold').css("display","none");
        _html.find('.investigation_aviation_puzzle5_bold').css("display","block");

       _html.find('.investigation_aviation_puzzle5').css("display","none");
       _html.find('.investigation_aviation_puzzle1').css("display","block");
       _html.find('.investigation_aviation_puzzle2').css("display","block");
       _html.find('.investigation_aviation_puzzle3').css("display","block");
       _html.find('.investigation_aviation_puzzle4').css("display","block");

       _html.find('.puzzle1_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle2_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle3_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle4_inves_avi_desc_mod3').css("display","none");
        _html.find('.puzzle5_inves_avi_desc_mod3').css("display","block");
        dispatchInvestigationAviationActivity();
    })

    function dispatchInvestigationAviationActivity(){
        if(Investigation_aviation_activity_audio_flag_counter == 5){
            INVESTIGATION_AVIATION_ACTIVITY_FLAG = true;
            evts.dispatchEvent("INVESTIGATION_AVIATION_ACTIVITY", INVESTIGATION_AVIATION_ACTIVITY_FLAG);
          }
    }

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.investigation_aviation_puzzle1, .investigation_aviation_puzzle2, .investigation_aviation_puzzle3, .investigation_aviation_puzzle4, .investigation_aviation_puzzle5').unbind('keypress').bind('keypress', function(e){


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