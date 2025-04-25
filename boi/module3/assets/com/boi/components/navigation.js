var Navigation = function(){

    var _html;
    var evts = new Events();
    let jsonData;
    let nCurrentKey = 'A';

    
    function construct(){
    

        // load external dom


        $.ajax({url: "assets/htmldom/navigation.html", success: function(result){
            _html = $(result)

            // add events
           
            evts.dispatchEvent("DOMCREATED")
            addButtonEvents();

          }});
          loadGlossaryJson();
    }
    
    // function hover(element) {
    
    //     element.setAttribute('src', 'assets/images/Previous page hover.png');
    // }
      
    // function unhover(element) {
    
    //     element.setAttribute('src', 'assets/images/Previous page hover.png');
    // }

    function showNavbarPanel(){
        $('.navbar').removeClass("hide");  
    }

    function hideNavbarPanel(){
        $('.navbar').removeClass("show"); 
        $('.navbar').addClass("hide");
    }

    function setCourseName(_value){
        _html.find('.coursename').html(_value)
    }

    function setPageName(_value){
        _html.find('.pagename').html(_value)
    }

    function setNextBack(current,total){
        // disable next backdrop
        // enable next or enable back



        if (current == total -1) {
            $('a[menu-data = '+'Next'+']').addClass('disabled');
        }
        // else if(current < total -1){
        //     $('a[menu-data = '+'Next'+']').removeClass('disabled');
        // }

        if (current == 1) {
            $('a[menu-data = '+'Back'+']').addClass('disabled');
            $('a.access_anchor_back').addClass('disabled');
        }else{
            $('a[menu-data = '+'Back'+']').removeClass('disabled');
            $('a.access_anchor_back').removeClass('disabled');
        }

        $(_html[5]).find("a").addClass('disabled')

        if(current <=0){
            $($(_html[5]).find("a")[1]).removeClass('disabled')
        }

        if(current > 1){
            $($(_html[2]).find("a")[0]).removeClass('disabled')
            $($(_html[2]).find("a")[1]).removeClass('disabled')
            if(current == total -1 ){
                $($(_html[2]).find("a")[1]).addClass('disabled')
            }
        }
        _html.find(".nextback").addClass('disabled')
    }
    
    function addButtonEvents() {
        _html.find('a').on("click", function(){
            evts.dispatchEvent("NAV_CLICKED",$(this).attr("menu-data"))
        })

        _html.find('.glossary__key').on("click", function(){
            $('.glossary_heading_terms_abbr').focus();
            $('.current_glossary_key').removeClass("current_glossary_key");
            $(this).parent('li').addClass("current_glossary_key");
            evts.dispatchEvent("GLOSSARY_KEY",$(this).attr("data-key"))
        })
    }

    function addGlossaryTermEvents(){
        _html.find('#glossary__terms > li').on("click", function(){

            evts.dispatchEvent("GLOSSARY_DESC",$(this).attr("data-key"))
        })
    }

    function removeElement() {
        if (_html != null)
        {
            _html.remove();
            oAnimate = null
        }
    }
    
    construct()

  

    function loadGlossaryJson() 
    {
        $.getJSON('./assets/json/glossary.json', function(data) {
            jsonData = data;

        });
    }

    function openGlossary(){
        $('.active__glossary').removeClass('active__glossary');
        generateList(nCurrentKey);
    }
    
    // $('#open__glossary').on('click', function(e) {
    //     e.preventDefault();
        
    //     generateList(nCurrentKey);
    // });
    
    // $('.glossary__key').on('click', function(e) {
    //     e.preventDefault();
    //     // nCurrentKey = $(this).data('key');
    //     $('.active__glossary').removeClass('active__glossary');
    //     $(this).parent('li').addClass('active__glossary');
    //     // generateList();
    // });

    
    
    function generateList(nCurrentLetter) {
        let termList = "";
        let termDesc = "";
        let isActive = true;
        $('.active__glossary').removeClass('active__glossary');
        $(this).parent('li').addClass('active__glossary');
        for (let index = 0; index < jsonData.Glossary.length; index++) {
            if(jsonData.Glossary[index].key == nCurrentLetter) {
                // termList = termList + "<li data-key='" + index + "'  class='terms__key "+ ((isActive) ? "active": "") +"' >"+ jsonData.Glossary[index].terms +"</li>";
                let clickevent = 'getDesc("'+index+'")';
                termList = termList + "<li tabindex='"+0+"' data-key='"+ index +"' id='terms_"+index+"' class='"+ ((isActive) ? "active": "") +"' >"+ jsonData.Glossary[index].terms +"</li>";
                if(isActive) {
                    termDesc = "<p>" + jsonData.Glossary[index].description + "</p>";
                }
                isActive = false;
            }        
        }
        $('#glossary__terms').html(termList);
        $('.glossary-description').html(termDesc);
        addGlossaryTermEvents();

        $(document).ready(function() {
            $.getJSON( "assets/json/config.json", function( data ) {
                $('#terms_0, #terms_1, #terms_2, #terms_3, #terms_4, #terms_5, #terms_6, #terms_7, #terms_8, #terms_9').unbind('keypress').bind('keypress', function(e){


                    if(e.type === 'keypress' && e.keyCode != 13 && e.keyCode != 32 && e.keyCode != 9){

                    return false;
                    }
                    if(e.keyCode !=9){

                    $(e.target).trigger('click');
                    }
                })
            });
        })
    }
    
    function getDesc(key) {
        $('.active').removeClass('active');
        $('#terms_' + key).addClass('active');
        termDesc = "<p>" + jsonData.Glossary[key].description + "</p>";
        $('.glossary-description').html(termDesc);
        $('.glossary-description').focus();
    }
    
    return{
        getHTML:function(){
            return _html;
        },
        setCourseName:setCourseName,
        setPageName:setPageName,
        addButtonEvents:addButtonEvents,
        setNextBack:setNextBack,
        generateList:generateList,
        getDesc:getDesc,
        openGlossary:openGlossary,
        removeElement:removeElement,
        showNavbarPanel:showNavbarPanel,
        hideNavbarPanel:hideNavbarPanel,
        // hover:hover,
        // unhover:unhover,
        evts:evts
    }
    
    }