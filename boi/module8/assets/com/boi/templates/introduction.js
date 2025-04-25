var introduction = function(dom,data){

    var evnts= new Events();
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evnts.dispatchEvent("PageCreated123")

    }

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.Asset_58_candc').unbind('keypress').bind('keypress', function(e){


                if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

                return false;
                }
                if(e.keyCode !=9){

                $(e.target).trigger('click');
                }
            })
        });
    })

    construct()

    return {

        getHTML:function(){
            return _html;
        },
        evnts:evnts

    }
}