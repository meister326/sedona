$(document).ready(function () {
    
    // NO JS
    
    (function () {
        
        $(".no-js").removeClass("no-js");
        
    })();
    
    // SEARCH FORM
    
    (function () {
        
        $(".booking .booking__btn").click(function (event) { 
            
            event.preventDefault();
            $(".booking .booking-form").slideToggle("slow");
            
        });
        
    })();
    
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
    
    // SLIDER RANGE
    
    (function() {
        
        if (!$("#slider-range")) {
            
            return;
            
        };
        
        $("#slider-range").slider({

            range: true,
            min: 0,
            max: 3000,
            values: [500, 2500],

            slide: function(event, ui) {

                $(".price-range input[name='min-price']").val(ui.values[0]);
                $(".price-range .min-price").text(ui.values[0]);
                $(".price-range input[name='max-price']").val(ui.values[1]);
                $(".price-range .max-price").text(ui.values[1]);

            }

        });
        
    })();
    
});