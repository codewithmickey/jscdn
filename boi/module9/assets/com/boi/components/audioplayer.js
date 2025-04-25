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
                oSlider =  _html.find("#audio_slider");

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

    function loadAudio(audioPath, audio_end_flag) {

        if(sound != undefined){
            sound.stop();
        }

        sound = new Howl({
            src: audioPath,
            onplay: function() {
                requestAnimationFrame(isPlaying);
                oSlider.slider("option", "max", Math.round(sound.duration()) );
                oSlider.slider( "option", "step", 1 );
            }
        
        });

        sound.on('end', function(){
            if(audio_end_flag == true){
                evts.dispatchEvent("AUDIO_END_FLAG", audio_end_flag)
            }
        });
     
         id = sound.play()
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
        }else{
            sound.mute(true);
        
        }
      }

    function removeElement() {
        if (_html != null)
        {
            _html.remove();
            oAnimate = null
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
        showAudioPanel:showAudioPanel,
        hideAudioPanel:hideAudioPanel,
        evts: evts
    }

}