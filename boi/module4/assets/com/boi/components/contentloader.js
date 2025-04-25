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
            }else if(template === 'converning_order'){

                finalHTML.evts.addEventListener("CONVERNING_ORDER",function(a,b,c){

                    evts.dispatchEvent("CONVERNING_ORDER_CLICKED", c)
                })
            }else if(template === 'composition_board_inquiry'){

                finalHTML.evts.addEventListener("COMPOSITION_BOARD_INQUIRY",function(a,b,c){

                    evts.dispatchEvent("COMPOSITION_BOARD_INQUIRY_CLICKED", c)
                })
            }else if(template === 'head_of_mission_report'){

                finalHTML.evts.addEventListener("HEAD_OF_MISSION_REPORT",function(a,b,c){

                    evts.dispatchEvent("HEAD_OF_MISSION_REPORT_CLICKED", c)
                })
            }else if(template === 'contents_of_the_hom_report'){

                finalHTML.evts.addEventListener("CONTENTS_OF_THE_HOM_REPORT",function(a,b,c){

                    evts.dispatchEvent("CONTENTS_OF_THE_HOM_REPORT_CLICKED", c)
                })
            }else if(template === 'ancident_qualify_occupational_accident'){

                finalHTML.evts.addEventListener("ANCIDENT_QUALIFY_OCCUPATIONAL_ACCIDENT",function(a,b,c){

                    evts.dispatchEvent("ANCIDENT_QUALIFY_OCCUPATIONAL_ACCIDENT_CLICKED", c)
                })
            }else if(template === 'unhq_board_of_inquiry'){

                finalHTML.evts.addEventListener("UNHQ_BOARD_OF_INQUIRY",function(a,b,c){

                    evts.dispatchEvent("UNHQ_BOARD_OF_INQUIRY_CLICKED", c)
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