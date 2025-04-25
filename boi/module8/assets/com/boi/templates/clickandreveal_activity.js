var clickandreveal_activity = function(dom,data){

    var evnts= new Events();
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evnts.dispatchEvent("PageCreated123")

    }
    construct()


    _html.find(".slide15_circles_1").click(function () {
        _html.find(".slide15_circles_1").css("background-color", "#2e88c7");
        _html.find(".slide15_first").css("color", "#ffffff");
        _html.find(".slide15_circles_2").css("background-color", "#ffffff");
        _html.find(".slide15_second").css("color", "#1e4e79");
        _html.find(".slide15_circles_3").css("background-color", "#ffffff");
        _html.find(".slide15_third").css("color", "#1e4e79");
        _html.find(".slide15_circles_4").css("background-color", "#ffffff");
        _html.find(".slide15_fourth").css("color", "#1e4e79");
        _html.find(".show_section1").removeClass("hide");
        _html.find('.show_section2').addClass("hide");
        _html.find(".show_section3").addClass("hide");
        _html.find(".show_section4").addClass("hide");
    });
    
    _html.find(".slide15_circles_2").click(function () {
        _html.find(".slide15_circles_1").css("background-color", "#ffffff");
        _html.find(".slide15_first").css("color", "#1e4e79");
        _html.find(".slide15_circles_2").css("background-color", "#2e88c7");
        _html.find(".slide15_second").css("color", "#ffffff");
        _html.find(".slide15_circles_3").css("background-color", "#ffffff");
        _html.find(".slide15_third").css("color", "#1e4e79");
        _html.find(".slide15_circles_4").css("background-color", "#ffffff");
        _html.find(".slide15_fourth").css("color", "#1e4e79");
        _html.find(".show_section1").addClass("hide");
        _html.find('.show_section2').removeClass("hide");
        _html.find(".show_section3").addClass("hide");
        _html.find(".show_section4").addClass("hide");
    });
    
    _html.find(".slide15_circles_3").click(function () {
        _html.find(".slide15_circles_1").css("background-color", "#ffffff");
        _html.find(".slide15_first").css("color", "#1e4e79");
        _html.find(".slide15_circles_2").css("background-color", "#ffffff");
        _html.find(".slide15_second").css("color", "#1e4e79");
        _html.find(".slide15_circles_3").css("background-color", "#2e88c7");
        _html.find(".slide15_third").css("color", "#ffffff");
        _html.find(".slide15_circles_4").css("background-color", "#ffffff");
        _html.find(".slide15_fourth").css("color", "#1e4e79");
        _html.find(".show_section1").addClass("hide");
        _html.find('.show_section2').addClass("hide");
        _html.find(".show_section3").removeClass("hide");
        _html.find(".show_section4").addClass("hide");
    });
    
    _html.find(".slide15_circles_4").click(function () {
        _html.find(".slide15_circles_1").css("background-color", "#ffffff");
        _html.find(".slide15_first").css("color", "#1e4e79");
        _html.find(".slide15_circles_2").css("background-color", "#ffffff");
        _html.find(".slide15_second").css("color", "#1e4e79");
        _html.find(".slide15_circles_3").css("background-color", "#ffffff");
        _html.find(".slide15_third").css("color", "#1e4e79");
        _html.find(".slide15_circles_4").css("background-color", "#2e88c7");
        _html.find(".slide15_fourth").css("color", "#ffffff");
        _html.find(".show_section1").addClass("hide");
        _html.find('.show_section2').addClass("hide");
        _html.find(".show_section3").addClass("hide");
        _html.find(".show_section4").removeClass("hide");
    });

    return {

        getHTML:function(){
            return _html;
        },
        evnts:evnts

    }
}