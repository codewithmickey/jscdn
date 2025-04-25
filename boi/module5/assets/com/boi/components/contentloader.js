var Contentloader = function(){

    var _html = null;
    var evts = new Events();
    var oAnimate = null;
    var finalHTML;
    
    function construct(){ 


    }


    function loadPage(template,data){

        $.ajax({url: "assets/templatehtml/"+template+".html", success: function(result){
            _html = $(result)

            finalHTML = new window[template](_html,data);
            if(template === 'opener'){
                finalHTML.evts.addEventListener("START_CLICKED",function(a,b,c){

                    evts.dispatchEvent("SPALSH_START_CLICKED")
                })
            }else if(template === 'quiz'){

                finalHTML.evts.addEventListener("REVIEW_MODEL_CLICKED",function(a,b,c){

                    evts.dispatchEvent("REVIEW_MODEL_START_CLICKED", c)
                })
                finalHTML.evts.addEventListener("QUIZ_START_FIRST",function(a,b,c){

                    evts.dispatchEvent("QUIZ_START_FIRST_TIME")
                })
                finalHTML.evts.addEventListener("RETAKE__QUIZ",function(a,b,c){

                    evts.dispatchEvent("RETAKE__QUIZ_FIRST_TIME", c)
                })
                finalHTML.evts.addEventListener("QUIZ_REVIEW",function(a,b,c){

                    evts.dispatchEvent("QUIZ_REVIEW_FIRST_TIME")
                })
            }
            else if(template === 'BOI_Officer'){

                finalHTML.evts.addEventListener("BOI_OFFICER",function(a,b,c){

                    evts.dispatchEvent("BOI_OFFICER_CLICKED", c)
                })
            }
            else if(template === 'Legal_Advisor'){

                finalHTML.evts.addEventListener("LEGAL_ADVISOR",function(a,b,c){

                    evts.dispatchEvent("LEGAL_ADVISOR_CLICKED", c)
                })
            }
            else if(template === 'board_members'){

                finalHTML.evts.addEventListener("BOARD_MEMBERS",function(a,b,c){

                    evts.dispatchEvent("BOARD_MEMBERS_CLICKED", c)
                })
            }
            else if(template === 'interviewing_witnesses_and_collecting_information'){

                finalHTML.evts.addEventListener("INTERVIEWING_WITNESSES",function(a,b,c){

                    evts.dispatchEvent("INTERVIEWING_WITNESSES_CLICKED", c)
                })
            }
            else if(template === 'Example_Interview_with_James_Brown'){

                finalHTML.evts.addEventListener("EXAMPLE_INTERVIEW",function(a,b,c){

                    evts.dispatchEvent("EXAMPLE_INTERVIEW_CLICKED", c)
                })
            }

            if(data.animation != undefined) {
                oAnimate = new animate(_html,data.animation);
            }
            evts.dispatchEvent("PAGECREATED")
        }});
    }

    function animateGoTo(sec){
        if (oAnimate != null) {
            oAnimate.gotoTime(sec)
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
    
    return{
        getHTML:function(){
            return _html;
        },
        animateGoTo:animateGoTo,
        removeElement:removeElement,
        loadPage:loadPage,
        evts:evts
    }
    
    }