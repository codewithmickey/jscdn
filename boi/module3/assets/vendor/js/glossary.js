let jsonData;
let nCurrentKey = 'A';

loadGlossaryJson();

function loadGlossaryJson() 
{
    $.getJSON('glossary.json', function(data) {
        jsonData = data;
    });
}

$('#open__glossary').on('click', function(e) {
    e.preventDefault();
    
    generateList();
});

$('.glossary__key').on('click', function(e) {
    e.preventDefault();
    nCurrentKey = $(this).data('key');
    $('.active__glossary').removeClass('active__glossary');
    $(this).parent('li').addClass('active__glossary');
    generateList();
});

function generateList() {
    let termList = "";
    let termDesc = "";
    let isActive = true;
    for (let index = 0; index < jsonData.Glossary.length; index++) {
        if(jsonData.Glossary[index].key == nCurrentKey) {
            // termList = termList + "<li data-key='" + index + "'  class='terms__key "+ ((isActive) ? "active": "") +"' >"+ jsonData.Glossary[index].terms +"</li>";
            let clickevent = 'getDesc("'+index+'")';
            termList = termList + "<li onclick='"+ clickevent +"' id='terms_"+index+"' class='"+ ((isActive) ? "active": "") +"' >"+ jsonData.Glossary[index].terms +"</li>";
            if(isActive) {
                termDesc = "<p>" + jsonData.Glossary[index].description + "</p>";
            }
            isActive = false;
        }        
    }
    $('#glossary__terms').html(termList);
    $('.glossary-description').html(termDesc);
}

function getDesc(key) {
    $('.active').removeClass('active');
    $('#terms_' + key).addClass('active');
    termDesc = "<p>" + jsonData.Glossary[key].description + "</p>";
    $('.glossary-description').html(termDesc);
}