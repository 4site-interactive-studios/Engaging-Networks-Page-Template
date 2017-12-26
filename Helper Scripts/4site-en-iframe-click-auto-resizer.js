// Resizes parent iFrame any time a child iframe is clicked. Overkill but a quick fix
document.onclick = function(){
    
    // Wait a moment before triggering so any visual page redraw can happen and the final correct dimension are sent
    setTimeout(function() {
        pymChild.sendHeight();
    }, 25);
            
};    
