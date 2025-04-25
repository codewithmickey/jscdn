var Example_Interview_with_James_Brown = function(dom,data){

    var evts= new Events();
    var Example_Interview_audio_flag_counter = 0;
    var EXAMPLE_INTERVIEW_FLAG = false;
    //var _html = dom

    function construct(){
        _html = dom


        _html.find('.description').html(data.content)
        evts.dispatchEvent("PageCreated123")

    }

    function loadTranscript(transcript){

    } 

    construct()

    _html.find(".CandRQuestions__key").click(function(){
        _html.find(".CandRQuestions__key").css("background", "#fff");
        _html.find(".CandRQuestions__key").css("color", "#000");
        _html.find(".common_question_count").addClass("hide");            
        _html.find(".common_question_count_Mob_Ipad").addClass("hide");
        _html.find(".common_answer_count").addClass("hide");   
        _html.find(".common_answer_count_Mob_Ipad").addClass("hide");   
        _html.find(".interviewer_mod5").addClass("hide");
        _html.find(".witness_mod5").addClass("hide");
        if($(".download_icon_interview_screen").hasClass("download_icon_interview_screen_mt")){
            _html.find(".download_icon_interview_screen").removeClass("download_icon_interview_screen_mt");
        }
        _html.find(".download_icon_interview_screen").addClass("download_icon_interview_screen_ipad");
        if($(this).attr("data-key") == 'A'){
            _html.find(".question_first").removeClass("hide");
            _html.find(".answer_first").removeClass("hide");
            _html.find(".interviewer_mod5_key_A").removeClass("hide");
            _html.find(".witness_mod5_key_A").removeClass("hide");
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".CandRQuestions__key_A").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_A").css("color", "#ffffff");
        }else if($(this).attr("data-key") == 'B'){
            _html.find(".question_second").removeClass("hide");
            _html.find(".answer_second").removeClass("hide");
            _html.find(".interviewer_mod5_key_B").removeClass("hide");
            _html.find(".witness_mod5_key_B").removeClass("hide");
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".CandRQuestions__key_B").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_B").css("color", "#ffffff");
        }else if($(this).attr("data-key") == 'C'){
            _html.find(".question_third").removeClass("hide");
            _html.find(".answer_third").removeClass("hide");
            _html.find(".interviewer_mod5_key_C").removeClass("hide");
            _html.find(".witness_mod5_key_C").removeClass("hide");
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".CandRQuestions__key_C").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_C").css("color", "#ffffff");
        }else if($(this).attr("data-key") == 'D'){
            _html.find(".question_fourth").removeClass("hide");
            _html.find(".answer_fourth").removeClass("hide");
            _html.find(".interviewer_mod5_key_D").removeClass("hide");
            _html.find(".witness_mod5_key_D").removeClass("hide"); 
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide"); 
            _html.find(".CandRQuestions__key_D").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_D").css("color", "#ffffff");  
        }else if($(this).attr("data-key") == 'E'){
            _html.find(".question_fifth").removeClass("hide");
            _html.find(".answer_fifth").removeClass("hide");
            _html.find(".interviewer_mod5_key_E").removeClass("hide");
            _html.find(".witness_mod5_key_E").removeClass("hide"); 
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");  
            _html.find(".CandRQuestions__key_E").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_E").css("color", "#ffffff");       
        }else if($(this).attr("data-key") == 'F'){
            _html.find(".question_sixth").removeClass("hide");
            _html.find(".answer_sixth").removeClass("hide");
            _html.find(".interviewer_mod5_key_F").removeClass("hide");
            _html.find(".witness_mod5_key_F").removeClass("hide");  
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide"); 
            _html.find(".CandRQuestions__key_F").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_F").css("color", "#ffffff");        
        }else if($(this).attr("data-key") == 'G'){ 
            _html.find(".question_seventh").removeClass("hide");
            _html.find(".answer_seventh").removeClass("hide");
            _html.find(".interviewer_mod5_key_G").removeClass("hide");
            _html.find(".witness_mod5_key_G").removeClass("hide");   
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");   
            _html.find(".CandRQuestions__key_G").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_G").css("color", "#ffffff");      
        }else if($(this).attr("data-key") == 'H'){ 
            _html.find(".question_eighth").removeClass("hide");
            _html.find(".answer_eighth").removeClass("hide"); 
            _html.find(".interviewer_mod5_key_H").removeClass("hide");
            _html.find(".witness_mod5_key_H").removeClass("hide");    
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");  
            _html.find(".CandRQuestions__key_H").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_H").css("color", "#ffffff");       
        }else if($(this).attr("data-key") == 'I'){ 
            _html.find(".question_nineth").removeClass("hide");
            _html.find(".answer_nineth").removeClass("hide"); 
            _html.find(".interviewer_mod5_key_I").removeClass("hide");
            _html.find(".witness_mod5_key_I").removeClass("hide");   
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");   
            _html.find(".CandRQuestions__key_I").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_I").css("color", "#ffffff");      
        }else if($(this).attr("data-key") == 'J'){ 
            _html.find(".question_tenth").removeClass("hide");
            _html.find(".answer_tenth").removeClass("hide");  
            _html.find(".interviewer_mod5_key_J").removeClass("hide");
            _html.find(".witness_mod5_key_J").removeClass("hide"); 
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");  
            _html.find(".CandRQuestions__key_J").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_J").css("color", "#ffffff");       
        }else if($(this).attr("data-key") == 'K'){
            _html.find(".question_eleventh").removeClass("hide");
            _html.find(".answer_eleventh").removeClass("hide"); 
            _html.find(".interviewer_mod5_key_K").removeClass("hide");
            _html.find(".witness_mod5_key_K").removeClass("hide"); 
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");  
            _html.find(".CandRQuestions__key_K").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_K").css("color", "#ffffff");       
        }else if($(this).attr("data-key") == 'L'){ 
            _html.find(".question_twelveth").removeClass("hide");
            _html.find(".answer_twelveth").removeClass("hide"); 
            _html.find(".interviewer_mod5_key_L").removeClass("hide");
            _html.find(".witness_mod5_key_L").removeClass("hide");    
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");    
            _html.find(".CandRQuestions__key_L").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_L").css("color", "#ffffff");     
        }else if($(this).attr("data-key") == 'M'){
            _html.find(".question_thirteenth").removeClass("hide");
            _html.find(".answer_thirteenth").removeClass("hide");   
            _html.find(".interviewer_mod5_key_M").removeClass("hide");
            _html.find(".witness_mod5_key_M").removeClass("hide");   
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");   
            _html.find(".CandRQuestions__key_M").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_M").css("color", "#ffffff");  
        }else if($(this).attr("data-key") == 'N'){
            _html.find(".question_fourteenth").removeClass("hide");
            _html.find(".answer_fourteenth").removeClass("hide");
            _html.find(".interviewer_mod5_key_N").removeClass("hide");
            _html.find(".witness_mod5_key_N").removeClass("hide");  
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide"); 
            _html.find(".CandRQuestions__key_N").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_N").css("color", "#ffffff");        
        }else if($(this).attr("data-key") == 'O'){    
            _html.find(".question_fifteenth").removeClass("hide");
            _html.find(".answer_fifteenth").removeClass("hide"); 
            _html.find(".interviewer_mod5_key_O").removeClass("hide");
            _html.find(".witness_mod5_key_O").removeClass("hide");  
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");   
            _html.find(".CandRQuestions__key_O").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_O").css("color", "#ffffff");      
        }else if($(this).attr("data-key") == 'P'){    
            _html.find(".question_sixteenth").removeClass("hide");
            _html.find(".answer_sixteenth").removeClass("hide");
            _html.find(".interviewer_mod5_key_P").removeClass("hide");
            _html.find(".witness_mod5_key_P").removeClass("hide");   
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");    
            _html.find(".CandRQuestions__key_P").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_P").css("color", "#ffffff");     
        }else if($(this).attr("data-key") == 'Q'){    
            _html.find(".question_seventeenth").removeClass("hide");
            _html.find(".answer_seventeenth").removeClass("hide");  
            _html.find(".interviewer_mod5_key_Q").removeClass("hide");
            _html.find(".witness_mod5_key_Q").removeClass("hide");     
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");  
            _html.find(".CandRQuestions__key_Q").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_Q").css("color", "#ffffff"); 
        }else if($(this).attr("data-key") == 'R'){    
            _html.find(".question_eighteenth").removeClass("hide");
            _html.find(".answer_eighteenth").removeClass("hide");  
            _html.find(".interviewer_mod5_key_R").removeClass("hide");
            _html.find(".witness_mod5_key_R").removeClass("hide");     
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");  
            _html.find(".CandRQuestions__key_R").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_R").css("color", "#ffffff"); 
        }else if($(this).attr("data-key") == 'S'){    
            _html.find(".question_nineteenth").removeClass("hide");
            _html.find(".answer_nineteenth").removeClass("hide");  
            _html.find(".interviewer_mod5_key_S").removeClass("hide");
            _html.find(".witness_mod5_key_S").removeClass("hide");     
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");  
            _html.find(".CandRQuestions__key_S").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_S").css("color", "#ffffff"); 
        }else if($(this).attr("data-key") == 'T'){    
            _html.find(".question_twenteeth").removeClass("hide");
            _html.find(".answer_twenteeth").removeClass("hide");  
            _html.find(".interviewer_mod5_key_T").removeClass("hide");
            _html.find(".witness_mod5_key_T").removeClass("hide");     
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");  
            _html.find(".CandRQuestions__key_T").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_T").css("color", "#ffffff"); 
        }else if($(this).attr("data-key") == 'U'){    
            _html.find(".question_twentyoneth").removeClass("hide");
            _html.find(".answer_twentyoneth").removeClass("hide");  
            _html.find(".interviewer_mod5_key_U").removeClass("hide");
            _html.find(".witness_mod5_key_U").removeClass("hide");     
            _html.find(".interviewer_Mob_Ipad_mod5").removeClass("hide");
            _html.find(".witness_Mob_Ipad_mod5").removeClass("hide");  
            _html.find(".CandRQuestions__key_U").css("background", "#048CC4");
            _html.find(".CandRQuestions__key_U").css("color", "#ffffff"); 
        }
    });

    _html.find(".CandRQuestions__key_A").click(function(){
        if(!$(".CandRQuestions__key_A").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_A').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_B").click(function(){
        if(!$(".CandRQuestions__key_B").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_B').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_C").click(function(){
        if(!$(".CandRQuestions__key_C").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_C').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_D").click(function(){
        if(!$(".CandRQuestions__key_D").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_D').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_E").click(function(){
        if(!$(".CandRQuestions__key_E").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_E').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_F").click(function(){
        if(!$(".CandRQuestions__key_F").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_F').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_G").click(function(){
        if(!$(".CandRQuestions__key_G").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_G').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_H").click(function(){
        if(!$(".CandRQuestions__key_H").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_H').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_I").click(function(){
        if(!$(".CandRQuestions__key_I").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_I').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_J").click(function(){
        if(!$(".CandRQuestions__key_J").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_J').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_K").click(function(){
        if(!$(".CandRQuestions__key_K").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_K').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_L").click(function(){
        if(!$(".CandRQuestions__key_L").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_L').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_M").click(function(){
        if(!$(".CandRQuestions__key_M").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_M').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_N").click(function(){
        if(!$(".CandRQuestions__key_N").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_N').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_O").click(function(){
        if(!$(".CandRQuestions__key_O").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_O').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_P").click(function(){
        if(!$(".CandRQuestions__key_P").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_P').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_Q").click(function(){
        if(!$(".CandRQuestions__key_Q").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_Q').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_R").click(function(){
        if(!$(".CandRQuestions__key_R").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_R').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_S").click(function(){
        if(!$(".CandRQuestions__key_S").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_S').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_T").click(function(){
        if(!$(".CandRQuestions__key_T").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_T').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    _html.find(".CandRQuestions__key_U").click(function(){
        if(!$(".CandRQuestions__key_U").hasClass("Example_Interview_audio_flag")){
            _html.find('.CandRQuestions__key_U').addClass('Example_Interview_audio_flag');
            Example_Interview_audio_flag_counter++;
        }
        dispatchExampleInterview();
    })

    function dispatchExampleInterview(){
        if(Example_Interview_audio_flag_counter == 21){
            EXAMPLE_INTERVIEW_FLAG = true;
            evts.dispatchEvent("EXAMPLE_INTERVIEW", EXAMPLE_INTERVIEW_FLAG);
        }
    }

    $(document).ready(function() {
        $.getJSON( "assets/json/config.json", function( data ) {
            $('.CandRQuestions__key').unbind('keypress').bind('keypress', function(e){


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
        loadTranscript:loadTranscript,
        evts:evts

    }
}