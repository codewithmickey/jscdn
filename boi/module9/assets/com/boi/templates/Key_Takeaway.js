var Key_Takeaway = function(dom,data){

    var evts= new Events();
    var apportioning_personal_audio_flag_counter = 0;
    var APPORTIONING_PERSONAL_FLAG = false;
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
            $('.img1_class_posabs, .img1_class_posabs_res, .img2_class_posabs, .img2_class_posabs_res, .img3_class_posabs, .img3_class_posabs_res, .img4_class_posabs, .img4_class_posabs_res, .img5_class_posabs, .img5_class_posabs_res, .img6_class_posabs, .img6_class_posabs_res, .img7_class_posabs, .img7_class_posabs_res').unbind('keypress').bind('keypress', function(e){


                if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

                return false;
                }
                if(e.keyCode !=9){

                $(e.target).trigger('click');
                }
            })
        });
    })

    _html.find(".img1_class_posabs").click(function () {
        if(!$(".img1_class_posabs").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img1_class_posabs').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img2_class_posabs").click(function () {
        if(!$(".img2_class_posabs").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img2_class_posabs').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img3_class_posabs").click(function () {
        if(!$(".img3_class_posabs").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img3_class_posabs').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img4_class_posabs").click(function () {
        if(!$(".img4_class_posabs").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img4_class_posabs').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img5_class_posabs").click(function () {
        if(!$(".img5_class_posabs").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img5_class_posabs').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img6_class_posabs").click(function () {
        if(!$(".img6_class_posabs").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img6_class_posabs').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img7_class_posabs").click(function () {
        if(!$(".img7_class_posabs").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img7_class_posabs').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img1_class_posabs_res").click(function () {
        if(!$(".img1_class_posabs_res").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img1_class_posabs_res').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img2_class_posabs_res").click(function () {
        if(!$(".img2_class_posabs_res").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img2_class_posabs_res').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img3_class_posabs_res").click(function () {
        if(!$(".img3_class_posabs_res").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img3_class_posabs_res').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img4_class_posabs_res").click(function () {
        if(!$(".img4_class_posabs_res").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img4_class_posabs_res').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img5_class_posabs_res").click(function () {
        if(!$(".img5_class_posabs_res").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img5_class_posabs_res').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img6_class_posabs_res").click(function () {
        if(!$(".img6_class_posabs_res").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img6_class_posabs_res').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    _html.find(".img7_class_posabs_res").click(function () {
        if(!$(".img7_class_posabs_res").hasClass("apportioning_personal_audio_flag")){
            _html.find('.img7_class_posabs_res').addClass('apportioning_personal_audio_flag');
            apportioning_personal_audio_flag_counter++;
        }
        dispatchApportioningPersonal();
    });

    function dispatchApportioningPersonal(){
        if(apportioning_personal_audio_flag_counter == 7){
            APPORTIONING_PERSONAL_FLAG = true;
            evts.dispatchEvent("APPORTIONING_PERSONAL", APPORTIONING_PERSONAL_FLAG);
        }
    }
    
    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}