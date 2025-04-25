var Case_of_a_Vehicle_Ambush_Meet_the_Team = function(dom,data){

    var evnts= new Events();
    //var _html = dom

    function construct(){
        _html = dom


        _html.find('.description').html(data.content)
        evnts.dispatchEvent("PageCreated123")

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