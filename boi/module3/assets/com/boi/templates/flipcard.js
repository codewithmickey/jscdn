var flipcard = function(dom,data){

    var evts= new Events();
    var flipcard_audio_flag_counter = 0;
    var FLIPCARD_FLAG = false;

    function construct(){
        _html = dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip({
            'placement': 'top'
        });
        $('.card_container_mobile_desktop').on('click', '.card-flipcard .card', function() {
            $('.card_container_mobile_desktop .card.flipcard_original_mod3').removeClass('flipcard_original_mod3');
            $(this).addClass('flipcard_original_mod3');

            if(!$(this).hasClass("head_of_mission_report_audio_flag")){
                $(this).addClass('head_of_mission_report_audio_flag');
                flipcard_audio_flag_counter++;
            }
            dispatchFlipcard();
        });

        $('.card_container_mobile_desktop').on('keypress', '.card-flipcard .card', function() {
            $('.card_container_mobile_desktop .card.flipcard_original_mod3').removeClass('flipcard_original_mod3');
            $(this).addClass('flipcard_original_mod3');

            if(!$(this).hasClass("head_of_mission_report_audio_flag")){
                $(this).addClass('head_of_mission_report_audio_flag');
                flipcard_audio_flag_counter++;
            }
            dispatchFlipcard();
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

    $('.secure_scene_tab1').click(function(){
        $('show_secure_scene_tab1').focus();
    })

    $('.secure_scene_tab2').click(function(){
        $('show_secure_scene_tab2').focus();
    })

    $('.secure_scene_tab3').click(function(){
        $('show_secure_scene_tab3').focus();
    })

    $('.secure_scene_tab4').click(function(){
        $('show_secure_scene_tab4').focus();
    })

    function dispatchFlipcard(){
        if(flipcard_audio_flag_counter == 4){
            FLIPCARD_FLAG = true;
            evts.dispatchEvent("FLIPCARD",FLIPCARD_FLAG);
        }
    }

    $('.menuitem_1, .menuitem_2, .menuitem_3, .menuitem_4, .menuitem_5, .menuitem_6, .menuitem_7, .menuitem_8').unbind('keypress').bind('keypress', function(e){
                            // if(!$(this).hasClass("disabled")){
                                if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){
                                return false;
                                }
                                if(e.keyCode !=9){
                                $(e.target).trigger('click');
                                }
                            // }
                        })

    construct()
    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}