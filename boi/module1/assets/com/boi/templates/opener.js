var opener = function(dom,data){

    var evts= new Events();
    //var _html = dom

    function construct(){
        _html = dom
        
        // load external dom
        
        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")
        
        addButtonEvents();
    }
    
    construct()

    function addButtonEvents() {
        _html.find('.start_button').on("click", function(){
            
            evts.dispatchEvent("START_CLICKED")
        })
    }

    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}