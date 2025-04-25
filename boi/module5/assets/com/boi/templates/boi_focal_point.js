var boi_focal_point = function(dom,data){

    var evnts= new Events();
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evnts.dispatchEvent("PageCreated123")

    }
    construct()
    return {

        getHTML:function(){
            return _html;
        },
        evnts:evnts

    }
}