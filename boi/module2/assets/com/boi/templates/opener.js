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

    // $(document).ready(function(){
    //     $('.opener_candc_cam').unbind('keypress').bind('keypress', function(e){


    //         if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

    //             return false;
    //         } 
    //         if(e.keyCode !=9){

    //             $(e.target).trigger('click');
    //         }
    //     })
    // });

    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}