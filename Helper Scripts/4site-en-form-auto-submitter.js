// 4Site Studios helper script for automatically a form on Engaging Networks when "en-auto-submit=1" is present in URL

// Alternate code using mutation observer to potentially fire sooner: https://pastebin.com/raw/kReLvTL6

function getUrlParam(name) {
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return (results && results[1]) || undefined;
}


var id = getUrlParam('en-auto-submit');
if (id > "") {

    // The en-auto-submit argument is present in the URL
    //document.addEventListener('DOMContentLoaded',function(){
    
    console.log("en-aut-submit present in URL")
    window.addEventListener("load", function(event) {

    	console.log("Window loaded, waiting 500ms before clicking submit button")

		// Pause briefly to prevent EN "Request already submitted" errors
		setTimeout(function() {
			
			document.querySelector('.en__submit button').click();
			console.log("Submit button clicked")    

		}, 500);
		
	});

}