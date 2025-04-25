var Senario_The_Collection_and_Evaluation_of_Evidence = function(dom,data){

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