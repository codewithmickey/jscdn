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
            }else if(template === 'the_boi_function'){

                finalHTML.evts.addEventListener("THE_BOI_FUNCTION",function(a,b,c){

                    evts.dispatchEvent("THE_BOI_FUNCTION_CLICKED", c)
                })
            }else if(template === 'scope_of_application'){

                finalHTML.evts.addEventListener("SCOPE_OF_APPLICATION",function(a,b,c){

                    evts.dispatchEvent("SCOPE_OF_APPLICATION_CLICKED", c)
                })
            }else if(template === 'categories_reviewed_and_reported'){

                finalHTML.evts.addEventListener("CATEGORIES_REVIEWED_AND_REPORTED",function(a,b,c){

                    evts.dispatchEvent("CATEGORIES_REVIEWED_AND_REPORTED_CLICKED", c)
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