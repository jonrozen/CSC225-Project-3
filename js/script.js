jQuery(document).ready(function(){
    var inchConvFactor;
    var cmConvFactor;
    var url = 'http://statenweb.mockable.io/conversions/';
    axios.get(url).then(function(response){
        inchConvFactor = response.data['centimetersInInch'];        
        cmConvFactor = response.data['inchesInCm'];
    });
    
    $('#button-inch').on('click',function() {
        var value = $('#input-inch').val();
        if (value === "") {
            $('#results-inch').html("<p>You didn't enter anything!</p>");
            event.preventDefault();
            return;
        }
        $('#results-inch').html("<p>Your result is: " + inchConvFactor*value + "</p>");
        event.preventDefault();
    });

    $('#button-cm').on('click',function() {
        var value = $('#input-cm').val();
        if (value === "") {
            $('#results-cm').html("<p>You didn't enter anything!</p>");
            event.preventDefault();
            return;
        }
        $('#results-cm').html("<p>Your result is: " + cmConvFactor*value + "</p>");
        event.preventDefault();
    });
});