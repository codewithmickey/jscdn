var the_boi_function = function(dom,data){

    var evts= new Events();
    var the_boi_function_audio_flag_counter = 0;
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
            $('.introSubHeader_slide1114_plus, .introSubHeader_slide1114_minus, .introSubHeader_slide1114_plus1, .introSubHeader_slide1114_minus1, .introSubHeader_slide1114_plus2, .introSubHeader_slide1114_minus2, .introSubHeader_slide1114_plus3, .introSubHeader_slide1114_minus3, .introSubHeader_slide1114_plus4, .introSubHeader_slide1114_minus4').unbind('keypress').bind('keypress', function(e){


                if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

                return false;
                }
                if(e.keyCode !=9){

                $(e.target).trigger('click');
                }
            })
        });
    })

/* Menu */
    _html.find(".introSubHeader_slide1114_plus").click(function () {
        if(!$(".intro_parent1_slide11_1").hasClass("the_boi_function_audio_flag")){
            _html.find('.intro_parent1_slide11_1').addClass('the_boi_function_audio_flag');
            the_boi_function_audio_flag_counter++;
        }
        _html.find(".show_slide12_section1_the_boi").removeClass("hide");
        $('.first_menu_first_para_focus').focus();
        _html.find(".intro_parent1_slide11_2").addClass("intro_parent1_slide11_2_top");
        _html.find(".intro_parent1_slide11_3").addClass("intro_parent1_slide11_3_top");
        _html.find(".intro_parent1_slide11_4").addClass("intro_parent1_slide11_4_top");
        _html.find(".intro_parent1_slide11_5").addClass("intro_parent1_slide11_5_top");
        _html.find(".main_img_slide14_mod2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').addClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_4').removeClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_5').removeClass('intro_parent1_slide11_5_color');
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus3").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus4").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus3").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus4").removeClass("hide");
        _html.find(".plus_minus_area_1").addClass("plus_minus_area_1_after_click");
        _html.find(".plus_minus_area_2").addClass("plus_minus_area_2_after_click");
        _html.find(".plus_minus_area_3").addClass("plus_minus_area_3_after_click");
        _html.find(".plus_minus_area_4").addClass("plus_minus_area_4_after_click");
        _html.find(".plus_minus_area_5").addClass("plus_minus_area_5_after_click");
        _html.find('.slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Menu');
        _html.find('.slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Resources');
        _html.find('.slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Glossary');
        _html.find('.slide11_rectangle_4_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Help');
        _html.find('.slide11_rectangle_5_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Audio Player');
        dispatchTheBoiFunction();
    });

    _html.find(".introSubHeader_slide1114_minus").click(function () {
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".intro_parent1_slide11_2").removeClass("intro_parent1_slide11_2_top");
        _html.find(".intro_parent1_slide11_3").removeClass("intro_parent1_slide11_3_top");
        _html.find(".intro_parent1_slide11_4").removeClass("intro_parent1_slide11_4_top");
        _html.find(".intro_parent1_slide11_5").removeClass("intro_parent1_slide11_5_top");
        _html.find(".main_img_slide14_mod2").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Menu');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Resources');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Glossary');
        _html.find('.intro_parent1_slide11_4 > .slide11_rectangle_4_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Help');
        _html.find('.intro_parent1_slide11_5 > .slide11_rectangle_5_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Audio Player');
    });
      

/* Resources */    
    _html.find(".introSubHeader_slide1114_plus1").click(function () {
        if(!$(".intro_parent1_slide11_2").hasClass("the_boi_function_audio_flag")){
            _html.find('.intro_parent1_slide11_2').addClass('the_boi_function_audio_flag');
            the_boi_function_audio_flag_counter++;
        }
        _html.find(".show_slide13_section2_the_boi").removeClass("hide");
        $('.second_menu_first_para_focus').focus();
        _html.find(".intro_parent1_slide11_1").addClass("intro_parent1_slide11_1_top");
        _html.find(".intro_parent1_slide11_2").removeClass("intro_parent1_slide11_2_top");
        _html.find(".intro_parent1_slide11_3").addClass("intro_parent1_slide11_3_top");
        _html.find(".intro_parent1_slide11_4").addClass("intro_parent1_slide11_4_top");
        _html.find(".intro_parent1_slide11_5").addClass("intro_parent1_slide11_5_top");
        _html.find(".main_img_slide14_mod2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').addClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_4').removeClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_5').removeClass('intro_parent1_slide11_5_color');
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus3").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus4").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus3").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus4").removeClass("hide");
        _html.find(".plus_minus_area_1").addClass("plus_minus_area_1_after_click");
        _html.find(".plus_minus_area_2").addClass("plus_minus_area_2_after_click");
        _html.find(".plus_minus_area_3").addClass("plus_minus_area_3_after_click");
        _html.find(".plus_minus_area_4").addClass("plus_minus_area_4_after_click");
        _html.find(".plus_minus_area_5").addClass("plus_minus_area_5_after_click");
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Menu');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Resources');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Glossary');
        _html.find('.intro_parent1_slide11_4 > .slide11_rectangle_4_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Help');
        _html.find('.intro_parent1_slide11_5 > .slide11_rectangle_5_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Audio Player');
        dispatchTheBoiFunction();
    });

    _html.find(".introSubHeader_slide1114_minus1").click(function () {
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".intro_parent1_slide11_1").removeClass("intro_parent1_slide11_1_top");
        _html.find(".intro_parent1_slide11_3").removeClass("intro_parent1_slide11_3_top");
        _html.find(".intro_parent1_slide11_4").removeClass("intro_parent1_slide11_4_top");
        _html.find(".intro_parent1_slide11_5").removeClass("intro_parent1_slide11_5_top");
        _html.find(".main_img_slide14_mod2").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Menu');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Resources');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Glossary');
        _html.find('.intro_parent1_slide11_4 > .slide11_rectangle_4_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Help');
        _html.find('.intro_parent1_slide11_5 > .slide11_rectangle_5_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Audio Player');
    });

