 var AudioPlayer = function () {

    var _html;
    var evts = new Events();
    var sound;
    var oSlider;
    var timePlay = 0;
    var id;
    function construct() {
        // load external dom
        $.ajax({
            url: "assets/htmldom/audioplayer.html", success: function (result) {
                _html = $(result)
                oSlider =  _html.find("#slider");
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

    function showAudioPanel(){
        $('.audio__control').removeClass("hide");  
    }

    function hideAudioPanel(){
        $('.audio__control').removeClass("show"); 
        $('.audio__control').addClass("hide");
    }

    function loadAudio(audioPath, audio_end_flag, nCurrentPage) {
        if(sound != undefined){
            sound.stop();
        }
        if(audioPath != ''){
            sound = new Howl({
                src: audioPath,
                onplay: function() {
                    requestAnimationFrame(isPlaying);
                    if(oSlider != undefined){
                        oSlider.slider("option", "max", Math.round(sound.duration()) );
                        oSlider.slider( "option", "step", 1 );
                    }
                }
            
            });
        }
        sound.on('end', function(){
            if(audio_end_flag == true){
                if(nCurrentPage < 6){
                    evts.dispatchEvent("AUDIO_END_FLAG", audio_end_flag)
                }else{
                    evts.dispatchEvent("AUDIO_END_AFTER_VIDEO_FLAG", audio_end_flag)
                }
            }
        });
        
        if(audioPath != ''){
            $('.audio__control').removeClass("hide");
            id = sound.play()
        }else{
           $('.audio__control').addClass("hide");
        }
         if(_html != null){
            _html.find('.click_cursor_mute').addClass("hide");
            _html.find('.click_cursor_unmute').removeClass("hide");
            _html.find('.click_cursor_pause').removeClass("hide");
            _html.find('.click_cursor_play').addClass("hide");
        }
    }

    function isPlaying() {
        if (sound.playing()) {
            time = sound.seek()
            var seekSlider = Math.round(time);//Math.round( (100/sound.duration()) * time );
            oSlider.slider("value", seekSlider);
            requestAnimationFrame(isPlaying);
            //evts.dispatchEvent("SLIDE", time)
        }
    }

    function replay(playPause) {
            sound.stop()
            sound.play();
            //oSlider.slider("value", seekSlider);
            requestAnimationFrame(isPlaying);
            // $('jumbotron').focus();
        }

    function soundPlayPause(playPause) {
        if(playPause == "play"){
           sound.seek(timePlay, id);
            sound.play()
            //oSlider.slider("value", seekSlider);
            requestAnimationFrame(isPlaying);
        }else{
            sound.pause();
            requestAnimationFrame(isPlaying);
        }
    }
    function soundMute(volume) {
        if(volume == "mute"){
            sound.mute(false);
            if(_html != undefined){
                _html.find('.click_cursor_mute').addClass("hide");
                _html.find('.click_cursor_unmute').removeClass("hide");
            }
        }else{
            sound.mute(true);
            if(_html != undefined){
                _html.find('.click_cursor_mute').removeClass("hide");
                _html.find('.click_cursor_unmute').addClass("hide");
            }
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
            _html.find('#audioPlayer').addClass("hide");
        }
    }

    function stopSound(){
        if(sound != undefined){
            sound.stop();
        }
    }

    construct()

    return {
        getHTML: function () {
            return _html;
        },
        loadAudio: loadAudio,
        soundMute:soundMute,
        soundPlayPause:soundPlayPause,
        replay:replay,
        removeElement:removeElement,
        hideElement:hideElement,
        showAudioPanel:showAudioPanel,
        hideAudioPanel:hideAudioPanel,
        stopSound:stopSound,
        evts: evts
    }

}