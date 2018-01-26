// 4Site Studios helper script for automatically a form on Engaging Networks when "en-auto-submit=1" is present in URL
// Alternate code using mutation observer to potentially fire sooner: https://pastebin.com/raw/kReLvTL6

function getUrlParam(name) {
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return (results && results[1]) || undefined;
}

var id = getUrlParam('en-auto-submit');
if (id > "") {

    window.addEventListener("load", function(event) {
	
	document.querySelector('.en__submit button').click();
	console.log("en-aut-submit present in URL, submit button auto clicked")

    });

}
