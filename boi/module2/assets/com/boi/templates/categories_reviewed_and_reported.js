var categories_reviewed_and_reported = function(dom,data){

    var evts= new Events();
    var categories_reviewed_and_reported_audio_flag_counter=1;
    var CATEGORIES_REVIEWED_AND_REPORTED_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()


    _html.find(".slide15_circles_1_mod2").click(function () {
        // if(!$(".slide15_circles_1_mod2").hasClass("categories_reviewed_and_reported_audio_flag")){
        //     _html.find('.slide15_circles_1_mod2').addClass('categories_reviewed_and_reported_audio_flag');
        //     categories_reviewed_and_reported_audio_flag_counter++;
        // }
        _html.find(".slide15_circles_1_mod2").css("background-color", "#2e88c7");
        _html.find(".slide15_first_mod2").css("color", "#ffffff");
        _html.find(".slide15_circles_2_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_second_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_3_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_third_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_4_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_fourth_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_5_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_fifth_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_6_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_sixth_mod2").css("color", "#1e4e79");
        _html.find(".show_section1_mod2").removeClass("hide");
        _html.find(".show_section2_mod2").addClass("hide");
        _html.find(".show_section3_mod2").addClass("hide");
        _html.find(".show_section4_mod2").addClass("hide");
        _html.find(".show_section5_mod2").addClass("hide");
        _html.find(".show_section6_mod2").addClass("hide");
        dispatchCategoriesReviewedAndReported();
    });
    
    _html.find(".slide15_circles_2_mod2").click(function () {
        if(!$(".slide15_circles_2_mod2").hasClass("categories_reviewed_and_reported_audio_flag")){
            _html.find('.slide15_circles_2_mod2').addClass('categories_reviewed_and_reported_audio_flag');
            categories_reviewed_and_reported_audio_flag_counter++;
        }
        _html.find(".slide15_circles_1_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_first_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_2_mod2").css("background-color", "#2e88c7");
        _html.find(".slide15_second_mod2").css("color", "#ffffff");
        _html.find(".slide15_circles_3_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_third_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_4_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_fourth_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_5_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_fifth_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_6_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_sixth_mod2").css("color", "#1e4e79");
        _html.find(".show_section1_mod2").addClass("hide");
        _html.find(".show_section2_mod2").removeClass("hide");
        _html.find(".show_section3_mod2").addClass("hide");
        _html.find(".show_section4_mod2").addClass("hide");
        _html.find(".show_section5_mod2").addClass("hide");
        _html.find(".show_section6_mod2").addClass("hide");
        dispatchCategoriesReviewedAndReported();
    });
    
    _html.find(".slide15_circles_3_mod2").click(function () {
        if(!$(".slide15_circles_3_mod2").hasClass("categories_reviewed_and_reported_audio_flag")){
            _html.find('.slide15_circles_3_mod2').addClass('categories_reviewed_and_reported_audio_flag');
            categories_reviewed_and_reported_audio_flag_counter++;
        }
        _html.find(".slide15_circles_1_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_first_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_2_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_second_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_3_mod2").css("background-color", "#2e88c7");
        _html.find(".slide15_third_mod2").css("color", "#ffffff");
        _html.find(".slide15_circles_4_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_fourth_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_5_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_fifth_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_6_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_sixth_mod2").css("color", "#1e4e79");
        _html.find(".show_section1_mod2").addClass("hide");
        _html.find(".show_section2_mod2").addClass("hide");
        _html.find(".show_section3_mod2").removeClass("hide");
        _html.find(".show_section4_mod2").addClass("hide");
        _html.find(".show_section5_mod2").addClass("hide");
        _html.find(".show_section6_mod2").addClass("hide");
        dispatchCategoriesReviewedAndReported();
    });
    
    _html.find(".slide15_circles_4_mod2").click(function () {
        if(!$(".slide15_circles_4_mod2").hasClass("categories_reviewed_and_reported_audio_flag")){
            _html.find('.slide15_circles_4_mod2').addClass('categories_reviewed_and_reported_audio_flag');
            categories_reviewed_and_reported_audio_flag_counter++;
        }
        _html.find(".slide15_circles_1_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_first_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_2_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_second_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_3_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_third_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_4_mod2").css("background-color", "#2e88c7");
        _html.find(".slide15_fourth_mod2").css("color", "#ffffff");
        _html.find(".slide15_circles_5_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_fifth_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_6_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_sixth_mod2").css("color", "#1e4e79");
        _html.find(".show_section1_mod2").addClass("hide");
        _html.find(".show_section2_mod2").addClass("hide");
        _html.find(".show_section3_mod2").addClass("hide");
        _html.find(".show_section4_mod2").removeClass("hide");
        _html.find(".show_section5_mod2").addClass("hide");
        _html.find(".show_section6_mod2").addClass("hide");
        dispatchCategoriesReviewedAndReported();
    });

    _html.find(".slide15_circles_5_mod2").click(function () {
        if(!$(".slide15_circles_5_mod2").hasClass("categories_reviewed_and_reported_audio_flag")){
            _html.find('.slide15_circles_5_mod2').addClass('categories_reviewed_and_reported_audio_flag');
            categories_reviewed_and_reported_audio_flag_counter++;
        }
        _html.find(".slide15_circles_1_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_first_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_2_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_second_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_3_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_third_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_4_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_fourth_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_5_mod2").css("background-color", "#2e88c7");
        _html.find(".slide15_fifth_mod2").css("color", "#ffffff");
        _html.find(".slide15_circles_6_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_sixth_mod2").css("color", "#1e4e79");
        _html.find(".show_section1_mod2").addClass("hide");
        _html.find(".show_section2_mod2").addClass("hide");
        _html.find(".show_section3_mod2").addClass("hide");
        _html.find(".show_section4_mod2").addClass("hide");
        _html.find(".show_section5_mod2").removeClass("hide");
        _html.find(".show_section6_mod2").addClass("hide");
        dispatchCategoriesReviewedAndReported();
    });

    _html.find(".slide15_circles_6_mod2").click(function () {
        if(!$(".slide15_circles_6_mod2").hasClass("categories_reviewed_and_reported_audio_flag")){
            _html.find('.slide15_circles_6_mod2').addClass('categories_reviewed_and_reported_audio_flag');
            categories_reviewed_and_reported_audio_flag_counter++;
        }
        _html.find(".slide15_circles_1_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_first_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_2_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_second_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_3_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_third_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_4_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_fourth_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_5_mod2").css("background-color", "#ffffff");
        _html.find(".slide15_fifth_mod2").css("color", "#1e4e79");
        _html.find(".slide15_circles_6_mod2").css("background-color", "#2e88c7");
        _html.find(".slide15_sixth_mod2").css("color", "#ffffff");
        _html.find(".show_section1_mod2").addClass("hide");
        _html.find(".show_section2_mod2").addClass("hide");
        _html.find(".show_section3_mod2").addClass("hide");
        _html.find(".show_section4_mod2").addClass("hide");
        _html.find(".show_section5_mod2").addClass("hide");
        _html.find(".show_section6_mod2").removeClass("hide");
        dispatchCategoriesReviewedAndReported();
    });

    function dispatchCategoriesReviewedAndReported(){

        if(categories_reviewed_and_reported_audio_flag_counter == 6){
            CATEGORIES_REVIEWED_AND_REPORTED_FLAG = true;
            evts.dispatchEvent("CATEGORIES_REVIEWED_AND_REPORTED", CATEGORIES_REVIEWED_AND_REPORTED_FLAG);
        }
    }

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.slide15_circles_1_mod2, .slide15_circles_2_mod2, .slide15_circles_3_mod2, .slide15_circles_4_mod2, .slide15_circles_5_mod2, .slide15_circles_6_mod2').unbind('keypress').bind('keypress', function(e){


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