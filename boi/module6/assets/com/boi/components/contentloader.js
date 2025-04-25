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
            }else if(template === 'an_overview_of_the_guidelines'){

                finalHTML.evts.addEventListener("AN_OVERVIEW_OF_THE_GUIDELINES",function(a,b,c){

                    evts.dispatchEvent("AN_OVERVIEW_OF_THE_GUIDELINES_CLICKED", c)
                })
            }else if(template === 'apportioning_personal_responsibility_for_the_occurrence'){

                finalHTML.evts.addEventListener("APPORTIONING_PERSONAL_RESPONSIBILITY_FOR_THE_OCCURRENCE",function(a,b,c){

                    evts.dispatchEvent("APPORTIONING_PERSONAL_RESPONSIBILITY_FOR_THE_OCCURRENCE_CLICKED", c)
                })
            }
            else if(template === 'scope_and_purpose_of_the_boi_tracker'){

                finalHTML.evts.addEventListener("SCOPE_AND_PURPOSE_OF_THE_BOI_TRACKER",function(a,b,c){

                    evts.dispatchEvent("SCOPE_AND_PURPOSE_OF_THE_BOI_TRACKER_CLICKED", c)
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