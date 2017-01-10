$(document).ready(function() {
    
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