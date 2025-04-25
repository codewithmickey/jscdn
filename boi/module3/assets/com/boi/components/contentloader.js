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
            }else if(template === 'flipcard'){
                finalHTML.evts.addEventListener("FLIPCARD",function(a,b,c){
                    evts.dispatchEvent("FLIPCARD_CLICKED", c)
                })
            }else if(template === 'investigations'){
                finalHTML.evts.addEventListener("INVESTIGATIONS",function(a,b,c){
                    evts.dispatchEvent("INVESTIGATIONS_CLICKED", c)
                })
            }else if(template === 'clickandreveal_activity'){
                finalHTML.evts.addEventListener("CLICKANDREVEAL_ACTIVITY",function(a,b,c){
                    evts.dispatchEvent("CLICKANDREVEAL_ACTIVITY_CLICKED", c)
                })
            }else if(template === 'scenario_ocupational_activity'){
                finalHTML.evts.addEventListener("SCENARIO_OCUPATIONAL_ACTIVITY",function(a,b,c){
                    evts.dispatchEvent("SCENARIO_OCUPATIONAL_ACTIVITY_CLICKED", c)
                })
            }else if(template === 'Investigation_ocupational_activity'){
                finalHTML.evts.addEventListener("INVESTIGATION_OCUPATIONAL_ACTIVITY",function(a,b,c){
                    evts.dispatchEvent("INVESTIGATION_OCUPATIONAL_ACTIVITY_CLICKED", c)
                })
            }else if(template === 'scenario_aviation_activity'){
                finalHTML.evts.addEventListener("SCENARIO_AVIATION_ACTIVITY",function(a,b,c){
                    evts.dispatchEvent("SCENARIO_AVIATION_ACTIVITY_CLICKED", c)
                })
            }else if(template === 'Investigation_aviation_activity'){
                finalHTML.evts.addEventListener("INVESTIGATION_AVIATION_ACTIVITY",function(a,b,c){
                    evts.dispatchEvent("INVESTIGATION_AVIATION_ACTIVITY_CLICKED", c)
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