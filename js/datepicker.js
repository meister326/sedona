$(document).ready(function () {
    
    // DATEPICKER
    
    (function () {
        
        if (!$(".datepicker")) {
            
            return;
            
        };
        
        $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
        
        $(".datepicker input[name='date-from']").datepicker({
            
            defaultDate: null,
            showOn: "both",
            buttonText: "",
            minDate: "0"
            
        });
        
        $(".datepicker input[name='date-to']").datepicker({
            
            defaultDate: "+1d",
            showOn: "both",
            buttonText: "",
            minDate: "+1"
            
        });
        
    })();
    
});