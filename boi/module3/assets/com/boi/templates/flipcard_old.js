var flipcard = function(dom,data){

    var evts= new Events();
    var flipcard_flag_counter = 0;
    var FLIPCARD_FLAG = true;
    //var _html = dom

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
            if(!$(this).hasClass("flipcard_flag")){
                $(this).addClass('flipcard_flag');
                flipcard_flag_counter++;
            }
            dispatchBoiReport();
        });
    });

    function dispatchBoiReport(){

        if(flipcard_flag_counter == 4){
            FLIPCARD_FLAG = true;
            evts.dispatchEvent("FLIPCARD", FLIPCARD_FLAG);
        }
    }

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

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.secure_scene_tab2, .second_card_mod3, .third_card_mod3, .fourth_card_mod3').unbind('keypress').bind('keypress', function(e){


                if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

                return false;
                }
                if(e.keyCode !=9){

                $(e.target).trigger('click');
                }
            })
        });
    })

    construct()
    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}