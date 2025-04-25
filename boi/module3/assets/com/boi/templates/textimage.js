var textimage = function(dom,data){

    var evnts= new Events();
    //var _html = dom

    function construct(){
        _html = dom

        _html.find('.description').html(data.content)
        // _html.find('.card__image > img').attr("src",data.imagePath)
    }

    function loadTranscript(transcript){

    } 

    construct()
    return {

        getHTML:function(){
            return _html;
        },
        loadTranscript:loadTranscript,
        evnts:evnts

    }
}