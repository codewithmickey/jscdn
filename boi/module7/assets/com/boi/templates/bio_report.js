var bio_report = function(dom,data){

    var evts= new Events();
    var bio_report_flag_counter = 0;
    var BOI_REPORT_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom

        // load external dom

        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }


    construct()

    _html.find(".bio-report-slider ul li").click(function () {
        $(this).addClass('custum-show-button-cls');
        if(!$(this).hasClass("bio_report_audio_flag")){
            $(this).addClass('bio_report_audio_flag');
            bio_report_flag_counter++;
        }
        _html.find('li').each(function() {
            var numItems = $('.custum-show-button-cls').length;
            if(numItems == '10') {
                $('img.read-more-img-blue').removeClass('hide');
            }
        });
        dispatchBoiReport();
    });

    _html.find(".accordion.accordian-section .card").click(function () {
        $(this).addClass('custum-show-button-cls');

        if(!$(this).hasClass("bio_report_audio_flag")){
            $(this).addClass('bio_report_audio_flag');
            bio_report_flag_counter++;
        }

        _html.find('.card').each(function() {
            var numItems = $('.custum-show-button-cls').length;
            if(numItems == '10') {
                $('img.read-more-img-blue').removeClass('hide');
            }
        });
        dispatchBoiReport();
    });

    _html.find('.read_more_img_blue__BOI_report_mod7').click(function(){

        if(!$(".read_more_img_blue__BOI_report_mod7").hasClass("bio_report_audio_flag")){
            _html.find('.read_more_img_blue__BOI_report_mod7').addClass('bio_report_audio_flag');
            bio_report_flag_counter++;
        }
        dispatchBoiReport();
    });

    _html.find('.read_more_img_blue__BOI_report1_mod7').click(function(){
        if(!$(".read_more_img_blue__BOI_report1_mod7").hasClass("bio_report_audio_flag")){
            _html.find('.read_more_img_blue__BOI_report1_mod7').addClass('bio_report_audio_flag');
            bio_report_flag_counter++;
        }
        dispatchBoiReport();
    });

    $(".click_cursor_replay").click(function () {
        _html.find('.light-orange').removeClass('active');
        _html.find('.dark-orange').removeClass('active');
        _html.find('.pink').removeClass('active');
        _html.find('.purpal').removeClass('active');
        _html.find('.navy-blue').removeClass('active');
        _html.find('.blue').removeClass('active');
        _html.find('.sky-blue').removeClass('active');
        _html.find('.olieve-green').removeClass('active');
        _html.find('.green').removeClass('active');
        _html.find('.dark-green').removeClass('active');
    });

    function dispatchBoiReport(){

        if(bio_report_flag_counter == 12){
            BOI_REPORT_FLAG = true;
            evts.dispatchEvent("BOI_REPORT", BOI_REPORT_FLAG);
        }
    }

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.light-orange, .dark-orange, .pink, .purpal, .navy-blue, .blue, .sky-blue, .olieve-green, .green, .dark-green').unbind('keypress').bind('keypress', function(e){


                if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

                return false;
                }
                if(e.keyCode !=9){

                $(e.target).trigger('click');
                }
            })
        });
    })

    return {
        getHTML:function(){
            return _html;
        },
        evts:evts
    }
}