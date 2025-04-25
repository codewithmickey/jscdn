var BOI_Coordinator = function(dom,data){

    var evnts= new Events();
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evnts.dispatchEvent("PageCreated123")

    }
    construct()

    _html.find(".setting_green_BC").click(function(){
        _html.find(".setting_green_after_BC").removeClass("hide");
        _html.find(".search_orange_after_BC").addClass("hide");
        _html.find(".notes_blue_after_BC").addClass("hide");
        _html.find(".setting_green_rectangle_BC").removeClass("hide");
        _html.find(".search_orange_rectangle_BC").addClass("hide");
        _html.find(".notes_blue_rectangle_BC").addClass("hide");
        $('.setting_green_rectangle_BC').focus();
    })

    _html.find(".search_orange_BC").click(function(){
        _html.find(".search_orange_after_BC").removeClass("hide");
        _html.find(".notes_blue_after_BC").addClass("hide");
        _html.find(".setting_green_after_BC").addClass("hide");
        _html.find(".search_orange_rectangle_BC").removeClass("hide");
        _html.find(".setting_green_rectangle_BC").addClass("hide");
        _html.find(".notes_blue_rectangle_BC").addClass("hide");
        $('.search_orange_rectangle_BC').focus();
    })

    _html.find(".notes_blue_BC").click(function(){
        _html.find(".notes_blue_after_BC").removeClass("hide");
        _html.find(".search_orange_after_BC").addClass("hide");
        _html.find(".setting_green_after_BC").addClass("hide");
        _html.find(".notes_blue_rectangle_BC").removeClass("hide");
        _html.find(".search_orange_rectangle_BC").addClass("hide");
        _html.find(".setting_green_rectangle_BC").addClass("hide");
        $('.notes_blue_rectangle_BC').focus();
    })
    
    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.setting_green_BC, .search_orange_BC, .notes_blue_BC').unbind('keypress').bind('keypress', function(e){


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
        evnts:evnts

    }
}