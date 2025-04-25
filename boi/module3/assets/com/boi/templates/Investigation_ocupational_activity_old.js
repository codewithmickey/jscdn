var Investigation_ocupational_activity = function(dom,data){

    var evts= new Events();
    var Investigation_ocupational_activity_audio_flag_counter = 0;
    var INVESTIGATION_OCUPATIONAL_ACTIVITY_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()    

      _html.find(".investigation_puzzle1_mod3").click(function(){
        if(!$(".investigation_puzzle1_mod3").hasClass("Investigation_ocupational_activity_audio_flag")){
          _html.find('.investigation_puzzle1_mod3').addClass('Investigation_ocupational_activity_audio_flag');
          Investigation_ocupational_activity_audio_flag_counter++;
        }
        _html.find(".investigation_common_puzzle_mod3").addClass('investigation_common_puzzle_mod3_click')
        _html.find(".investigation_left_box_text_mod3").css("display", "block");
        _html.find(".investigation_bold_puzzle1_mod3").css("display", "block");
        _html.find(".puzzle1_desc_mod3").css("display", "block");
        _html.find(".puzzle2_desc_mod3").css("display", "none");
        _html.find(".puzzle3_desc_mod3").css("display", "none");
        _html.find(".puzzle4_desc_mod3").css("display", "none");
        _html.find(".investigation_puzzle1_mod3").css("display", "none");
        _html.find(".investigation_puzzle2_mod3").css("display", "block");
        _html.find(".investigation_puzzle3_mod3").css("display", "block");
        _html.find(".investigation_puzzle4_mod3").css("display", "block");
        _html.find(".investigation_bold_puzzle2_mod3").css("display", "none");
        _html.find(".investigation_bold_puzzle3_mod3").css("display", "none");
        _html.find(".investigation_bold_puzzle4_mod3").css("display", "none");
        dispatchInvestigationOcupationalActivity();
      });

      _html.find(".investigation_puzzle2_mod3").click(function(){
        if(!$(".investigation_puzzle2_mod3").hasClass("Investigation_ocupational_activity_audio_flag")){
          _html.find('.investigation_puzzle2_mod3').addClass('Investigation_ocupational_activity_audio_flag');
          Investigation_ocupational_activity_audio_flag_counter++;
        }
        _html.find(".investigation_common_puzzle_mod3").addClass('investigation_common_puzzle_mod3_click')
        _html.find(".investigation_left_box_text_mod3").css("display", "block");
        _html.find(".investigation_bold_puzzle2_mod3").css("display", "block");
        _html.find(".puzzle1_desc_mod3").css("display", "none");
        _html.find(".puzzle2_desc_mod3").css("display", "block");
        _html.find(".puzzle3_desc_mod3").css("display", "none");
        _html.find(".puzzle4_desc_mod3").css("display", "none");
        _html.find(".investigation_puzzle2_mod3").css("display", "none");
        _html.find(".investigation_puzzle1_mod3").css("display", "block");
        _html.find(".investigation_puzzle3_mod3").css("display", "block");
        _html.find(".investigation_puzzle4_mod3").css("display", "block");
        _html.find(".investigation_bold_puzzle1_mod3").css("display", "none");
        _html.find(".investigation_bold_puzzle3_mod3").css("display", "none");
        _html.find(".investigation_bold_puzzle4_mod3").css("display", "none");
        dispatchInvestigationOcupationalActivity();
      });

      _html.find(".investigation_puzzle3_mod3").click(function(){
        if(!$(".investigation_puzzle3_mod3").hasClass("Investigation_ocupational_activity_audio_flag")){
          _html.find('.investigation_puzzle3_mod3').addClass('Investigation_ocupational_activity_audio_flag');
          Investigation_ocupational_activity_audio_flag_counter++;
        }
        _html.find(".investigation_common_puzzle_mod3").addClass('investigation_common_puzzle_mod3_click')
        _html.find(".investigation_left_box_text_mod3").css("display", "block");
        _html.find(".investigation_bold_puzzle3_mod3").css("display", "block");
        _html.find(".puzzle1_desc_mod3").css("display", "none");
        _html.find(".puzzle2_desc_mod3").css("display", "none");
        _html.find(".puzzle3_desc_mod3").css("display", "block");
        _html.find(".puzzle4_desc_mod3").css("display", "none");
        _html.find(".investigation_puzzle3_mod3").css("display", "none");
        _html.find(".investigation_puzzle1_mod3").css("display", "block");
        _html.find(".investigation_puzzle2_mod3").css("display", "block");
        _html.find(".investigation_puzzle4_mod3").css("display", "block");
        _html.find(".investigation_bold_puzzle1_mod3").css("display", "none");
        _html.find(".investigation_bold_puzzle2_mod3").css("display", "none");
        _html.find(".investigation_bold_puzzle4_mod3").css("display", "none");
        dispatchInvestigationOcupationalActivity();
      });

      _html.find(".investigation_puzzle4_mod3").click(function(){
        if(!$(".investigation_puzzle4_mod3").hasClass("Investigation_ocupational_activity_audio_flag")){
          _html.find('.investigation_puzzle4_mod3').addClass('Investigation_ocupational_activity_audio_flag');
          Investigation_ocupational_activity_audio_flag_counter++;
        }
        _html.find(".investigation_common_puzzle_mod3").addClass('investigation_common_puzzle_mod3_click')
        _html.find(".investigation_left_box_text_mod3").css("display", "block");
        _html.find(".investigation_bold_puzzle4_mod3").css("display", "block");
        _html.find(".puzzle1_desc_mod3").css("display", "none");
        _html.find(".puzzle2_desc_mod3").css("display", "none");
        _html.find(".puzzle3_desc_mod3").css("display", "none");
        _html.find(".puzzle4_desc_mod3").css("display", "block");
        _html.find(".investigation_puzzle4_mod3").css("display", "none");
        _html.find(".investigation_puzzle1_mod3").css("display", "block");
        _html.find(".investigation_puzzle2_mod3").css("display", "block");
        _html.find(".investigation_puzzle3_mod3").css("display", "block");
        _html.find(".investigation_bold_puzzle1_mod3").css("display", "none");
        _html.find(".investigation_bold_puzzle2_mod3").css("display", "none");
        _html.find(".investigation_bold_puzzle3_mod3").css("display", "none");
        dispatchInvestigationOcupationalActivity();
      });

      function dispatchInvestigationOcupationalActivity(){
        if(Investigation_ocupational_activity_audio_flag_counter == 4){
          INVESTIGATION_OCUPATIONAL_ACTIVITY_FLAG = true;
          evts.dispatchEvent("INVESTIGATION_OCUPATIONAL_ACTIVITY", INVESTIGATION_OCUPATIONAL_ACTIVITY_FLAG);
        }
      }

      $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.investigation_puzzle1_mod3, .investigation_puzzle2_mod3, .investigation_puzzle3_mod3, .investigation_puzzle4_mod3').unbind('keypress').bind('keypress', function(e){


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