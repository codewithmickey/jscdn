var an_overview_of_the_guidelines = function(dom,data){

    var evts= new Events();
    var an_overview_of_the_guidelines_flag_counter = 0;
    var AN_OVERVIEW_OF_THE_GUIDELINES_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find('.example-btn-blue').click(function(){
        if(!$(".example-btn-blue").hasClass("example_btn_blue_popup_click")){
            _html.find('.example-btn-blue').addClass('example_btn_blue_popup_click');
            an_overview_of_the_guidelines_flag_counter++;
        }
        dispatchAnOvervieOfTheGuidelines();
    });

    function dispatchAnOvervieOfTheGuidelines(){

        if(an_overview_of_the_guidelines_flag_counter == 1){
            AN_OVERVIEW_OF_THE_GUIDELINES_FLAG = true;
            evts.dispatchEvent("AN_OVERVIEW_OF_THE_GUIDELINES", AN_OVERVIEW_OF_THE_GUIDELINES_FLAG);
        }
    }

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.example-btn-blue').unbind('keypress').bind('keypress', function(e){


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