/*Glossary */
    _html.find(".introSubHeader_slide1114_plus2").click(function () {
        if(!$(".intro_parent1_slide11_3").hasClass("the_boi_function_audio_flag")){
            _html.find('.intro_parent1_slide11_3').addClass('the_boi_function_audio_flag');
            the_boi_function_audio_flag_counter++;
        }
        _html.find(".show_slide14_section3_the_boi").removeClass("hide");
        $('.third_menu_first_para_focus').focus();
        _html.find(".intro_parent1_slide11_1").addClass("intro_parent1_slide11_1_top");
        _html.find(".intro_parent1_slide11_2").removeClass("intro_parent1_slide11_2_top");
        _html.find(".intro_parent1_slide11_3").removeClass("intro_parent1_slide11_3_top");
        _html.find(".intro_parent1_slide11_4").addClass("intro_parent1_slide11_4_top");
        _html.find(".intro_parent1_slide11_5").addClass("intro_parent1_slide11_5_top");
        _html.find(".main_img_slide14_mod2").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').addClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_4').removeClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_5').removeClass('intro_parent1_slide11_5_color');
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide13_section4_the_boi").addClass("hide");
        _html.find(".show_slide13_section5_the_boi").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus3").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus4").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus3").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus4").removeClass("hide");
        _html.find(".plus_minus_area_1").addClass("plus_minus_area_1_after_click");
        _html.find(".plus_minus_area_2").addClass("plus_minus_area_2_after_click");
        _html.find(".plus_minus_area_3").addClass("plus_minus_area_3_after_click");
        _html.find(".plus_minus_area_4").addClass("plus_minus_area_4_after_click");
        _html.find(".plus_minus_area_5").addClass("plus_minus_area_5_after_click");
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Menu');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Resources');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Glossary');
        _html.find('.intro_parent1_slide11_4 > .slide11_rectangle_4_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Help');
        _html.find('.intro_parent1_slide11_5 > .slide11_rectangle_5_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Audio Player');
        dispatchTheBoiFunction();
    });

    _html.find(".introSubHeader_slide1114_minus2").click(function () {
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".intro_parent1_slide11_1").removeClass("intro_parent1_slide11_1_top");
        _html.find(".intro_parent1_slide11_2").removeClass("intro_parent1_slide11_2_top");
        _html.find(".intro_parent1_slide11_4").removeClass("intro_parent1_slide11_4_top");
        _html.find(".intro_parent1_slide11_5").removeClass("intro_parent1_slide11_5_top");
        _html.find(".main_img_slide14_mod2").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Menu');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Resources');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Glossary');
        _html.find('.intro_parent1_slide11_4 > .slide11_rectangle_4_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Help');
        _html.find('.intro_parent1_slide11_5 > .slide11_rectangle_5_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Audio Player');
    });


