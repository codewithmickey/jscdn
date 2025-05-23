(function(app) {

    // load JSON files
    var scorm;
    var lmsConnect;
    var oNavigation;
    var oContentLoader = null;
    var nCurrentPage = 0;
    var jsonData;
    var nTotalPages;
    var oAudioPlayer;
    var _html = null;
    var transcriptOn = false;
    var flag = false;
    var audio_flag = false;
    var audio_end_flag_counter = 1;
    var screen1_flag = false;
    var screen2_flag = false;
    var screen3_flag = false;
    var screen4_flag = false;
    var screen5_flag = false;
    var suspend_data;
    // var counter = 0;
    function startApplication(){
        // init all components
        oContentLoader = new Contentloader();
        scorm = window.pipwerks.SCORM;
        lmsConnect = scorm.init();
        var suspendData = scorm.get("cmi.suspend_data");
        if(lmsConnect)
        {
            if(suspendData != "" && suspendData != "0" )
                {
                    suspend_data = suspendData.split("<||>");
                    nCurrentPage = Number(suspend_data[0]);
                    screen1_flag = JSON.parse(suspend_data[1]);
                    screen2_flag = JSON.parse(suspend_data[2]);
                    screen3_flag = JSON.parse(suspend_data[3]);
                    screen4_flag = JSON.parse(suspend_data[4]);
                    screen5_flag = JSON.parse(suspend_data[5]);
                    createAudioPlayer();
                    createNavigation();
                    setPageNumber();
                    setTimeout( function(){
                        setNextEnable();
                    },1000);
                }
                else
                {
                    scorm.set("cmi.core.lesson_status", 'incomplete');
                    loadPage();
                }
        }
        else
        {
            loadPage();
        }
        
        // nCurrentPage = 3;
        
        oContentLoader.evts.addEventListener("SPALSH_START_CLICKED",function(a,b,c){
           // evts.dispatchEvent("SPALSH_START_CLICKED")
           nCurrentPage++;
           createAudioPlayer();
           createNavigation();
            // loadPage();
        });

        oContentLoader.evts.addEventListener("REVIEW_MODEL_START_CLICKED",function(a,b,c){
            nCurrentPage = 1;
            oNavigation.removeElement();
            oAudioPlayer.removeElement();
            oContentLoader.removeElement();
           createAudioPlayer();
           createNavigation();
            // loadPage();
            flag =false;
        });

        oContentLoader.evts.addEventListener("QUIZ_START_FIRST_TIME",function(a,b,c){
            flag=true;
        });

        oContentLoader.evts.addEventListener("RETAKE__QUIZ_FIRST_TIME",function(a,b,c){

            flag=false;
        });

        oContentLoader.evts.addEventListener("QUIZ_REVIEW_FIRST_TIME",function(a,b,c){

        });

        oContentLoader.evts.addEventListener("THE_BOI_FUNCTION_CLICKED", function(a,b,c){
            if(c==true){
                screen4_flag = true;
            }
            setEnableMenu();
            $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
            if(lmsConnect)
            {
                setSuspendedData();
            }
        });

        document.addEventListener('swiped-left', function(e) {
            if(nCurrentPage <  nTotalPages-1){
                if(screen1_flag == true && nCurrentPage==1){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen2_flag == true && nCurrentPage==2){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen3_flag == true && nCurrentPage==3){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen4_flag == true && nCurrentPage==4){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen5_flag == true && nCurrentPage==5){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }
                if(nCurrentPage == nTotalPages-1 && retake_quiz_start_quiz_flag == true){
                    setTimeout(function() {
                        $('.start__quiz__submit__btn').removeClass("disabled");
                    }, 500);   
                }
                $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
                // counter++;
                setPageNumber();
                _html.find('.transcript_data_mod1').addClass("hide");
                transcriptOn = false;
                // loadPage();
            }
        });

        document.addEventListener('swiped-right', function(e) {
            if(nCurrentPage > 1 && flag==false){
                if(screen1_flag == true && nCurrentPage==1){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen2_flag == true || screen2_flag == false && nCurrentPage==2){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen3_flag == true || screen3_flag == false && nCurrentPage==3){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen4_flag == true || screen4_flag == false && nCurrentPage==4){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen5_flag == true || screen5_flag == false && nCurrentPage==5){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }
                $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
                // counter--;
                setPageNumber();
                _html.find('.transcript_data_mod1').addClass("hide");
                transcriptOn = false;
                // loadPage();
            }
        });
        document.addEventListener('touchstart', handleTouchStartShow, false);
        document.addEventListener('touchend', handleTouchEndHide, false);
    }

    function handleTouchStartShow(){
        setTimeout(function(){
        oAudioPlayer.showAudioPanel()
    }, 2500);

    }

    function handleTouchEndHide(){ 
        setTimeout(function(){
        oAudioPlayer.hideAudioPanel()
        }, 5000);
    }

    function render(inDiv,component) {
        $(inDiv).append(component)
    }

    function createNavigation(){
        oNavigation = new Navigation();
        oNavigation.evts.addEventListener("DOMCREATED",function(a,b,c){
            oNavigation.setCourseName(jsonData.courseTitle)
            render('header',oNavigation.getHTML())
            loadPage();
        })

        oNavigation.evts.addEventListener("NAV_CLICKED",function(a,b,c){
            $(".nav-link").find(".active").removeClass("active");
            if(!$('a[menu-data = '+c+']').hasClass("disabled")){
                $('a[menu-data = '+c+']').addClass('active');
                var data = Number(c)
                if(data < 10){
                    flag=false;   
                    $('footer').show();
                    _html.find('.pagination > .currentPageNumber').text("0"+data);
                    audio_end_flag_counter = data;
                }else if(data > 9){
                    flag=false;   
                    $('footer').show();
                    _html.find('.pagination > .currentPageNumber').text(data);
                    audio_end_flag_counter = data;
                }
            }
            if(!isNaN(c) && !$('a[menu-data = '+c+']').hasClass("disabled"))
            {
                $('a[menu-data = '+'Back'+']').removeClass('hide');
                $('a[menu-data = '+'Next'+']').removeClass('hide');
                $('.transcript_data_mod1').addClass("hide");
                $('.close_text_area_mod1').addClass("hide");
                $('.audio__control').removeClass("hide");
                transcriptOn = false;
                var data1 = Number(c)
                nCurrentPage = data1;
                if(nCurrentPage > 1 && nCurrentPage < nTotalPages-1){
                    $('a[menu-data = '+'Back'+']').attr("tabindex","0");
                    $('a[menu-data = '+'Next'+']').attr("tabindex","0");
                }else if(nCurrentPage == 1){
                    $('a[menu-data = '+'Back'+']').attr("tabindex","-1");
                    $('a[menu-data = '+'Next'+']').attr("tabindex","0");
                }else if(nCurrentPage == nTotalPages-1){
                    $('a[menu-data = '+'Next'+']').attr("tabindex","-1");
                    $('a[menu-data = '+'Back'+']').attr("tabindex","0");
                }
                loadPage()
                if(screen1_flag == true && nCurrentPage==1){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled');
                }else if(screen2_flag == true && nCurrentPage==2){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen3_flag == true && nCurrentPage==3){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen4_flag == true && nCurrentPage==4){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else{
                    setTimeout(function(){
                        $('a[menu-data = '+'Next'+']').addClass('disabled');  
                    },40);
                }
            }else if(c == "Next")
            {
                if(!$(".access_anchor_next").hasClass("disabled")){
                    $('.access_anchor_next').on('keypress', function(e){
                        if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

                            return false;
                        } 
                        if(e.keyCode !=9){

                            $(e.target).trigger('click');
                        }
                    })
                    nCurrentPage++;
                    if(nCurrentPage > 1 && nCurrentPage < nTotalPages-1){
                        $('a[menu-data = '+'Back'+']').attr("tabindex","0");
                        $('a[menu-data = '+'Next'+']').attr("tabindex","0");
                    }else if(nCurrentPage == 1){
                        $('a[menu-data = '+'Back'+']').attr("tabindex","-1");
                        $('a[menu-data = '+'Next'+']').attr("tabindex","0");
                    }else if(nCurrentPage == nTotalPages-1){
                        $('a[menu-data = '+'Next'+']').attr("tabindex","-1");
                        $('a[menu-data = '+'Back'+']').attr("tabindex","0");
                    }
                    $('a[menu-data = '+nCurrentPage+']').addClass('active');
                    // counter++;
                    setPageNumber();
                    $('.transcript_data_mod1').addClass("hide");
                    transcriptOn = false;
                    loadPage()
                    audio_end_flag_counter = nCurrentPage;
                }
                if(screen1_flag == true && nCurrentPage==1){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled');
                }else if(screen2_flag == true && nCurrentPage==2){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen3_flag == true && nCurrentPage==3){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen4_flag == true && nCurrentPage==4){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else{

                    setTimeout(function(){
                        $('a[menu-data = '+'Next'+']').addClass('disabled');  
                    },500);
                }
            }else if(c == "Back")
            {
                if(!$(".access_anchor_back").hasClass("disabled")){
                    $('.access_anchor_back').on('keypress', function(e){
                        if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

                            return false;
                        } 
                        if(e.keyCode !=9){

                            $(e.target).trigger('click');
                        }
                    })
                    nCurrentPage--;
                    if(nCurrentPage > 1 && nCurrentPage < nTotalPages-1){
                        $('a[menu-data = '+'Back'+']').attr("tabindex","0");
                        $('a[menu-data = '+'Next'+']').attr("tabindex","0");
                    }else if(nCurrentPage == 1){
                        $('a[menu-data = '+'Back'+']').attr("tabindex","-1");
                        $('a[menu-data = '+'Next'+']').attr("tabindex","0");
                    }else if(nCurrentPage == nTotalPages-1){
                        $('a[menu-data = '+'Next'+']').attr("tabindex","-1");
                        $('a[menu-data = '+'Back'+']').attr("tabindex","0");
                    }
                    $('a[menu-data = '+nCurrentPage+']').addClass('active');
                    // counter--;
                    setPageNumber();
                    $('.transcript_data_mod1').addClass("hide");
                    transcriptOn = false;
                    loadPage()
                    audio_end_flag_counter = nCurrentPage;
                }
                if(screen1_flag == true && nCurrentPage==1){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled');
                }else if(screen2_flag == true && nCurrentPage==2){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen3_flag == true && nCurrentPage==3){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen4_flag == true && nCurrentPage==4){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else{
                    $('a[menu-data = '+'Next'+']').addClass('disabled');
                }
                if(nCurrentPage == nTotalPages-1){
                    setTimeout(function(){
                        $('a[menu-data = '+'Next'+']').addClass('disabled');  
                    },40);
                }
            }else if(c == "Glossary")
            {
                oNavigation.openGlossary();
                // $('.glossary_tabs_ul li:first').addClass('current_glossary_key');
                $('ul.glossary_tabs_ul li').each(function(i) {
                    if ( i === 7 ) {
                       $(this).addClass('current_glossary_key');
                    }
                });
                $('.nextback').addClass("hide");
                $("#exampleModal").on("hidden.bs.modal", function () {
                    $('.nextback').removeClass("hide");
                    $('.current_glossary_key').removeClass("current_glossary_key");
                });
                setPageNumber();
            }else if(c == 'Help'){
                $('.nextback').addClass("hide");
                $("#helpImageScreen").click("hidden.bs.modal", function () {
                    $('.nextback').removeClass("hide");
                });
                setPageNumber();
            }else if(c == 'menu'){
                setPageNumber();
                $(document).ready(function() {
                    $.getJSON( "assets/json/config.json", function( data ) {
                        $('.menuitem_1, .menuitem_2, .menuitem_3, .menuitem_4, .menuitem_5, .menuitem_6, .menuitem_7, .menuitem_8').unbind('keypress').bind('keypress', function(e){ 
                            if(!$(this).hasClass("disabled")){
                                if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){
                                return false;
                                }
                                if(e.keyCode !=9){
                                $(e.target).trigger('click');
                                }
                            }
                        })
                    });
                })
            }else if(c == 'Resources'){
                setPageNumber();
            }else if(c == 'Exit'){
                window.top.close();
                // setPageNumber();
            }
        })

        oNavigation.evts.addEventListener("GLOSSARY_KEY",function(a,b,c){
            nCurrentKey = c;
            // $('.active__glossary').removeClass('active__glossary');
            // $(this).parent('li').addClass('active__glossary');
            oNavigation.generateList(nCurrentKey);
        })

        oNavigation.evts.addEventListener("GLOSSARY_DESC",function(a,b,c){
            oNavigation.getDesc(c);
        })

        oAudioPlayer.evts.addEventListener("AUDIO_END_FLAG", function(a, b, c){
            // audio_end_flag_counter++;
            $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
            if(c== true && nCurrentPage==1){
                screen1_flag = true;
            }else if(c== true && nCurrentPage==2){
                screen2_flag = true;
            }else if(c== true && nCurrentPage==3){
                screen3_flag = true;
            }else if(c== true && nCurrentPage==5){
                $('a[menu-data = '+'Next'+']').addClass('disabled');
                scorm.set("cmi.core.lesson_status", 'completed');
            }
            if(audio_end_flag_counter <= nCurrentPage && audio_end_flag_counter!=nTotalPages-1){
                $('a[menu-data = '+'Next'+']').removeClass('disabled');
            }else{
                $('a[menu-data = '+'Next'+']').addClass('disabled');
            }
            setEnableMenu();
            if(lmsConnect)
            {
                setSuspendedData();
            }
        })
    }

    function setEnableMenu(){
        if(screen1_flag == true && nCurrentPage ==1){
            $('.coursemenuitem.menuitem_2').removeClass('disabled');
        }else if(screen2_flag == true && nCurrentPage ==2){
            $('.coursemenuitem.menuitem_3').removeClass('disabled');
        }else if(screen3_flag == true && nCurrentPage ==3){
            $('.coursemenuitem.menuitem_4').removeClass('disabled');
        }else if(screen4_flag == true && nCurrentPage ==4){
            $('.coursemenuitem.menuitem_5').removeClass('disabled');
        }
    }

    function setSuspendedData(){
        suspendData = nCurrentPage+"<||>"+screen1_flag+"<||>"+screen2_flag+"<||>"+screen3_flag+"<||>"+screen4_flag+"<||>"+screen5_flag;
        scorm.set("cmi.suspend_data",suspendData);
        var API = scorm.API.getHandle();
        API.LMSCommit("")
    }

    function setNextEnable(){
        if(screen1_flag == true && nCurrentPage==1){
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
        }else if(screen2_flag == true && nCurrentPage==2){
            $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
        }else if(screen3_flag == true && nCurrentPage==3){
            $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
        }else if(screen4_flag == true && nCurrentPage==4){
            $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
        }else if(screen5_flag == true && nCurrentPage==5){
            $('a[menu-data = '+'Next'+']').addClass('disabled');
        }else if(screen5_flag == false && nCurrentPage==5){
            $('a[menu-data = '+'Next'+']').addClass('disabled');
        }else{
            setTimeout(function(){
                $('a[menu-data = '+'Next'+']').addClass('disabled');  
            },500);
        }

        if(screen1_flag == true){
            $('.coursemenuitem.menuitem_2').removeClass('disabled');
        }
        if(screen2_flag == true){
            $('.coursemenuitem.menuitem_3').removeClass('disabled');
        }
        if(screen3_flag == true){
            $('.coursemenuitem.menuitem_4').removeClass('disabled');
        }
        if(screen4_flag == true){
            $('.coursemenuitem.menuitem_5').removeClass('disabled');
        }
        for(var i=1; i<=nCurrentPage; i++){
            $('a[menu-data = '+i+']').addClass('active');
        }
    }

    function setPageNumber(){
        if(_html != null){
            if(nCurrentPage !=0){
                if(nCurrentPage < 10){
                    _html.find('.pagination > .currentPageNumber').text("0"+nCurrentPage);
                }else{
                    _html.find('.pagination > .currentPageNumber').text(nCurrentPage);
                }
            }
        }
    }

    function createAudioPlayer(){
        oAudioPlayer = new AudioPlayer();
        oAudioPlayer.evts.addEventListener("DOMCREATED",function(a,b,c){
            render('footer',oAudioPlayer.getHTML())

            _html = oAudioPlayer.getHTML();
            // counter++;
            if(nCurrentPage == 1){
                _html.find('.pagination > .currentPageNumber').text("01");
            }
            activateAudioPlayer();
        })

        oAudioPlayer.evts.addEventListener("SLIDE",function(a,b,c){
            oContentLoader.animateGoTo(c)
            //oAudioPlayer.soundPlayPause("play");
        })
    }

  
    
    function activateAudioPlayer(){
        $('.click_cursor_unmute, .click_cursor_mute, .click_cursor_play, .click_cursor_pause, .click_cursor_replay, .click_cursor_text, .close_text_area_mod1').on('keypress', function(e){
            if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){
                return false;
            } 
            if(e.keyCode !=9){
                $(e.target).trigger('click');
            }
        })
        _html.find('.click_cursor_unmute').click(function(){
            audio_flag = true;
            _html.find('.click_cursor_mute').removeClass("hide");
            _html.find('.click_cursor_unmute').addClass("hide");
            oAudioPlayer.soundMute("unmute")
        });
    
        _html.find('.click_cursor_mute').click(function(){
            audio_flag = false;
            _html.find('.click_cursor_mute').addClass("hide");
            _html.find('.click_cursor_unmute').removeClass("hide");
            oAudioPlayer.soundMute("mute")
        });    

        _html.find('.click_cursor_play').click(function(){
            _html.find('.click_cursor_pause').removeClass("hide");
            _html.find('.click_cursor_play').addClass("hide");
            oAudioPlayer.soundPlayPause("play")
        });

        _html.find('.click_cursor_pause').click(function(){
            _html.find('.click_cursor_play').removeClass("hide");
            _html.find('.click_cursor_pause').addClass("hide");
            oAudioPlayer.soundPlayPause("pause")
        });

      _html.find('.click_cursor_text').click(function(){
            if(!transcriptOn){
                $('.transcript_data_mod1  > p').html('');
                $('.transcript_data_mod1').removeClass("hide");
                $('.transcript_data_mod1 > p').append(jsonData.pages[nCurrentPage].data.transcript);
                $('.close_text_area_mod1').removeClass("hide");
                $('.audio__control').addClass("hide");
                transcriptOn = true;
            }else{
                $('.transcript_data_mod1').addClass("hide");
                $('.transcript_data_mod1 > p').html('');
                $('.close_text_area_mod1').addClass("hide");
                transcriptOn = false;
            } 
        });

        $('.close_text_area_mod1').click(function(){
            $('.transcript_data_mod1').addClass("hide");
            $('.close_text_area_mod1').addClass("hide");
            $('.audio__control').removeClass("hide");
            transcriptOn = false;
        });

        // $('.close_text_area_mod1').click(function(){
        //     $('.transcript_data_mod1').addClass("hide");
        //     $('.close_text_area_mod1').addClass("hide");
        //     transcriptOn = false;
        // });

    _html.find('.click_cursor_replay').click(function(){
        _html.find('.click_cursor_pause').removeClass("hide");
        _html.find('.click_cursor_play').addClass("hide");
        oAudioPlayer.replay();
        $('.jumbotron section').attr("tabindex", -1);
        $('.jumbotron section').focus();
      });
    }


    function loadPage(){
        oContentLoader.removeElement();
        oContentLoader.loadPage(jsonData.pages[nCurrentPage].template,jsonData.pages[nCurrentPage].data)
        if(lmsConnect)
        {
            setSuspendedData();
        }
        oContentLoader.evts.addEventListener("PAGECREATED",function(a,b,c){
            render('section',oContentLoader.getHTML())
        })
        if(nCurrentPage != 0){
            oNavigation.setNextBack(nCurrentPage,nTotalPages);
            oNavigation.setPageName(jsonData.pages[nCurrentPage].title);
            plainScreenAudioFlag = jsonData.pages[nCurrentPage].data.plainScreenFlag;
            if(audio_flag == true){
                oAudioPlayer.loadAudio(jsonData.pages[nCurrentPage].data.audioPath, plainScreenAudioFlag);
                // _html.find('.click_cursor_mute').removeClass("hide");
                // _html.find('.click_cursor_unmute').addClass("hide");
                oAudioPlayer.soundMute("unmute")
            }else if(audio_flag == false){
                oAudioPlayer.loadAudio(jsonData.pages[nCurrentPage].data.audioPath, plainScreenAudioFlag);
                // _html.find('.click_cursor_mute').addClass("hide");
                // _html.find('.click_cursor_unmute').removeClass("hide");
                oAudioPlayer.soundMute("mute")
            }else{
                oAudioPlayer.loadAudio(jsonData.pages[nCurrentPage].data.audioPath, plainScreenAudioFlag);
            }
            $('body').focus();
            // oAudioPlayer.loadTranscript(jsonData.pages[nCurrentPage].data.transcript);
        }
        setPageNumber();
    }

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            jsonData = data
            nTotalPages = data.pages.length;
            startApplication();
        });
        // $(document).bind('mousedown', (e) => {
        //     $('body').addClass('using__mouse');
        // });
    
        // $(document).bind('keydown', (e) => {
        //     $('body').removeClass('using__mouse');
        // });
    })

})(BOI = BOI || {});
var BOI;