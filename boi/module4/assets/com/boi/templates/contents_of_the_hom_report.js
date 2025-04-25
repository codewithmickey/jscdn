var contents_of_the_hom_report = function(dom,data){

    var evts= new Events();
    var contents_of_the_hom_report_audio_flag_counter = 0;
    var CONTENTS_OF_THE_HOM_REPORT_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

     _html.find(document).ready(function(){
        _html.find("button[type='button']").click(function(){
        var textBoxValue = _html.find("textarea[name='slide21_name']").val();
            if(textBoxValue != ''){
                _html.find(".Slide22_box_shadow").removeClass("hide");
                 _html.find('textarea').prop('readonly', true);
                  _html.find("#compareBtn").addClass("hide");
            }
         });
    });

     _html.find(".compare_your_thoughts_tab").click(function(){
        var textBoxValue1 = _html.find("textarea[name='slide21_name']").val();
        if(textBoxValue1 != ''){
            if(!$(".compare_your_thoughts_tab").hasClass("contents_of_the_hom_report_audio_flag")){
                _html.find('.compare_your_thoughts_tab').addClass('contents_of_the_hom_report_audio_flag');
                contents_of_the_hom_report_audio_flag_counter++;
            }
            dispatchContentsOfTheHomReport();
        }
    });

    $(".click_cursor_replay").click(function () {
        _html.find(".Slide22_box_shadow").addClass("hide");
        _html.find('textarea').prop('readonly', true);
        _html.find("#compareBtn").removeClass("hide");
    });

    // _html.find(".compare_your_thoughts_tab").click(function(){

    //     if(!$(".compare_your_thoughts_tab").hasClass("contents_of_the_hom_report_audio_flag")){
    //         _html.find('.compare_your_thoughts_tab').addClass('contents_of_the_hom_report_audio_flag');
    //         contents_of_the_hom_report_audio_flag_counter++;
    //     }
    //     dispatchContentsOfTheHomReport();
    // });

    function dispatchContentsOfTheHomReport(){

        if(contents_of_the_hom_report_audio_flag_counter == 1){
            CONTENTS_OF_THE_HOM_REPORT_FLAG = true;
            evts.dispatchEvent("CONTENTS_OF_THE_HOM_REPORT",CONTENTS_OF_THE_HOM_REPORT_FLAG);
        }
    }

    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}