/************************************
 * Template: 4Site Template - Helper Scripts
 * Project: TBD
 ***********************************/

/************************************
 * Function Calls
 ***********************************/

// Provides a function for returning the value of a URL parameter
// e.g. var id = getUrlParam('en-auto-submit');
function getUrlParam(name) {
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return (results && results[1]) || undefined;
}

/************************************
 * On "DOMContentLoaded"
 * The whole document (HTML) has been loaded.
 ***********************************/

window.addEventListener("DOMContentLoaded", function(event) {
    // 4Site Studios helper script for automatically submitting a form on Engaging Networks. Works when "en-auto-submit=1" is present in URL
    // Alternate code using mutation observer to potentially fire sooner: https://pastebin.com/raw/kReLvTL6
    var id = getUrlParam('en-auto-submit');
    if (id > "") {
        document.querySelector('.en__submit button').click();

    }
});

/************************************
 * On "Load"
 * The whole document (HTML) and its resources (e.g. images, iframes, scripts) have been loaded.
 ***********************************/

window.addEventListener("load", function(event) {

    // Utilizing PYM responsive iFrame library, resizes parent iFrame any time a child iframe is clicked. This is overkill but a quick fix that solves for most use cases.
    document.onclick = function() {

        // Send height update immedietely. 
        pymChild.sendHeight();

        // And then wait a moment before triggering again so any visual page redraw is corrected for.
        setTimeout(function() {
            pymChild.sendHeight();
        }, 25);
    };

    // The Auto Submit argument is present in the local storage, click the submit button.
    if (typeof(Storage) !== "undefined") {
        if (localStorage.quickSubmit == 'true') {
            // The Auto Submit argument is present in the local storage
            document.querySelector('#en_actionMessageToggle_SubmitButton button').click();
        }
    }

});