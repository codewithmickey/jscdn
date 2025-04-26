var scope_of_application = function(dom,data){

    var evts= new Events();
    var scope_of_application_audio_flag_counter=0;
    var SCOPE_OF_APPLICATION_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find(".introSubHeader_slide1114_plus").click(function () {
        if(!$(".intro_parent1_slide11_1").hasClass("scope_of_application_audio_flag")){
            _html.find('.intro_parent1_slide11_1').addClass('scope_of_application_audio_flag');
            scope_of_application_audio_flag_counter++;

        }
        _html.find(".show_slide12_section1").removeClass("hide");
        $('.show_slide12_section1').focus();
        _html.find(".introSubHeader_slide1114_plus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').addClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        dispatchScopeOfApplication();
    });

    _html.find(".introSubHeader_slide1114_minus").click(function () {
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".show_slide12_section1").addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
         _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
    });
    
    _html.find(".introSubHeader_slide1114_plus1").click(function () {
        if(!$(".intro_parent1_slide11_2").hasClass("scope_of_application_audio_flag")){
            _html.find('.intro_parent1_slide11_2').addClass('scope_of_application_audio_flag');
            scope_of_application_audio_flag_counter++;

        }
        _html.find(".show_slide13_section2").removeClass("hide");
        $('.show_slide13_section2').focus();
        _html.find(".introSubHeader_slide1114_plus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').addClass('intro_parent1_slide11_2_color');
        _html.find(".show_slide12_section1").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        dispatchScopeOfApplication();
    });

    _html.find(".introSubHeader_slide1114_minus1").click(function () {
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".show_slide12_section1").addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
    });

    $(".click_cursor_replay").click(function () {
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".show_slide12_section1").addClass("hide");

        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".show_slide13_section2").addClass("hide");
    });

    function dispatchScopeOfApplication(){

        if(scope_of_application_audio_flag_counter == 2){
            SCOPE_OF_APPLICATION_FLAG = true;
            evts.dispatchEvent("SCOPE_OF_APPLICATION", SCOPE_OF_APPLICATION_FLAG);
        }
    }

    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}