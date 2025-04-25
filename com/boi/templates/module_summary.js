var module_summary = function(dom,data){

    var evnts= new Events();
    //var _html = dom

    function construct(){
        _html = dom
        
        // load external dom
        
        _html.find('.description').html(data.content)
        evnts.dispatchEvent("PageCreated123")
        
    }
    construct()

    $('.nav-link.btn').removeClass('disabled'); 
    
    return {

        getHTML:function(){
            return _html;
        },
        evnts:evnts

    }
}