$(document).ready(function () {
    
    // SPINNER
    
    (function () {
        
        if (!$(".spinner")) {
            
            return;
            
        };
        
        $(".spinner input").spinner({
            
            min: 0,
            max: 999,
            numberFormat: "n",
            
            icons: { 
                
                down: "ui-icon-minusthick", 
                up: "ui-icon-plusthick" 
            
            }
            
        });
        
    })();
    
});