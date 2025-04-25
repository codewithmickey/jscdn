var VideoPlayer = function () {

    var _html;
    var evts = new Events();
    var oSlider;
    var timePlay = 0;
    var player;
    var vid;
    function construct() {
    }

    function showAudioPanel(){
        $('.video__control').removeClass("hide"); 
    }

    function hideAudioPanel(){
        $('.video__control').removeClass("show"); 
        $('.video__control').addClass("hide");
    }

    function showVideoPlayer() {
        $("#audioPlayer").addClass("hide");
        $("#videoPlayer").removeClass("hide");
      }

    function loadVideo(videoPath, video_end_flag) {

        $('.click_cursor_unmute').addClass("hide");
        $('.click_cursor_mute').removeClass("hide");

        if(videoPath != ''){
            $('.video__control').removeClass("hide");
        }else{
           $('.video__control').addClass("hide");
        }
         if(_html != null){
            _html.find('.click_cursor_mute').addClass("hide");
            _html.find('.click_cursor_unmute').removeClass("hide");
            _html.find('.click_cursor_pause').removeClass("hide");
            _html.find('.click_cursor_play').addClass("hide");
        }

        setTimeout(function(){ 

            // $('.click_cursor_unmute').addClass("hide");
            // $('.click_cursor_mute').removeClass("hide");
            // document.getElementById('vid').play()
            player = document.getElementById('video-element');
            if(player != null){
                player.play();
                $(player).attr("muted", false);
                document.getElementById("video-element").muted = false;
                console.log(player,'player')
                player.addEventListener('timeupdate', updateProgressBar, false);
            }
            progressBar = document.getElementById('videoSlider');

            var OSName = "Unknown";
            if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
            if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
            if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
            if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
            if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
            if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
            if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
            if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
            if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
            console.log(OSName,'OSName')

            if(OSName == 'Mac/iOS'){
                $('.click_cursor_pause').addClass("hide");
                $('.click_cursor_play').removeClass("hide");
            }

            vid = document.getElementById("video-element");
            console.log(player,'player')
            console.log(vid,'vid')
            if(vid != null){
                vid.onended = function() {

                    if(video_end_flag == true){

                        evts.dispatchEvent("VIDEO_END_FLAG", video_end_flag)
                    }
                };
            }
        }, 2000);
        // $(document).ready(function() {
        //     vid = document.getElementById("video-element");
        
        //     vid.onended = function() {
        
        //         if(video_end_flag == true){
        
        //             evts.dispatchEvent("VIDEO_END_FLAG", video_end_flag)
        //         }
        //     };
        // })

        $.ajax({
            url: "assets/htmldom/videoplayer.html", success: function (result) {
                _html = $(result)
                oSlider =  _html.find("#videoSlider");

                oSlider.slider({
                    change: function(event, ui) {
                        timePlay = ui.value
                        evts.dispatchEvent("SLIDE", ui.value)
                    },
                    slide: function (event, ui) {
                        timePlay = ui.value

                        soundPlayPause("pause")
                        evts.dispatchEvent("SLIDE", ui.value) 
                        soundPlayPause("play")  
                    }
                });
                // add events
                evts.dispatchEvent("DOMCREATED")
            }
        });   
    }

    function updateProgressBar() {
        var percentage = Math.floor((100 / player.duration) * player.currentTime);
        oSlider.slider("value", percentage);
    }

    function replay() {

        resetPlayer();
        player.play();
    }
    
    function resetPlayer() {
        progressBar.value = 0;
        player.currentTime = 0;
    }

    function soundPlayPause(playPause) {
        player.currentTime = Math.round((player.duration*timePlay)/100);
        if(playPause == "play"){
            _html.find('.click_cursor_pause').removeClass("hide");
            _html.find('.click_cursor_play').addClass("hide");
            player.play()
        }else{
            _html.find('.click_cursor_play').removeClass("hide");
            _html.find('.click_cursor_pause').addClass("hide");
            player.pause();
        }
    }
    function soundMute(volume) {

        if (volume == "mute") {
            player.muted = false;
        }
        else {
            player.muted = true;
        }
    }

    function removeElement() {
        if (_html != null)
        {
            _html.remove();
            oAnimate = null
        }
    }

    function hideElement() {
        if (_html != null)
        {

            _html.find('#videoPlayer').addClass("hide");
        }
    }

    construct()

    return {
        getHTML: function () {
            return _html;
        },
        loadVideo: loadVideo,
        showVideoPlayer: showVideoPlayer,
        soundMute:soundMute,
        soundPlayPause:soundPlayPause,
        replay:replay,
        removeElement:removeElement,
        hideElement:hideElement,
        showAudioPanel:showAudioPanel,
        hideAudioPanel:hideAudioPanel,
        evts: evts
    }

}