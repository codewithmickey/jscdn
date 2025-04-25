var smart_criteria = function(dom,data){

    var evts= new Events();
    var smart_criteria_audio_flag_counter = 0;
    var SMART_CRITERIA_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find(".example-btn-blue").click(function () {

        $('.smart-criteria-banner').css('display', 'none');
        $('img.example-btn-blue').hide();
        $('img.example-btn-gray').css('display', 'block');
        $('.smart-non-smart-box').css('display', 'block');
        // $('.exampl_smart_nonsmart').focus();
        if(!$(".example-btn-blue").hasClass("smart_criteria_audio_flag")){

            _html.find('.example-btn-blue').addClass('smart_criteria_audio_flag');
            smart_criteria_audio_flag_counter++;
        }
        dispatchSmartCriteria();
    });

    _html.find('img.model-close-image').click(function(){
        $('.smart-criteria-banner').show();
        $('img.example-btn-blue').show();
        $('img.example-btn-gray').hide();
        $('.smart-non-smart-box').hide();
    });

    function dispatchSmartCriteria(){

        if(smart_criteria_audio_flag_counter == 1){
            SMART_CRITERIA_FLAG = true;
            evts.dispatchEvent("SMART_CRITERIA", SMART_CRITERIA_FLAG);
        }
    }

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('img.example-btn-blue, img.example-btn-gray, img.model-close-image').unbind('keypress').bind('keypress', function(e){


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