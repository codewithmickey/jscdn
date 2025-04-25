var board_members = function(dom,data){

    var evts= new Events();
    var Board_Members_audio_flag_counter = 0;
    var BOARD_MEMBERS_FLAG = false
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }
    construct()

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('img.example-btn-blue, img.example-btn-gray, img.model-close-image').unbind('keypress').bind('keypress', function(e){


                if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

                return false;
                }
                if(e.keyCode !=9){

                $(e.target).trigger('click');
                }
            })
        });
    })

    _html.find(".example-btn-blue").click(function () {
        if(!$(".example-btn-blue").hasClass("Board_Members_audio_flag")){
            _html.find('.example-btn-blue').addClass('Board_Members_audio_flag');
            Board_Members_audio_flag_counter++;
        }
        _html.find(".mod5_board_members_rectangle3").css("display","block");
        // $(".mod5_board_members_font_style1").focus();
        dispatchBoardMembers();
    });

    function dispatchBoardMembers(){
        if(Board_Members_audio_flag_counter == 1){
            BOARD_MEMBERS_FLAG = true;
            evts.dispatchEvent("BOARD_MEMBERS", BOARD_MEMBERS_FLAG);
        }
    }

     _html.find("img.model-close-image").click(function () {
        _html.find(".mod5_board_members_rectangle3").css("display","none");
    });



    return {

        getHTML:function(){
            return _html;
        },
        evts:evts

    }
}