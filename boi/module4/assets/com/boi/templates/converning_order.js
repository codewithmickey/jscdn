var converning_order = function(dom,data){

    var evts= new Events();
    var converning_order_audio_flag_counter = 0;
    var CONVERNING_ORDER_AUDIO_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find(".introSubHeader_slide1114_plus").click(function () {
        if(!$(".introSubHeader_slide1114_plus").hasClass("converning_order_audio_flag")){
            _html.find('.introSubHeader_slide1114_plus').addClass('converning_order_audio_flag');
            converning_order_audio_flag_counter++;
        }
        _html.find(".show_slide12_section1").removeClass("hide");
        $('.show_slide12_section1').focus();
        _html.find(".introSubHeader_slide1114_plus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').addClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".show_slide14_section3").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find('.intro_parent1_slide11_1 > .introSubHeader_slide1114_rect').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .introSubHeader_slide1114_rect').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .introSubHeader_slide1114_rect').text('Review claims by United Nations');
        // $('.using__mouse').css("outline", "unset");
        dispatchConverningOrder();
    });

    _html.find(".introSubHeader_slide1114_minus").click(function () {
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".show_slide12_section1").addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".show_slide14_section3").addClass("hide");
         _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_1 > .introSubHeader_slide1114_rect').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .introSubHeader_slide1114_rect').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .introSubHeader_slide1114_rect').text('Review claims by United Nations');
    });
    
    _html.find(".introSubHeader_slide1114_plus1").click(function () {
        if(!$(".introSubHeader_slide1114_plus1").hasClass("converning_order_audio_flag")){
            _html.find('.introSubHeader_slide1114_plus1').addClass('converning_order_audio_flag');
            converning_order_audio_flag_counter++;
        }
        _html.find(".show_slide13_section2").removeClass("hide");
        $('.show_slide13_section2').focus();
        _html.find(".introSubHeader_slide1114_plus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').addClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find(".show_slide12_section1").addClass("hide");
        _html.find(".show_slide14_section3").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find('.intro_parent1_slide11_1 > .introSubHeader_slide1114_rect').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .introSubHeader_slide1114_rect').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .introSubHeader_slide1114_rect').text('Review claims by United Nations');
        // $('.using__mouse').css("outline", "unset");
        dispatchConverningOrder();
    });

    _html.find(".introSubHeader_slide1114_minus1").click(function () {
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".show_slide12_section1").addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".show_slide14_section3").addClass("hide");
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_1 > .introSubHeader_slide1114_rect').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .introSubHeader_slide1114_rect').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .introSubHeader_slide1114_rect').text('Review claims by United Nations');
    });

    $(".click_cursor_replay").click(function () {
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find(".show_slide12_section1").addClass("hide");

        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find(".show_slide13_section2").addClass("hide");

    });

    function dispatchConverningOrder(){
        if(converning_order_audio_flag_counter == 2){
            CONVERNING_ORDER_AUDIO_FLAG = true;
            evts.dispatchEvent("CONVERNING_ORDER",CONVERNING_ORDER_AUDIO_FLAG);
        }
    }

    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}