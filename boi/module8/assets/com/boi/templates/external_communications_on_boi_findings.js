var external_communications_on_boi_findings = function(dom,data){

    var evnts= new Events();
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evnts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find(".slide19_next").click(function () {
        _html.find(".slide19_prev").removeClass("hide");
        _html.find('.show_section1').addClass("hide");
        _html.find(".show_section2").removeClass("hide");
    });
    
    _html.find(".slide20_prev").click(function () {
        _html.find(".slide19_prev").addClass("hide");
        _html.find('.show_section2').addClass("hide");
        _html.find(".show_section1").removeClass("hide");
    });
    
    _html.find(".slide20_next").click(function () {
        _html.find(".slide21_next").addClass("hide");
        _html.find(".show_section2").addClass("hide");
        _html.find('.show_section3').removeClass("hide");
    });
    
    _html.find(".slide21_prev").click(function () {
        _html.find('.show_section3').addClass("hide");
        _html.find('.show_section2').removeClass("hide");
    });
    
    _html.find(".slide22_prev").click(function () {
        _html.find(".wrong_ans").addClass("hide");
        _html.find(".correct_ans").addClass("hide");
        _html.find(".answer_desc").addClass("hide");
        _html.find(".slide21_prev").removeClass("hide");
        // _html.find(".slide21_next").removeClass("hide");
        _html.find(".slide21_submit").removeClass("hide");
    });
    
    _html.find(".slide23_prev").click(function () {
        _html.find(".wrong_ans").addClass("hide");
        _html.find(".correct_ans").addClass("hide");
        _html.find(".answer_desc").addClass("hide");
        _html.find(".slide21_prev").removeClass("hide");
        // _html.find(".slide21_next").removeClass("hide");
        _html.find(".slide21_submit").removeClass("hide");
    });
    
    _html.find(".slide20a_prev").click(function () {
        _html.find(".slide19_prev").addClass("hide");
        _html.find('.show_section2').addClass("hide");
        _html.find(".show_section1").removeClass("hide");
    });
    
    _html.find(".slide20a_next").click(function () {
        _html.find(".slide21_next").addClass("hide");
        _html.find(".show_section2").addClass("hide");
        _html.find('.show_section3').removeClass("hide");
    });
    
    _html.find(document).ready(function(){
        // _html.find("input[type='button']").click(function(){
        _html.find(".slide21_submit").click(function(){
            var radioValue = _html.find("input[name='answer']:checked").val();
            if(radioValue == 'yes'){

                _html.find(".slide21_prev").addClass("hide");
                // _html.find(".slide21_next").addClass("hide");
                // _html.find(".slide21_submit").addClass("hide");
                _html.find(".wrong_ans").addClass("hide");
                _html.find(".correct_ans").removeClass("hide");
                _html.find(".answer_desc").removeClass("hide");
    
            }else if(radioValue == 'no'){

                _html.find(".slide21_prev").addClass("hide");
                // _html.find(".slide21_next").addClass("hide");
                // _html.find(".slide21_submit").addClass("hide");
                _html.find(".correct_ans").addClass("hide");
                _html.find(".wrong_ans").removeClass("hide");
                _html.find(".answer_desc").removeClass("hide");
            }
        });
    });
    
    return {

        getHTML:function(){
            return _html;
        },
        evnts:evnts

    }
}