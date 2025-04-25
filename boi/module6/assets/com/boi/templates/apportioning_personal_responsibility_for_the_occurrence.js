var apportioning_personal_responsibility_for_the_occurrence = function(dom,data){

    var evts= new Events();
    var apportioning_personal_responsibility_for_the_occurrence_audio_flag_counter = 0;
    var APPORTIONING_PERSONAL_RESPONSIBILITY_FOR_THE_OCCURRENCE_AUDIO_FLAG = false;
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
            $('.introSubHeader_slide1114_plus, .introSubHeader_slide1114_plus1, .introSubHeader_slide1114_plus2, .introSubHeader_slide1114_minus2, .introSubHeader_slide1114_minus1, .introSubHeader_slide1114_minus').unbind('keypress').bind('keypress', function(e){


                if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

                return false;
                }
                if(e.keyCode !=9){

                $(e.target).trigger('click');
                }
            })
        });
    })

    _html.find(".introSubHeader_slide1114_plus").click(function () {
        if(!$(".intro_parent1_slide11_1").hasClass("apportioning_personal_responsibility_for_the_occurrence_audio_flag")){
            _html.find('.intro_parent1_slide11_1').addClass('apportioning_personal_responsibility_for_the_occurrence_audio_flag');
            apportioning_personal_responsibility_for_the_occurrence_audio_flag_counter++;
        }
        _html.find(".show_slide12_section1_the_boi").removeClass("hide");
        $(".show_slide12_section1_the_boi").focus();
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
        _html.find('.slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Ordinary Negligence');
        _html.find('.slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Gross Negligence');
        _html.find('.slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Gross Mismanagement');
        dispatchApportioningPersonalResponsibilityForTheOccurrence();
    });

    _html.find(".introSubHeader_slide1114_minus").click(function () {
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Ordinary Negligence');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Gross Negligence');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Gross Mismanagement');
    });
    
    _html.find(".introSubHeader_slide1114_plus1").click(function () {
        if(!$(".intro_parent1_slide11_2").hasClass("apportioning_personal_responsibility_for_the_occurrence_audio_flag")){
            _html.find('.intro_parent1_slide11_2').addClass('apportioning_personal_responsibility_for_the_occurrence_audio_flag');
            apportioning_personal_responsibility_for_the_occurrence_audio_flag_counter++;
        }
        _html.find(".show_slide13_section2_the_boi").removeClass("hide");
        $(".show_slide13_section2_the_boi").focus();
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
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Ordinary Negligence');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Gross Negligence');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Gross Mismanagement');
        dispatchApportioningPersonalResponsibilityForTheOccurrence();
    });

    _html.find(".introSubHeader_slide1114_minus1").click(function () {
        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Ordinary Negligence');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Gross Negligence');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Gross Mismanagement');
    });
    
    _html.find(".introSubHeader_slide1114_plus2").click(function () {
        if(!$(".intro_parent1_slide11_3").hasClass("apportioning_personal_responsibility_for_the_occurrence_audio_flag")){
            _html.find('.intro_parent1_slide11_3').addClass('apportioning_personal_responsibility_for_the_occurrence_audio_flag');
            apportioning_personal_responsibility_for_the_occurrence_audio_flag_counter++;
        }
        _html.find(".show_slide14_section3_the_boi").removeClass("hide");
        $(".show_slide14_section3_the_boi").focus();
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
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Ordinary Negligence');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Gross Negligence');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Gross Mismanagement');
        dispatchApportioningPersonalResponsibilityForTheOccurrence();
    });

    _html.find(".introSubHeader_slide1114_minus2").click(function () {
        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_1 > .slide11_rectangle_1_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Ordinary Negligence');
        _html.find('.intro_parent1_slide11_2 > .slide11_rectangle_2_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Gross Negligence');
        _html.find('.intro_parent1_slide11_3 > .slide11_rectangle_3_the_boi > .introSubHeader_slide1114_rect_the_boi').text('Gross Mismanagement');
    });

    $(".click_cursor_replay").click(function () {
        _html.find(".introSubHeader_slide1114_minus").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus").removeClass("hide");
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find(".show_slide12_section1_the_boi").addClass("hide");

        _html.find(".introSubHeader_slide1114_minus1").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus1").removeClass("hide");
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find(".show_slide13_section2_the_boi").addClass("hide");

        _html.find(".introSubHeader_slide1114_minus2").addClass("hide");
        _html.find(".introSubHeader_slide1114_plus2").removeClass("hide");
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
    });

    function dispatchApportioningPersonalResponsibilityForTheOccurrence(){

        if(apportioning_personal_responsibility_for_the_occurrence_audio_flag_counter == 3){
            APPORTIONING_PERSONAL_RESPONSIBILITY_FOR_THE_OCCURRENCE_AUDIO_FLAG = true;
            evts.dispatchEvent("APPORTIONING_PERSONAL_RESPONSIBILITY_FOR_THE_OCCURRENCE",APPORTIONING_PERSONAL_RESPONSIBILITY_FOR_THE_OCCURRENCE_AUDIO_FLAG);
        }
    }
    
    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}