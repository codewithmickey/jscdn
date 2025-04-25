var head_of_mission_report = function(dom,data){

    var evts= new Events();
    var head_of_mission_report_audio_flag_counter = 0;
    var HEAD_OF_MISSION_REPORT_FLAG = false;

    function construct(){
        _html = dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();  

        $('.card_container_mobile_desktop').on('click', '.card-flipcard .card', function() {
            $('.card_container_mobile_desktop .card.flipcard_original_mod3').removeClass('flipcard_original_mod3');
            
            $(this).addClass('flipcard_original_mod3');

            if(!$(this).hasClass("head_of_mission_report_audio_flag")){
                $(this).addClass('head_of_mission_report_audio_flag');
                head_of_mission_report_audio_flag_counter++;
            }
            dispatchHeadOfMissionReport();
        });

        $('.mobile__arrow_first_tab').click(function () {
            $('.common_assets_candc_head_of_mission_report').addClass("hide")
        })

        $('.mobile__arrow_second_tab').click(function () {
            $('.common_assets_candc_head_of_mission_report').removeClass("hide")
        })

        $('.mobile__arrow_third_tab').click(function () {
            $('.common_assets_candc_head_of_mission_report').removeClass("hide")
        })

        $('.mobile__arrow_fourth_tab').click(function () {
            $('.common_assets_candc_head_of_mission_report').removeClass("hide")
        })
    });

    _html.find('.secure_scene_tab1').click(function(){
        $('show_secure_scene_tab1').focus();
    })

    _html.find('.secure_scene_tab2').click(function(){
        $('show_secure_scene_tab2').focus();
    })

    _html.find('.secure_scene_tab3').click(function(){
        $('show_secure_scene_tab3').focus();
    })

    _html.find('.secure_scene_tab4').click(function(){
        $('show_secure_scene_tab4').focus();
    })

    function dispatchHeadOfMissionReport(){
        if(head_of_mission_report_audio_flag_counter == 4){
            HEAD_OF_MISSION_REPORT_FLAG = true;
            evts.dispatchEvent("HEAD_OF_MISSION_REPORT",HEAD_OF_MISSION_REPORT_FLAG);
        }
    }

    construct()
    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}