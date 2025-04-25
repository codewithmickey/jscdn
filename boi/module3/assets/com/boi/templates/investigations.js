var investigations = function(dom,data){

    var evts= new Events();
    var investigations_flag_counter =0;
    var INVESTIGATIONS_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find(".introSubHeader_slide1114_plus").click(function () {
        if(!$(".intro_parent1_slide11_1").hasClass("investigations_audio_flag")){
            _html.find('.intro_parent1_slide11_1').addClass('investigations_audio_flag');
            investigations_flag_counter++;
        }
        _html.find(".img-fluid_investigation_mod3").addClass("hide");
        _html.find(".common_assets_investigation").addClass("hide");
        _html.find('.show_slide12_section1').removeClass("hide");
        _html.find(".show_slide12_section1").focus();
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".show_slide14_section3").addClass("hide");
        _html.find('.intro_parent1_slide11_1').addClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find(".introSubHeader_slide1114_plus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        dispatchInvestigations();
    });
    
    _html.find(".introSubHeader_slide1114_plus1").click(function () {
        if(!$(".intro_parent1_slide11_2").hasClass("investigations_audio_flag")){
            _html.find('.intro_parent1_slide11_2').addClass('investigations_audio_flag');
            investigations_flag_counter++;
        }
        _html.find(".img-fluid_investigation_mod3").addClass("hide");
        _html.find(".common_assets_investigation").addClass("hide");
        _html.find('.show_slide12_section1').addClass("hide");
        _html.find(".show_slide13_section2").removeClass("hide");
        _html.find(".show_slide13_section2").focus();
        _html.find(".show_slide14_section3").addClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').addClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find(".introSubHeader_slide1114_plus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        dispatchInvestigations();
    });
    
    _html.find(".introSubHeader_slide1114_plus2").click(function () {
        if(!$(".intro_parent1_slide11_3").hasClass("investigations_audio_flag")){
            _html.find('.intro_parent1_slide11_3').addClass('investigations_audio_flag');
            investigations_flag_counter++;
        }
        _html.find(".img-fluid_investigation_mod3").addClass("hide");
        _html.find(".common_assets_investigation").addClass("hide");
        _html.find('.show_slide12_section1').addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".show_slide14_section3").removeClass("hide");
        _html.find(".show_slide14_section3").focus();
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').addClass('intro_parent1_slide11_3_color');
        _html.find(".introSubHeader_slide1114_plus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        dispatchInvestigations();
    });

    _html.find(".introSubHeader_slide1114_minus").click(function () {
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.show_slide12_section1').addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".show_slide14_section3").addClass("hide");
        _html.find(".img-fluid_investigation_mod3").removeClass("hide");
        _html.find(".common_assets_investigation").removeClass("hide");
    });

    _html.find(".introSubHeader_slide1114_minus1").click(function () {
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.show_slide12_section1').addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".show_slide14_section3").addClass("hide");
        _html.find(".img-fluid_investigation_mod3").removeClass("hide");
        _html.find(".common_assets_investigation").removeClass("hide");
    });

    _html.find(".introSubHeader_slide1114_minus2").click(function () {
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.show_slide12_section1').addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".show_slide14_section3").addClass("hide");
        _html.find(".img-fluid_investigation_mod3").removeClass("hide");
        _html.find(".common_assets_investigation").removeClass("hide");
    });

    $(".click_cursor_replay").click(function () {
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find('.show_slide12_section1').addClass("hide");
        _html.find(".img-fluid_investigation_mod3").removeClass("hide");
        _html.find(".common_assets_investigation").removeClass("hide");

        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find('.show_slide13_section2').addClass("hide");

        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find('.show_slide14_section3').addClass("hide");
    });

    function dispatchInvestigations(){

        if(investigations_flag_counter == 3){
            INVESTIGATIONS_FLAG = true;
            evts.dispatchEvent("INVESTIGATIONS", INVESTIGATIONS_FLAG);
        }
    }

    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}