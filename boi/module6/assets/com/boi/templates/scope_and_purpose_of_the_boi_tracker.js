var scope_and_purpose_of_the_boi_tracker = function(dom,data){

    var evts= new Events();
    var scope_and_purpose_of_the_boi_tracker_flag_counter = 0;
    var SCOPE_AND_PURPOSE_OF_THE_BOI_TRACKER_FLAG = false;
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

    _html.find('.example-btn-blue').click(function(){
        if(!$(".example-btn-blue").hasClass("example_btn_blue_popup_click")){
            _html.find('.example-btn-blue').addClass('example_btn_blue_popup_click');
            scope_and_purpose_of_the_boi_tracker_flag_counter++;
        }
        dispatchScopeAndPurposeOfTheBoiTracker();
    });

    function dispatchScopeAndPurposeOfTheBoiTracker(){

        if(scope_and_purpose_of_the_boi_tracker_flag_counter == 1){
            SCOPE_AND_PURPOSE_OF_THE_BOI_TRACKER_FLAG = true;
            evts.dispatchEvent("SCOPE_AND_PURPOSE_OF_THE_BOI_TRACKER", SCOPE_AND_PURPOSE_OF_THE_BOI_TRACKER_FLAG);
        }
    }

    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}