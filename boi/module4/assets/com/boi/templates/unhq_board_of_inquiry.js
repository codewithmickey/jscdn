var unhq_board_of_inquiry = function(dom,data){

    var evts= new Events();
    var unhq_board_of_inquiry_audio_flag_counter=0;
    var UNHQ_BOARD_OF_INQUIRY_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    $(document).ready(function() {
    $.getJSON( "assets/json/config.json", function( data ) {
        $('.img_clickable_1, .img_clickable_2, .img_clickable_3, .img_clickable_4').unbind('keypress').bind('keypress', function(e){


            if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

            return false;
            }
            if(e.keyCode !=9){

            $(e.target).trigger('click');
            }
        })
    });
})

    _html.find('.img_clickable_1').click(function(){
        if(!$(".img_clickable_1").hasClass("unhq_board_of_inquiry_audio_flag")){
            _html.find('.img_clickable_1').addClass('unhq_board_of_inquiry_audio_flag');
            unhq_board_of_inquiry_audio_flag_counter++;
        }
        $('.img1_custom_class').removeClass('hide');
        $('.tab1_desc_rect1').removeClass('hide');
        $('.mob-port-img-tab2').addClass('img2_custom_tab1_topleft')
        $('.mob-port-img-tab3').addClass('img3_custom_tab1_topleft')
        $('.mob-port-img-tab4').addClass('img4_custom_tab1_topleft')
        $('.mob-port-img-tab3').removeClass('img3_custom_tab2_topleft')
        $('.mob-port-img-tab4').removeClass('img4_custom_tab2_topleft')
        $('.mob-port-img-tab4').removeClass('img4_custom_tab3_topleft')

        $('.ipad-img-tab2').addClass('img2_custom_tab1_topleft')
        $('.ipad-img-tab3').addClass('img3_custom_tab1_topleft')
        $('.ipad-img-tab4').addClass('img4_custom_tab1_topleft')
        $('.ipad-img-tab3').removeClass('img3_custom_tab2_topleft')
        $('.ipad-img-tab4').removeClass('img4_custom_tab2_topleft')
        $('.ipad-img-tab4').removeClass('img4_custom_tab3_topleft')

        $('.img2_custom_class').addClass('hide');
        $('.tab2_desc_rect2').addClass('hide');
        $('.img3_custom_class').addClass('hide');
        $('.tab3_desc_rect3').addClass('hide');
        $('.img4_custom_class').addClass('hide');
        $('.tab4_desc_rect4').addClass('hide');
        dispatchUnhqBoardOfInquiry();
    })

     _html.find('.img_clickable_2').click(function(){
        if(!$(".img_clickable_2").hasClass("unhq_board_of_inquiry_audio_flag")){
            _html.find('.img_clickable_2').addClass('unhq_board_of_inquiry_audio_flag');
            unhq_board_of_inquiry_audio_flag_counter++;
        }
        $('.img2_custom_class').removeClass('hide');
        $('.tab2_desc_rect2').removeClass('hide');
        $('.mob-port-img-tab2').removeClass('img2_custom_tab1_topleft')
        $('.mob-port-img-tab3').removeClass('img3_custom_tab1_topleft')
        $('.mob-port-img-tab4').removeClass('img4_custom_tab1_topleft')
        $('.mob-port-img-tab3').addClass('img3_custom_tab2_topleft')
        $('.mob-port-img-tab4').addClass('img4_custom_tab2_topleft')
        $('.mob-port-img-tab4').removeClass('img4_custom_tab3_topleft')

        $('.ipad-img-tab2').removeClass('img2_custom_tab1_topleft')
        $('.ipad-img-tab3').removeClass('img3_custom_tab1_topleft')
        $('.ipad-img-tab4').removeClass('img4_custom_tab1_topleft')
        $('.ipad-img-tab3').addClass('img3_custom_tab2_topleft')
        $('.ipad-img-tab4').addClass('img4_custom_tab2_topleft')
        $('.ipad-img-tab4').removeClass('img4_custom_tab3_topleft')

        $('.img1_custom_class').addClass('hide');
        $('.tab1_desc_rect1').addClass('hide');
        $('.img3_custom_class').addClass('hide');
        $('.tab3_desc_rect3').addClass('hide');
        $('.img4_custom_class').addClass('hide');
        $('.tab4_desc_rect4').addClass('hide');
        dispatchUnhqBoardOfInquiry();
    })

     _html.find('.img_clickable_3').click(function(){
        if(!$(".img_clickable_3").hasClass("unhq_board_of_inquiry_audio_flag")){
            _html.find('.img_clickable_3').addClass('unhq_board_of_inquiry_audio_flag');
            unhq_board_of_inquiry_audio_flag_counter++;
        }
        $('.img3_custom_class').removeClass('hide');
        $('.tab3_desc_rect3').removeClass('hide');
        $('.mob-port-img-tab2').removeClass('img2_custom_tab1_topleft')
        $('.mob-port-img-tab3').removeClass('img3_custom_tab1_topleft')
        $('.mob-port-img-tab4').removeClass('img4_custom_tab1_topleft')
        $('.mob-port-img-tab3').removeClass('img3_custom_tab2_topleft')
        $('.mob-port-img-tab4').removeClass('img4_custom_tab2_topleft')
        $('.mob-port-img-tab4').addClass('img4_custom_tab3_topleft')

        $('.ipad-img-tab2').removeClass('img2_custom_tab1_topleft')
        $('.ipad-img-tab3').removeClass('img3_custom_tab1_topleft')
        $('.ipad-img-tab4').removeClass('img4_custom_tab1_topleft')
        $('.ipad-img-tab3').removeClass('img3_custom_tab2_topleft')
        $('.ipad-img-tab4').removeClass('img4_custom_tab2_topleft')
        $('.ipad-img-tab4').addClass('img4_custom_tab3_topleft')

        $('.img1_custom_class').addClass('hide');
        $('.tab1_desc_rect1').addClass('hide');
        $('.img2_custom_class').addClass('hide');
        $('.tab2_desc_rect2').addClass('hide');
        $('.img4_custom_class').addClass('hide');
        $('.tab4_desc_rect4').addClass('hide');
        dispatchUnhqBoardOfInquiry();
    })

     _html.find('.img_clickable_4').click(function(){
        if(!$(".img_clickable_4").hasClass("unhq_board_of_inquiry_audio_flag")){
            _html.find('.img_clickable_4').addClass('unhq_board_of_inquiry_audio_flag');
            unhq_board_of_inquiry_audio_flag_counter++;
        }
        $('.img4_custom_class').removeClass('hide');
        $('.tab4_desc_rect4').removeClass('hide');
        $('.mob-port-img-tab2').removeClass('img2_custom_tab1_topleft')
        $('.mob-port-img-tab3').removeClass('img3_custom_tab1_topleft')
        $('.mob-port-img-tab4').removeClass('img4_custom_tab1_topleft')
        $('.mob-port-img-tab3').removeClass('img3_custom_tab2_topleft')
        $('.mob-port-img-tab4').removeClass('img4_custom_tab2_topleft')
        $('.mob-port-img-tab4').removeClass('img4_custom_tab3_topleft')

        $('.ipad-img-tab2').removeClass('img2_custom_tab1_topleft')
        $('.ipad-img-tab3').removeClass('img3_custom_tab1_topleft')
        $('.ipad-img-tab4').removeClass('img4_custom_tab1_topleft')
        $('.ipad-img-tab3').removeClass('img3_custom_tab2_topleft')
        $('.ipad-img-tab4').removeClass('img4_custom_tab2_topleft')
        $('.ipad-img-tab4').removeClass('img4_custom_tab3_topleft')
        
        $('.img1_custom_class').addClass('hide');
        $('.tab1_desc_rect1').addClass('hide');
        $('.img2_custom_class').addClass('hide');
        $('.tab2_desc_rect2').addClass('hide');
        $('.img3_custom_class').addClass('hide');
        $('.tab3_desc_rect3').addClass('hide');
        dispatchUnhqBoardOfInquiry();
    })

    function dispatchUnhqBoardOfInquiry(){
        if(unhq_board_of_inquiry_audio_flag_counter == 4){
            UNHQ_BOARD_OF_INQUIRY_FLAG = true;
            evts.dispatchEvent("UNHQ_BOARD_OF_INQUIRY", UNHQ_BOARD_OF_INQUIRY_FLAG);
        }
    }

    $('.click_cursor_replay').click(function(){
        $('.img1_custom_class').addClass('hide');
        $('.tab1_desc_rect1').addClass('hide');
        $('.img2_custom_class').addClass('hide');
        $('.tab2_desc_rect2').addClass('hide');
        $('.img3_custom_class').addClass('hide');
        $('.tab3_desc_rect3').addClass('hide');
        $('.img4_custom_class').addClass('hide');
        $('.tab4_desc_rect4').addClass('hide');
    });

    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}