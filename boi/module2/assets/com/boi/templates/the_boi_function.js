var the_boi_function = function(dom,data){

    var evts= new Events();
    var the_boi_function_audio_flag_counter=0;
    var THE_BOI_FUNCTION_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom
        
        // load external dom
        
        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")
        
    }
    construct()

    _html.find(".introSubHeader_slide1114_plus").click(function () {
        if(!$(".intro_parent1_slide11_1").hasClass("the_boi_function_audio_flag")){
            _html.find('.intro_parent1_slide11_1').addClass('the_boi_function_audio_flag');
            the_boi_function_audio_flag_counter++;
        }
        _html.find(".show_slide12_section1_the_boi").removeClass("hide");
        $('.show_slide12_section1_the_boi').focus();
        _html.find(".introSubHeader_slide1114_plus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').addClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find(".plus_minus_area_1").addClass("plus_minus_area_1_after_click");
        _html.find(".plus_minus_area_2").addClass("plus_minus_area_2_after_click");
        _html.find(".plus_minus_area_3").addClass("plus_minus_area_3_after_click");
        _html.find('.slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Identify cause and conduct after-action review');
        _html.find('.slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Identify gaps in procedures and policies');
        _html.find('.slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Review claims by United Nations');
        dispatchTheBoiFunction();
    });

    _html.find(".introSubHeader_slide1114_minus").click(function () {
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Review claims by United Nations');
    });
    
    _html.find(".introSubHeader_slide1114_plus1").click(function () {
        if(!$(".intro_parent1_slide11_2").hasClass("the_boi_function_audio_flag")){
            _html.find('.intro_parent1_slide11_2').addClass('the_boi_function_audio_flag');
            the_boi_function_audio_flag_counter++;
        }
        _html.find(".show_slide13_section2_the_boi").removeClass("hide");
        $('.show_slide13_section2_the_boi').focus();
        _html.find(".introSubHeader_slide1114_plus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').addClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find(".plus_minus_area_1").addClass("plus_minus_area_1_after_click");
        _html.find(".plus_minus_area_2").addClass("plus_minus_area_2_after_click");
        _html.find(".plus_minus_area_3").addClass("plus_minus_area_3_after_click");
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Review claims by United Nations');
           dispatchTheBoiFunction();
    });

    _html.find(".introSubHeader_slide1114_minus1").click(function () {
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Review claims by United Nations');
    });
    
    _html.find(".introSubHeader_slide1114_plus2").click(function () {
        if(!$(".intro_parent1_slide11_3").hasClass("the_boi_function_audio_flag")){
            _html.find('.intro_parent1_slide11_3').addClass('the_boi_function_audio_flag');
            the_boi_function_audio_flag_counter++;
        }
        _html.find(".show_slide14_section3_the_boi").removeClass("hide");
        $('.show_slide14_section3_the_boi').focus();
        _html.find(".introSubHeader_slide1114_plus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').addClass('intro_parent1_slide11_3_color');
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".plus_minus_area_1").addClass("plus_minus_area_1_after_click");
        _html.find(".plus_minus_area_2").addClass("plus_minus_area_2_after_click");
        _html.find(".plus_minus_area_3").addClass("plus_minus_area_3_after_click");
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Review claims by United Nations');
        dispatchTheBoiFunction();
    });

    _html.find(".introSubHeader_slide1114_minus2").click(function () {
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Review claims by United Nations');
    });

    $(".click_cursor_replay").click(function () {
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");

        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");

        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
    });

    function dispatchTheBoiFunction(){
        
        if(the_boi_function_audio_flag_counter == 3){
            THE_BOI_FUNCTION_FLAG = true;
            evts.dispatchEvent("THE_BOI_FUNCTION",THE_BOI_FUNCTION_FLAG);
        }
    }

    return {

        getHTML:function(){
            return _html;
        },
        // dispatchTheBoiFunction:dispatchTheBoiFunction,
        evts:evts

    }
}