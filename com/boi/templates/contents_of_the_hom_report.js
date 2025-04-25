var contents_of_the_hom_report = function(dom,data){

    var evnts= new Events();
    //var _html = dom

    function construct(){
        _html = dom
        
        // load external dom
        
        _html.find('.description').html(data.content)
        evnts.dispatchEvent("PageCreated123")
        
    }
    construct()

     _html.find(document).ready(function(){
        _html.find("button[type='button']").click(function(){
        var textBoxValue = _html.find("textarea[name='slide21_name']").val();
            if(textBoxValue != ''){
                _html.find(".Slide22_box_shadow").removeClass("hide");
                 _html.find('textarea').prop('readonly', true);
                  _html.find("#compareBtn").addClass("hide");
            }
         });
    });

    return {

        getHTML:function(){
            return _html;
        },
        evnts:evnts

    }
}