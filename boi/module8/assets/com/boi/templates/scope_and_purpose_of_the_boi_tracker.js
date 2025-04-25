var scope_and_purpose_of_the_boi_tracker = function(dom,data){

    var evnts= new Events();
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evnts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find(".introSubHeader_slide1114_plus").click(function () {
        _html.find(".show_slide12_section1").removeClass("hide");
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
    });

    _html.find(".introSubHeader_slide1114_minus").click(function () {
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".show_slide12_section1").addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".show_slide14_section3").addClass("hide");
        _html.find('.intro_parent1_slide11_1 > .introSubHeader_slide1114_rect').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .introSubHeader_slide1114_rect').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .introSubHeader_slide1114_rect').text('Review claims by United Nations');
    });
    
    _html.find(".introSubHeader_slide1114_plus1").click(function () {
        _html.find(".show_slide13_section2").removeClass("hide");
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
    });

    _html.find(".introSubHeader_slide1114_minus1").click(function () {
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".show_slide12_section1").addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".show_slide14_section3").addClass("hide");
        _html.find('.intro_parent1_slide11_1 > .introSubHeader_slide1114_rect').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .introSubHeader_slide1114_rect').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .introSubHeader_slide1114_rect').text('Review claims by United Nations');
    });
    
    _html.find(".introSubHeader_slide1114_plus2").click(function () {
        _html.find(".show_slide14_section3").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').addClass('intro_parent1_slide11_3_color');
        _html.find(".show_slide12_section1").addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find('.intro_parent1_slide11_1 > .introSubHeader_slide1114_rect').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .introSubHeader_slide1114_rect').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .introSubHeader_slide1114_rect').text('Review claims by United Nations');
    });

    _html.find(".introSubHeader_slide1114_minus2").click(function () {
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find(".show_slide12_section1").addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".show_slide14_section3").addClass("hide");
        _html.find('.intro_parent1_slide11_1 > .introSubHeader_slide1114_rect').text('Identify cause and conduct after-action review');
        _html.find('.intro_parent1_slide11_2 > .introSubHeader_slide1114_rect').text('Identify gaps in procedures and policies');
        _html.find('.intro_parent1_slide11_3 > .introSubHeader_slide1114_rect').text('Review claims by United Nations');
    });

    return {

        getHTML:function(){
            return _html;
        },
        evnts:evnts

    }
}