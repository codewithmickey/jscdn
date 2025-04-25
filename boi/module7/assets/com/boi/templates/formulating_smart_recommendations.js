var formulating_smart_recommendations = function(dom,data){

    var evts= new Events();
    var formulating_smart_recommendations_audio_flag_counter=0;
    var FORMULATING_SMART_RECOMMENDATIONS_FLAG = false;
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
            $('.intro_parent1_slide11_1, .intro_parent1_slide11_2, .intro_parent1_slide11_3, .intro_parent1_slide11_4, .intro_parent1_slide11_5, .intro_parent1_slide11_6, .intro_parent1_slide11_7').unbind('keypress').bind('keypress', function(e){


                if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

                return false;
                }
                if(e.keyCode !=9){

                $(e.target).trigger('click');
                }
            })
        });
    })

    _html.find(".intro_parent1_slide11_1").click(function () {
        if(!$(".intro_parent1_slide11_1").hasClass("formulating_smart_recommendations_audio_flag")){
            _html.find('.intro_parent1_slide11_1').addClass('formulating_smart_recommendations_audio_flag');
            formulating_smart_recommendations_audio_flag_counter++;
        }
        _html.find(".show_slide12_section1_the_boi").removeClass("hide");
        // $('.show_slide12_section1_the_boi').focus();
        _html.find('.intro_parent1_slide11_1').addClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_4').removeClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_5').removeClass('intro_parent1_slide11_5_color');
        _html.find('.intro_parent1_slide11_6').removeClass('intro_parent1_slide11_6_color');
        _html.find('.intro_parent1_slide11_7').removeClass('intro_parent1_slide11_7_color');
        _html.find(".main_img_slide14_mod2").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find(".show_slide14_section6_the_boi").addClass("hide");
        _html.find(".show_slide14_section7_the_boi").addClass("hide");
        dispatchFormulatingSmartRecommendations();
    });
    
    _html.find(".intro_parent1_slide11_2").click(function () {
        if(!$(".intro_parent1_slide11_2").hasClass("formulating_smart_recommendations_audio_flag")){
            _html.find('.intro_parent1_slide11_2').addClass('formulating_smart_recommendations_audio_flag');
            formulating_smart_recommendations_audio_flag_counter++;
        }
        _html.find(".show_slide13_section2_the_boi").removeClass("hide");
        // $('.show_slide13_section2_the_boi').focus();
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').addClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_4').removeClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_5').removeClass('intro_parent1_slide11_5_color');
        _html.find('.intro_parent1_slide11_6').removeClass('intro_parent1_slide11_6_color');
        _html.find('.intro_parent1_slide11_7').removeClass('intro_parent1_slide11_7_color');
        _html.find(".main_img_slide14_mod2").addClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find(".show_slide14_section6_the_boi").addClass("hide");
        _html.find(".show_slide14_section7_the_boi").addClass("hide");
        dispatchFormulatingSmartRecommendations();
    });
    
    _html.find(".intro_parent1_slide11_3").click(function () {
        if(!$(".intro_parent1_slide11_3").hasClass("formulating_smart_recommendations_audio_flag")){
            _html.find('.intro_parent1_slide11_3').addClass('formulating_smart_recommendations_audio_flag');
            formulating_smart_recommendations_audio_flag_counter++;
        }
        _html.find(".show_slide14_section3_the_boi").removeClass("hide");
        // $('.show_slide14_section3_the_boi').focus();
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').addClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_4').removeClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_5').removeClass('intro_parent1_slide11_5_color');
        _html.find('.intro_parent1_slide11_6').removeClass('intro_parent1_slide11_6_color');
        _html.find('.intro_parent1_slide11_7').removeClass('intro_parent1_slide11_7_color');
        _html.find(".main_img_slide14_mod2").addClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find(".show_slide14_section6_the_boi").addClass("hide");
        _html.find(".show_slide14_section7_the_boi").addClass("hide");
        dispatchFormulatingSmartRecommendations();
    });

    _html.find(".intro_parent1_slide11_4").click(function () {
        if(!$(".intro_parent1_slide11_4").hasClass("formulating_smart_recommendations_audio_flag")){
            _html.find('.intro_parent1_slide11_4').addClass('formulating_smart_recommendations_audio_flag');
            formulating_smart_recommendations_audio_flag_counter++;
        }
        _html.find(".show_slide14_section4_the_boi").removeClass("hide");
        // $('.show_slide14_section4_the_boi').focus();
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_4').addClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_5').removeClass('intro_parent1_slide11_5_color');
        _html.find('.intro_parent1_slide11_6').removeClass('intro_parent1_slide11_6_color');
        _html.find('.intro_parent1_slide11_7').removeClass('intro_parent1_slide11_7_color');
        _html.find(".main_img_slide14_mod2").addClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find(".show_slide14_section6_the_boi").addClass("hide");
        _html.find(".show_slide14_section7_the_boi").addClass("hide");
        dispatchFormulatingSmartRecommendations();
    });

    _html.find(".intro_parent1_slide11_5").click(function () {
        if(!$(".intro_parent1_slide11_5").hasClass("formulating_smart_recommendations_audio_flag")){
            _html.find('.intro_parent1_slide11_5').addClass('formulating_smart_recommendations_audio_flag');
            formulating_smart_recommendations_audio_flag_counter++;
        }
        _html.find(".show_slide14_section5_the_boi").removeClass("hide");
        // $('.show_slide14_section5_the_boi').focus();
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_4').removeClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_5').addClass('intro_parent1_slide11_5_color');
        _html.find('.intro_parent1_slide11_6').removeClass('intro_parent1_slide11_6_color');
        _html.find('.intro_parent1_slide11_7').removeClass('intro_parent1_slide11_7_color');
        _html.find(".main_img_slide14_mod2").addClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section6_the_boi").addClass("hide");
        _html.find(".show_slide14_section7_the_boi").addClass("hide");
        dispatchFormulatingSmartRecommendations();
    });

    _html.find(".intro_parent1_slide11_6").click(function () {
        if(!$(".intro_parent1_slide11_6").hasClass("formulating_smart_recommendations_audio_flag")){
            _html.find('.intro_parent1_slide11_6').addClass('formulating_smart_recommendations_audio_flag');
            formulating_smart_recommendations_audio_flag_counter++;
        }
        _html.find(".show_slide14_section6_the_boi").removeClass("hide");
        // $('.show_slide14_section6_the_boi').focus();
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_4').removeClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_5').removeClass('intro_parent1_slide11_5_color');
        _html.find('.intro_parent1_slide11_6').addClass('intro_parent1_slide11_6_color');
        _html.find('.intro_parent1_slide11_7').removeClass('intro_parent1_slide11_7_color');
        _html.find(".main_img_slide14_mod2").addClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find(".show_slide14_section7_the_boi").addClass("hide");
        dispatchFormulatingSmartRecommendations();
    });

    _html.find(".intro_parent1_slide11_7").click(function () {
        _html.find(".show_slide14_section7_the_boi").removeClass("hide");
        // $('.show_slide14_section7_the_boi').focus();
        _html.find('.intro_parent1_slide11_1').removeClass('intro_parent1_slide11_1_color');
        _html.find('.intro_parent1_slide11_2').removeClass('intro_parent1_slide11_2_color');
        _html.find('.intro_parent1_slide11_3').removeClass('intro_parent1_slide11_3_color');
        _html.find('.intro_parent1_slide11_4').removeClass('intro_parent1_slide11_4_color');
        _html.find('.intro_parent1_slide11_5').removeClass('intro_parent1_slide11_5_color');
        _html.find('.intro_parent1_slide11_6').removeClass('intro_parent1_slide11_6_color');
        _html.find('.intro_parent1_slide11_7').addClass('intro_parent1_slide11_7_color');
        _html.find(".main_img_slide14_mod2").addClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find(".show_slide14_section6_the_boi").addClass("hide");
    });

    $(".click_cursor_replay").click(function () {

        _html.find(".main_img_slide14_mod2").removeClass("hide");
        _html.find(".show_slide12_section1_the_boi").addClass("hide");
        _html.find(".show_slide13_section2_the_boi").addClass("hide");
        _html.find(".show_slide14_section3_the_boi").addClass("hide");
        _html.find(".show_slide14_section4_the_boi").addClass("hide");
        _html.find(".show_slide14_section5_the_boi").addClass("hide");
        _html.find(".show_slide14_section6_the_boi").addClass("hide");
        _html.find(".show_slide14_section7_the_boi").addClass("hide");
        _html.find(".intro_parent1_slide11_1").removeClass("intro_parent1_slide11_1_color");
        _html.find(".intro_parent1_slide11_2").removeClass("intro_parent1_slide11_2_color");
        _html.find(".intro_parent1_slide11_3").removeClass("intro_parent1_slide11_3_color");
        _html.find(".intro_parent1_slide11_4").removeClass("intro_parent1_slide11_4_color");
        _html.find(".intro_parent1_slide11_5").removeClass("intro_parent1_slide11_5_color");
        _html.find(".intro_parent1_slide11_6").removeClass("intro_parent1_slide11_6_color");
    });

    function dispatchFormulatingSmartRecommendations(){
        if(formulating_smart_recommendations_audio_flag_counter == 6){
            FORMULATING_SMART_RECOMMENDATIONS_FLAG = true;
            evts.dispatchEvent("FORMULATING_SMART_RECOMMENDATIONS", FORMULATING_SMART_RECOMMENDATIONS_FLAG);
        }
    }

    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}