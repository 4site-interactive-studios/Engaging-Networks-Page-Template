// 4Site Studios helper script for automatically a form on Engaging Networks when "en-auto-submit=1" is present in URL

// Alternate code using mutation observer to potentially fire sooner: https://pastebin.com/raw/kReLvTL6

function getUrlParam(name) {
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return (results && results[1]) || undefined;
}


var id = getUrlParam('en-auto-submit');
if (id > "") {

    // The en-auto-submit argument is present in the URL
    document.addEventListener('DOMContentLoaded',function(){
       document.querySelector('.en__submit button').click();
    });

}

// Resizes parent iFrame any time a child iframe is clicked. Overkill but a quick fix
document.onclick = function(){
    
    // Wait a moment before triggering so any visual page redraw can happen and the final correct dimension are sent
    setTimeout(function() {
        pymChild.sendHeight();
    }, 25);
            
};    
