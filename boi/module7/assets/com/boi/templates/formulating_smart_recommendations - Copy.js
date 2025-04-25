var formulating_smart_recommendations = function(dom,data){

    var evnts= new Events();
    //var _html = dom

    function construct(){
        _html = dom

        
        _html.find('.description').html(data.content)
        evnts.dispatchEvent("PageCreated123")

    }
    construct()

    // _html.find("#tab-A").click(function () {
    //     $('#pane-A').focus();
    //     if(e.keyCode ==9 && e.type === 'keypress'){
    //         $('#tab-B').focus();
    //     }
    // });

    // _html.find("#tab-B").click(function () {
    //     $('#pane-B').focus();
    //     if(e.keyCode ==9){
    //         $('#tab-C').focus();
    //     }
    // });

    // $(document).ready(function() {
    //     $.getJSON( "assets/json/config.json", function( data ) {
    //         $('#tab-A, .tab-A, .investigation_puzzle3_mod3, .investigation_puzzle4_mod3').unbind('keypress').bind('keypress', function(e){
    
    
    //             if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){
    //                 $('#pane-A').focus();
    
    //             return false;
    //             }
    //             if(e.keyCode !=9){
    
    //             $(e.target).trigger('click');
    //             }
    //         })
    //     });
    // })

    return {

        getHTML:function(){
            return _html;
        },
        evnts:evnts

    }
}