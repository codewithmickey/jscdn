(function(app) {

    // load JSON files
    var scorm;
    var lmsConnect;
    var suspend_data;
    var oNavigation;
    var oContentLoader = null
    var nCurrentPage = 0;
    var jsonData;
    var nTotalPages;
    var oAudioPlayer;
    var oVideoPlayer;
    var _html = null;
    var transcriptOn = false;
    var flag = false;
    var audio_flag = false;
    var createVideoPlayerFlag = false;
    var audio_end_flag_counter = 1;
    var screen1_flag = false;
    var screen2_flag = false;
    var screen3_flag = false;
    var screen4_flag = false;
    var screen5_flag = false;
    var screen6_flag = false;
    var screen7_flag = false;
    var screen8_flag = false;
    var screen9_flag = false;
    var screen10_flag = false;
    var screen11_flag = false;
    var screen12_flag = false;
    var screen13_flag = false;
    var screen14_flag = false;
    var retake_quiz_start_quiz_flag = false;
    var i;
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
                    screen6_flag = JSON.parse(suspend_data[6]);
                    screen7_flag = JSON.parse(suspend_data[7]);
                    screen8_flag = JSON.parse(suspend_data[8]);
                    screen9_flag = JSON.parse(suspend_data[9]);
                    screen10_flag = JSON.parse(suspend_data[10]);
                    screen11_flag = JSON.parse(suspend_data[11]);
                    screen12_flag = JSON.parse(suspend_data[12]);
                    screen13_flag = JSON.parse(suspend_data[13]);
                    screen14_flag = JSON.parse(suspend_data[14]);
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
        oContentLoader.evts.addEventListener("SPALSH_START_CLICKED",function(a,b,c){
           // evts.dispatchEvent("SPALSH_START_CLICKED")
           nCurrentPage++;
           if(jsonData.pages[nCurrentPage].data.playerFlag == 'audio'){
                createAudioPlayer();
           }else{
            createVideoPlayer();
           }
           createNavigation();
        //    loadPage();
        });

        oContentLoader.evts.addEventListener("REVIEW_MODEL_START_CLICKED",function(a,b,c){
            nCurrentPage = 1;
            oNavigation.removeElement();
            oAudioPlayer.removeElement();
            if(createVideoPlayerFlag == true){
                oVideoPlayer.removeElement();
            }
            oContentLoader.removeElement();
            if(jsonData.pages[nCurrentPage].data.playerFlag == 'audio'){
                createAudioPlayer();
            }else{   
                createVideoPlayer();
            }
            if( c== true ){
                createNavigationAfterReviewModule();
            }else{
                createNavigation();
            }
            // createNavigation();
            // loadPage();
            flag =false;
        });

        oContentLoader.evts.addEventListener("QUIZ_START_FIRST_TIME",function(a,b,c){
            flag=true;
        });

        oContentLoader.evts.addEventListener("RETAKE__QUIZ_FIRST_TIME",function(a,b,c){
            retake_quiz_start_quiz_flag = c;
            flag=false;
        });

        oContentLoader.evts.addEventListener("QUIZ_REVIEW_FIRST_TIME",function(a,b,c){

        });

        oContentLoader.evts.addEventListener("BOI_OFFICER_CLICKED", function(a,b,c){
            if(c==true){
                screen5_flag = true;
            }
            setEnableMenu();
            $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
            if(lmsConnect)
            {
                setSuspendedData();
            }
        });

        oContentLoader.evts.addEventListener("LEGAL_ADVISOR_CLICKED", function(a,b,c){
            if(c==true){
                screen7_flag = true;
            }
            setEnableMenu();
            $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
            if(lmsConnect)
            {
                setSuspendedData();
            }
        });

        oContentLoader.evts.addEventListener("BOARD_MEMBERS_CLICKED", function(a,b,c){
            if(c==true){
                screen8_flag = true;
            }
            setEnableMenu();
            $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
            if(lmsConnect)
            {
                setSuspendedData();
            }
        });

        oContentLoader.evts.addEventListener("INTERVIEWING_WITNESSES_CLICKED", function(a,b,c){
            if(c==true){
                screen10_flag = true;
            }
            setEnableMenu();
            $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
            if(lmsConnect)
            {
                setSuspendedData();
            }
        });

        oContentLoader.evts.addEventListener("EXAMPLE_INTERVIEW_CLICKED", function(a,b,c){
            if(c==true){
                screen11_flag = true;
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
                // nCurrentPage++;
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
                }else if(screen6_flag == true && nCurrentPage==6){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen7_flag == true && nCurrentPage==7){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen8_flag == true && nCurrentPage==8){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen9_flag == true && nCurrentPage==9){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen10_flag == true && nCurrentPage==10){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen11_flag == true && nCurrentPage==11){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen12_flag == true && nCurrentPage==12){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen13_flag == true && nCurrentPage==13){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen14_flag == true && nCurrentPage==14){
                    nCurrentPage++;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }
                $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
                // counter++;
                setPageNumber();
                _html.find('.transcript_data_mod2').addClass("hide");
                transcriptOn = false;
                // loadPage();
                if(nCurrentPage == nTotalPages-1 && retake_quiz_start_quiz_flag == true){
                    setTimeout(function() {
                        $('.start__quiz__submit__btn').removeClass("disabled");
                    }, 500);   
                }
            }
        });

        document.addEventListener('swiped-right', function(e) {
            if(nCurrentPage > 1 && flag==false){
                // nCurrentPage--;
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
                }else if(screen6_flag == true || screen6_flag == false && nCurrentPage==6){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen7_flag == true || screen7_flag == false && nCurrentPage==7){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen8_flag == true || screen8_flag == false && nCurrentPage==8){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen9_flag == true || screen9_flag == false && nCurrentPage==9){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen10_flag == true || screen10_flag == false && nCurrentPage==10){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen11_flag == true || screen11_flag == false && nCurrentPage==11){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen12_flag == true || screen12_flag == false && nCurrentPage==12){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen13_flag == true || screen13_flag == false && nCurrentPage==13){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }else if(screen14_flag == true || screen14_flag == false && nCurrentPage==14){
                    nCurrentPage--;
                    audio_end_flag_counter = nCurrentPage;
                    loadPage();
                }
                $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
                // counter--;
                setPageNumber();
                _html.find('.transcript_data_mod2').addClass("hide");
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
            loadPage()
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
                $('.transcript_data_mod2').addClass("hide");
                $('.close_text_area_mod2').addClass("hide");
                $('.audio__control').removeClass("hide");
                transcriptOn = false;
                nCurrentPage = c
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
                }
                else if(screen5_flag == true && nCurrentPage==5){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }
                else if(screen6_flag == true && nCurrentPage==6){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }
                else if(screen7_flag == true && nCurrentPage==7){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }
                else if(screen8_flag == true && nCurrentPage==8){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }
                else if(screen9_flag == true && nCurrentPage==9){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }
                else if(screen10_flag == true && nCurrentPage==10){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }
                else if(screen11_flag == true && nCurrentPage==11){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }
                else if(screen12_flag == true && nCurrentPage==12){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }
                else if(screen13_flag == true && nCurrentPage==13){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }
                else if(screen14_flag == true && nCurrentPage==14){
                    $('.start__quiz__submit__btn ').removeClass('disabled'); 
                }
                else{
                    $('a[menu-data = '+'Next'+']').addClass('disabled');
                }
                if(nCurrentPage == nTotalPages-1 && retake_quiz_start_quiz_flag == true){
                    setTimeout(function() {
                        $('.start__quiz__submit__btn').removeClass("disabled");
                    }, 500);   
                }
            }else if(c == "Next")
            {   if(!$(".access_anchor_next").hasClass("disabled")){
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
                    $('.transcript_data_mod2').addClass("hide");
                    transcriptOn = false;
                    loadPage()
                    if(nCurrentPage == nTotalPages-1 && retake_quiz_start_quiz_flag == true){
                        setTimeout(function() {
                            $('.start__quiz__submit__btn').removeClass("disabled");
                        }, 500);   
                    }
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
                }else if(screen5_flag == true && nCurrentPage==5){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen6_flag == true && nCurrentPage==6){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen7_flag == true && nCurrentPage==7){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen8_flag == true && nCurrentPage==8){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen9_flag == true && nCurrentPage==9){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen10_flag == true && nCurrentPage==10){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen11_flag == true && nCurrentPage==11){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen12_flag == true && nCurrentPage==12){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen13_flag == true && nCurrentPage==13){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen14_flag == true && nCurrentPage==14){
                    $('.start__quiz__submit__btn ').removeClass('disabled'); 
                }else{
                    $('a[menu-data = '+'Next'+']').addClass('disabled');
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
                    $('.transcript_data_mod2').addClass("hide");
                    transcriptOn = false;
                    loadPage()
                    setTimeout(function(){
                        setPageNumber();
                    },40);
                    if(nCurrentPage == nTotalPages-1 && retake_quiz_start_quiz_flag == true){
                        setTimeout(function() {
                            $('.start__quiz__submit__btn').removeClass("disabled");
                        }, 500);   
                    }
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
                }else if(screen5_flag == true && nCurrentPage==5){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen6_flag == true && nCurrentPage==6){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen7_flag == true && nCurrentPage==7){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen8_flag == true && nCurrentPage==8){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen9_flag == true && nCurrentPage==9){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen10_flag == true && nCurrentPage==10){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen11_flag == true && nCurrentPage==11){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen12_flag == true && nCurrentPage==12){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen13_flag == true && nCurrentPage==13){
                    $('a[menu-data = '+'Next'+']').removeClass('disabled'); 
                }else if(screen14_flag == true && nCurrentPage==14){
                    $('.start__quiz__submit__btn ').removeClass('disabled'); 
                }else{
                    $('a[menu-data = '+'Next'+']').addClass('disabled');
                }
            }else if(c == "Glossary")
            {
                oNavigation.openGlossary();
                $('.glossary_tabs_ul li:first').addClass('current_glossary_key');
                $("#exampleModal").on("hidden.bs.modal", function () {
                    $('.nextback').removeClass("hide");
                    $('.current_glossary_key').removeClass("current_glossary_key");
                });
                setPageNumber();
            }else if(c == 'Help'){
                // $('.nextback').addClass("hide");
                $("#helpImageScreen").click("hidden.bs.modal", function () {
                    $('.nextback').removeClass("hide");
                });
                setPageNumber();
            }else if(c == 'menu'){
                setPageNumber();
                $(document).ready(function() {
                    $.getJSON( "assets/json/config.json", function( data ) {
                        $('.menuitem').unbind('keypress').bind('keypress', function(e){
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
            oNavigation.generateList(nCurrentKey);
        })

        oNavigation.evts.addEventListener("GLOSSARY_DESC",function(a,b,c){
            oNavigation.getDesc(c);
        })

        oAudioPlayer.evts.addEventListener("AUDIO_END_FLAG", function(a, b, c){
            $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
            if(c== true && nCurrentPage==1){
                screen1_flag = true;
            }else if(c== true && nCurrentPage==2){
                screen2_flag = true;
            }else if(c== true && nCurrentPage==3){
                screen3_flag = true;
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

    function  createNavigationAfterReviewModule() {
        oNavigation = new Navigation();
        oNavigation.evts.addEventListener("DOMCREATED",function(a,b,c){
            oNavigation.setCourseName(jsonData.courseTitle)
            render('header',oNavigation.getHTML())
            for(i=1;i<nTotalPages;i++){
                $('a[menu-data = '+ i +']').removeClass('disabled');
                $('a[menu-data = '+ i +']').addClass('active');
            }
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
            loadPage()
        })

        oNavigation.evts.addEventListener("NAV_CLICKED",function(a,b,c){
            $(".nav-link").find(".active").removeClass("active");
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
            if(!isNaN(c))
            {
                $('a[menu-data = '+'Back'+']').removeClass('hide');
                $('a[menu-data = '+'Next'+']').removeClass('hide');
                $('.transcript_data_mod2').addClass("hide");
                $('.close_text_area_mod2').addClass("hide");
                $('.audio__control').removeClass("hide");
                transcriptOn = false;
                nCurrentPage = c
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
                if(nCurrentPage == nTotalPages-1){
                    setTimeout(function() {
                        $('.start__quiz__submit__btn').removeClass("disabled");  
                        $('.start__quiz__submit__btn').removeAttr('tabindex'); 
                        $('.start__quiz__submit__btn').attr('tabindex', 0);
                    }, 50);   
                }
            }else if(c == "Next")
            {   if(!$(".access_anchor_next").hasClass("disabled")){
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
                    $('.transcript_data_mod2').addClass("hide");
                    transcriptOn = false;
                    loadPage()
                    if(nCurrentPage == nTotalPages-1){
                        setTimeout(function() {
                            $('.start__quiz__submit__btn').removeClass("disabled");  
                            $('.start__quiz__submit__btn').removeAttr('tabindex'); 
                            $('.start__quiz__submit__btn').attr('tabindex', 0);
                        }, 50);   
                    }
                    audio_end_flag_counter = nCurrentPage;
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
                    $('.transcript_data_mod2').addClass("hide");
                    transcriptOn = false;
                    loadPage()
                    setTimeout(function(){
                        if(nCurrentPage<10){
                            _html.find('.pagination > .currentPageNumber').text("0"+nCurrentPage);
                        }else{
                            _html.find('.pagination > .currentPageNumber').text(nCurrentPage);
                        }
                    },40);
                    if(nCurrentPage == nTotalPages-1){
                        setTimeout(function() {
                            $('.start__quiz__submit__btn').removeClass("disabled");  
                            $('.start__quiz__submit__btn').removeAttr('tabindex'); 
                            $('.start__quiz__submit__btn').attr('tabindex', 0);
                        }, 500);   
                    }
                    audio_end_flag_counter = nCurrentPage;
                }
            }else if(c == "Glossary")
            {
                oNavigation.openGlossary();
                $('.glossary_tabs_ul li:first').addClass('current_glossary_key');
                $("#exampleModal").on("hidden.bs.modal", function () {
                    $('.nextback').removeClass("hide");
                    $('.current_glossary_key').removeClass("current_glossary_key");
                });
                setPageNumber();
            }else if(c == 'Help'){
                // $('.nextback').addClass("hide");
                $("#helpImageScreen").click("hidden.bs.modal", function () {
                    $('.nextback').removeClass("hide");
                });
                setPageNumber();
            }else if(c == 'menu'){
                setPageNumber();
                $(document).ready(function() {
                    $.getJSON( "assets/json/config.json", function( data ) {
                        $('.menuitem').unbind('keypress').bind('keypress', function(e){
                            // if(!$(this).hasClass("disabled")){
                                if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){
                                    return false;
                                }
                                if(e.keyCode !=9){
                                    $(e.target).trigger('click');
                                }
                            // }
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
            oNavigation.generateList(nCurrentKey);
        })

        oNavigation.evts.addEventListener("GLOSSARY_DESC",function(a,b,c){
            oNavigation.getDesc(c);
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
        }else if(screen5_flag == true && nCurrentPage ==5){
            $('.coursemenuitem.menuitem_6').removeClass('disabled');
        }else if(screen6_flag == true && nCurrentPage ==6){
            $('.coursemenuitem.menuitem_7').removeClass('disabled');
        }else if(screen7_flag == true && nCurrentPage ==7){
            $('.coursemenuitem.menuitem_8').removeClass('disabled');
        }else if(screen8_flag == true && nCurrentPage ==8){
            $('.coursemenuitem.menuitem_9').removeClass('disabled');
        }else if(screen9_flag == true && nCurrentPage ==9){
            $('.coursemenuitem.menuitem_10').removeClass('disabled');
        }else if(screen10_flag == true && nCurrentPage ==10){
            $('.coursemenuitem.menuitem_11').removeClass('disabled');
        }else if(screen11_flag == true && nCurrentPage ==11){
            $('.coursemenuitem.menuitem_12').removeClass('disabled');
        }else if(screen12_flag == true && nCurrentPage ==12){
            $('.coursemenuitem.menuitem_13').removeClass('disabled');
        }else if(screen13_flag == true && nCurrentPage ==13){
            $('.coursemenuitem.menuitem_14').removeClass('disabled');
        }else if(screen14_flag == true && nCurrentPage ==14){  
            $('a[menu-data = '+'Next'+']').addClass('disabled');
            $('.start__quiz__submit__btn ').removeClass('disabled');
            $('.start__quiz__submit__btn').removeAttr('tabindex'); 
            $('.start__quiz__submit__btn').attr('tabindex', 0);
        }
    }

    function setSuspendedData(){
        suspendData = nCurrentPage+"<||>"+screen1_flag+"<||>"+screen2_flag+"<||>"+screen3_flag+"<||>"+screen4_flag+"<||>"+screen5_flag+"<||>"+screen6_flag+"<||>"+screen7_flag+"<||>"+screen8_flag+"<||>"+screen9_flag+"<||>"+screen10_flag+"<||>"+screen11_flag+"<||>"+screen12_flag+"<||>"+screen13_flag+"<||>"+screen14_flag;
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
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
        }else if(screen6_flag == true && nCurrentPage==6){
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
        }else if(screen7_flag == true && nCurrentPage==7){
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
        }else if(screen8_flag == true && nCurrentPage==8){
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
        }else if(screen9_flag == true && nCurrentPage==9){
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
        }else if(screen10_flag == true && nCurrentPage==10){
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
        }else if(screen11_flag == true && nCurrentPage==11){
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
        }else if(screen12_flag == true && nCurrentPage==12){
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
        }else if(screen13_flag == true && nCurrentPage==13){
            $('a[menu-data = '+'Next'+']').removeClass('disabled');
        }else if(screen14_flag == true && nCurrentPage==14){
            $('a[menu-data = '+'Next'+']').addClass('disabled');
        }else if(screen14_flag == false && nCurrentPage==14){
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
        if(screen5_flag == true){
            $('.coursemenuitem.menuitem_6').removeClass('disabled');
        }
        if(screen6_flag == true){
            $('.coursemenuitem.menuitem_7').removeClass('disabled');
        }
        if(screen7_flag == true){
            $('.coursemenuitem.menuitem_8').removeClass('disabled');
        }
        if(screen8_flag == true){
            $('.coursemenuitem.menuitem_9').removeClass('disabled');
        }
        if(screen9_flag == true){
            $('.coursemenuitem.menuitem_10').removeClass('disabled');
        }
        if(screen10_flag == true){
            $('.coursemenuitem.menuitem_11').removeClass('disabled');
        }
        if(screen11_flag == true){
            $('.coursemenuitem.menuitem_12').removeClass('disabled');
        }
        if(screen12_flag == true){
            $('.coursemenuitem.menuitem_13').removeClass('disabled');
        }
        if(screen13_flag == true){
            $('.coursemenuitem.menuitem_14').removeClass('disabled');
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
        createVideoPlayerFlag = false;
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
        setTimeout(function(){
            setPageNumber();
        },40);
    }

    function dispatchAudioEndEvent() {
        oAudioPlayer.evts.addEventListener("AUDIO_END_AFTER_VIDEO_FLAG", function(a, b, c){
            $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
            if(c== true && nCurrentPage==6){
                screen6_flag = true;
            }
            else if(c== true && nCurrentPage==9){
                screen9_flag = true;
            }
            else if(c== true && nCurrentPage==12){
                screen12_flag = true;
            }
            else if(c== true && nCurrentPage==13){
                screen13_flag = true;
            }
            else if(c== true && nCurrentPage==14){
                screen14_flag = true;
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

    function createVideoPlayer(){
        var globalData;
        oAudioPlayer.stopSound()
        createVideoPlayerFlag = true;
        oVideoPlayer = new VideoPlayer();
        globalData = oVideoPlayer.getHTML();
        if(globalData != undefined){
            globalData.remove();
        }
        oVideoPlayer.evts.addEventListener("DOMCREATED",function(a,b,c){
            render('footer',oVideoPlayer.getHTML())
            _html = oVideoPlayer.getHTML();
            // counter++;
            if(nCurrentPage == 1){
                _html.find('.pagination > .currentPageNumber').text("01");
            }
            activateAudioPlayer();
        })

        oVideoPlayer.evts.addEventListener("SLIDE",function(a,b,c){
            oContentLoader.animateGoTo(c)
        })
        dispatchVideoEndEvent();
    }

    function dispatchVideoEndEvent(){
        oVideoPlayer.evts.addEventListener("VIDEO_END_FLAG", function(a, b, c){
            // audio_end_flag_counter++;
            $('a[menu-data = ' + nCurrentPage + ']').addClass('active');
            if(c== true && nCurrentPage==4){
                screen4_flag = true;
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
    
    function activateAudioPlayer(){
        $('.speaker_on, .speaker_off, .Play_button, .Pause_button, .click_cursor_replay, .click_cursor_text, .close_text_area_mod2').on('keypress', function(e){
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
            if(jsonData.pages[nCurrentPage].data.playerFlag == 'audio'){
                oAudioPlayer.soundMute("unmute")
            }else{
                oVideoPlayer.soundMute("unmute")
            }
        });
    
        _html.find('.click_cursor_mute').click(function(){
            audio_flag = false;
            _html.find('.click_cursor_mute').addClass("hide");
            _html.find('.click_cursor_unmute').removeClass("hide");
            if(jsonData.pages[nCurrentPage].data.playerFlag == 'audio'){
                oAudioPlayer.soundMute("mute")
            }else{
                oVideoPlayer.soundMute("mute")
            } 
        });    

        _html.find('.click_cursor_play').click(function(){
            _html.find('.click_cursor_pause').removeClass("hide");
            _html.find('.click_cursor_play').addClass("hide");
            if(jsonData.pages[nCurrentPage].data.playerFlag == 'audio'){
                oAudioPlayer.soundPlayPause("play")
            }else{
                oVideoPlayer.soundPlayPause("play")
            } 
        });

        _html.find('.click_cursor_pause').click(function(){
            _html.find('.click_cursor_play').removeClass("hide");
            _html.find('.click_cursor_pause').addClass("hide");
            if(jsonData.pages[nCurrentPage].data.playerFlag == 'audio'){
                oAudioPlayer.soundPlayPause("pause")
            }else{
                oVideoPlayer.soundPlayPause("pause")
            }
        });

      _html.find('.click_cursor_text').click(function(){
            if(!transcriptOn){
                $('.transcript_data_mod2  > p').html('');
                $('.transcript_data_mod2').removeClass("hide");
                $('.transcript_data_mod2 > p').append(jsonData.pages[nCurrentPage].data.transcript);
                $('.close_text_area_mod2').removeClass("hide");
                $('.audio__control').addClass("hide");
                transcriptOn = true;
            }else{
                $('.transcript_data_mod2').addClass("hide");
                $('.transcript_data_mod2 > p').html('');
                $('.close_text_area_mod2').addClass("hide");
                transcriptOn = false;
            } 
        });

        $('.close_text_area_mod2').click(function(){
            $('.transcript_data_mod2').addClass("hide");
            $('.close_text_area_mod2').addClass("hide");
            $('.audio__control').removeClass("hide");
            transcriptOn = false;
        });

    _html.find('.click_cursor_replay').click(function(){
        _html.find('.click_cursor_pause').removeClass("hide");
        _html.find('.click_cursor_play').addClass("hide");
        if(jsonData.pages[nCurrentPage].data.playerFlag == 'audio'){
            oAudioPlayer.replay();
        }else{
            oVideoPlayer.replay();
        }
        $('.jumbotron section').attr("tabindex", -1);
        $('.jumbotron section').focus();
      });
    }

    function loadPage(){
        oContentLoader.removeElement();
        oContentLoader.loadPage(jsonData.pages[nCurrentPage].template,jsonData.pages[nCurrentPage].data);
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
                if(jsonData.pages[nCurrentPage].data.playerFlag == 'audio'){
                    if(createVideoPlayerFlag == true){
                        oVideoPlayer.removeElement();
                        createAudioPlayer(); 
                    } 
                    oAudioPlayer.loadAudio(jsonData.pages[nCurrentPage].data.audioPath, plainScreenAudioFlag, nCurrentPage);
                    setTimeout(function(){ 
                        oAudioPlayer.soundMute("unmute")
                    }, 40);
                    if(nCurrentPage >= 6){ 
                        dispatchAudioEndEvent();
                    }
                }else{ 
                    oAudioPlayer.stopSound();
                    oAudioPlayer.removeElement();
                    createVideoPlayer();
                    oVideoPlayer.showVideoPlayer();
                    oVideoPlayer.loadVideo(jsonData.pages[nCurrentPage].data.videoPath, plainScreenAudioFlag);
                    setTimeout(function(){ 
                        _html.find('.click_cursor_mute').removeClass("hide");
                        _html.find('.click_cursor_unmute').addClass("hide");
                        oVideoPlayer.soundMute("unmute")
                    }, 2000);
                }
            }else if(audio_flag == false){
                if(jsonData.pages[nCurrentPage].data.playerFlag == 'audio'){
                    if(createVideoPlayerFlag == true){
                        oVideoPlayer.removeElement(); 
                        createAudioPlayer();
                    }
                    oAudioPlayer.loadAudio(jsonData.pages[nCurrentPage].data.audioPath, plainScreenAudioFlag, nCurrentPage);
                    if(nCurrentPage >= 6){ 
                        dispatchAudioEndEvent();
                    }
                }else{ 
                    oAudioPlayer.stopSound();
                    oAudioPlayer.removeElement(); 
                    createVideoPlayer();
                    oVideoPlayer.showVideoPlayer();
                    oVideoPlayer.loadVideo(jsonData.pages[nCurrentPage].data.videoPath, plainScreenAudioFlag);
                }
                oAudioPlayer.soundMute("mute")
            }else{
                if(jsonData.pages[nCurrentPage].data.playerFlag == 'audio'){
                    if(createVideoPlayerFlag == true){
                        oVideoPlayer.removeElement();
                        createAudioPlayer(); 
                    }
                    oAudioPlayer.loadAudio(jsonData.pages[nCurrentPage].data.audioPath, plainScreenAudioFlag, nCurrentPage);
                    if(nCurrentPage >= 6){ 
                        dispatchAudioEndEvent();
                    }
                }else{  
                    oAudioPlayer.stopSound();
                    oAudioPlayer.removeElement();
                    createVideoPlayer();
                    oVideoPlayer.showVideoPlayer();
                    oVideoPlayer.loadVideo(jsonData.pages[nCurrentPage].data.videoPath, plainScreenAudioFlag);
                }
            }
            $('body').focus();
            // oAudioPlayer.loadTranscript(jsonData.pages[nCurrentPage].data.transcript);
        }
        setPageNumber();
        // pagination();
    }

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            jsonData = data
            nTotalPages = data.pages.length;
            startApplication();
        });
        $(document).bind('mousedown', (e) => {
            $('body').addClass('using__mouse');
        });
        $(document).bind('keydown', (e) => {
            $('body').removeClass('using__mouse');
        });
    })
})(BOI = BOI || {});
var BOI;