/* Help */
    _html.find(".introSubHeader_slide1114_plus3").click(function () {
        if(!$(".intro_parent1_slide11_4").hasClass("the_boi_function_audio_flag")){
            _html.find('.intro_parent1_slide11_4').addClass('the_boi_function_audio_flag');
            the_boi_function_audio_flag_counter++;
        }
        _html.find(".show_slide14_section4_the_boi").removeClass("hide");
        $('.fourth_menu_first_para_focus').focus();
        _html.find(".intro_parent1_slide11_1").addClass("intro_parent1_slide11_1_top");
        _html.find(".intro_parent1_slide11_2").removeClass("intro_parent1_slide11_2_top");
        _html.find(".intro_parent1_slide11_3").removeClass("intro_parent1_slide11_3_top");
        _html.find(".intro_parent1_slide11_4").removeClass("intro_parent1_slide11_4_top");
        _html.find(".intro_parent1_slide11_5").addClass("intro_parent1_slide11_5_top");
        _html.find(".main_img_slide14_mod2").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus3").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus3").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_4').addClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_5').removeClass('intro_parent1_slide11_5_color');
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide13_section3_the_boi").addClass("hide");
        _html.find(".show_slide13_section4_the_boi").addClass("hide");
        _html.find(".show_slide13_section5_the_boi").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus4").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus4").removeClass("hide");
        _html.find(".plus_minus_area_1").addClass("plus_minus_area_1_after_click");
        _html.find(".plus_minus_area_2").addClass("plus_minus_area_2_after_click");
        _html.find(".plus_minus_area_3").addClass("plus_minus_area_3_after_click");
        _html.find(".plus_minus_area_4").addClass("plus_minus_area_4_after_click");
        _html.find(".plus_minus_area_5").addClass("plus_minus_area_5_after_click");
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Menu');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Resources');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Glossary');
        _html.find('.intro_parent1_slide11_4 > .slide11_rectangle_4_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Help');
        _html.find('.intro_parent1_slide11_5 > .slide11_rectangle_5_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Audio Player');
        dispatchTheBoiFunction();
    });

    _html.find(".introSubHeader_slide1114_minus3").click(function () {
        _html.find(".introSubHeader_slide1114_minus3").addClass("hide");
        _html.find(".intro_parent1_slide11_1").removeClass("intro_parent1_slide11_1_top");
        _html.find(".intro_parent1_slide11_2").removeClass("intro_parent1_slide11_2_top");
        _html.find(".intro_parent1_slide11_3").removeClass("intro_parent1_slide11_3_top");
        _html.find(".intro_parent1_slide11_5").removeClass("intro_parent1_slide11_5_top");
        _html.find(".main_img_slide14_mod2").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus3").removeClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find('.intro_parent1_slide11_4').removeClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Menu');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Resources');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Glossary');
        _html.find('.intro_parent1_slide11_4 > .slide11_rectangle_4_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Help');
        _html.find('.intro_parent1_slide11_5 > .slide11_rectangle_5_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Audio Player');
    });

/* Audio Player */
    _html.find(".introSubHeader_slide1114_plus4").click(function () {
        if(!$(".intro_parent1_slide11_5").hasClass("the_boi_function_audio_flag")){
            _html.find('.intro_parent1_slide11_5').addClass('the_boi_function_audio_flag');
            the_boi_function_audio_flag_counter++;
        }
        _html.find(".show_slide14_section5_the_boi").removeClass("hide");
        $('.fifth_menu_first_para_focus').focus();
        _html.find(".intro_parent1_slide11_1").addClass("intro_parent1_slide11_1_top");
        _html.find(".intro_parent1_slide11_2").removeClass("intro_parent1_slide11_2_top");
        _html.find(".intro_parent1_slide11_3").removeClass("intro_parent1_slide11_3_top");
        _html.find(".intro_parent1_slide11_4").removeClass("intro_parent1_slide11_4_top");
        _html.find(".intro_parent1_slide11_5").removeClass("intro_parent1_slide11_5_top");
        _html.find(".main_img_slide14_mod2").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus4").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus4").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_4').removeClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_5').addClass('intro_parent1_slide11_5_color');
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide13_section3_the_boi").addClass("hide");
        _html.find(".show_slide13_section4_the_boi").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus3").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus3").removeClass("hide");
        _html.find(".plus_minus_area_1").addClass("plus_minus_area_1_after_click");
        _html.find(".plus_minus_area_2").addClass("plus_minus_area_2_after_click");
        _html.find(".plus_minus_area_3").addClass("plus_minus_area_3_after_click");
        _html.find(".plus_minus_area_4").addClass("plus_minus_area_4_after_click");
        _html.find(".plus_minus_area_5").addClass("plus_minus_area_5_after_click");
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Menu');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Resources');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Glossary');
        _html.find('.intro_parent1_slide11_4 > .slide11_rectangle_4_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Help');
        _html.find('.intro_parent1_slide11_5 > .slide11_rectangle_5_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Audio Player');
        dispatchTheBoiFunction();
    });

    _html.find(".introSubHeader_slide1114_minus4").click(function () {
        _html.find(".introSubHeader_slide1114_minus4").addClass("hide");
        _html.find(".intro_parent1_slide11_1").removeClass("intro_parent1_slide11_1_top");
        _html.find(".intro_parent1_slide11_2").removeClass("intro_parent1_slide11_2_top");
        _html.find(".intro_parent1_slide11_3").removeClass("intro_parent1_slide11_3_top");
        _html.find(".intro_parent1_slide11_4").removeClass("intro_parent1_slide11_4_top");
        _html.find(".main_img_slide14_mod2").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus4").removeClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find('.intro_parent1_slide11_5').removeClass('intro_parent1_slide11_5_color');
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Menu');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Resources');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Glossary');
        _html.find('.intro_parent1_slide11_4 > .slide11_rectangle_4_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Help');
        _html.find('.intro_parent1_slide11_5 > .slide11_rectangle_5_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Audio Player');
    });
    
    function dispatchTheBoiFunction(){

        if(the_boi_function_audio_flag_counter == 5){
            THE_BOI_FUNCTION_FLAG = true;
            evts.dispatchEvent("THE_BOI_FUNCTION",THE_BOI_FUNCTION_FLAG);
        }
    }

    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}