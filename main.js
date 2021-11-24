jQuery(function(){

    // let regx = /([a-z])+\s?$/i;
    let regx = /^([a-z]+\s)*[a-z]+$/i;
    let regxEmail = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i;
    let regxPhone = /([09])([\d]{2})\-([\d]{3})\-([\d]{4})$/;

    $("#firstName, #lastName").on('blur', function(){
            
        let newValue;
    
        newValue = capitalizeWords($(this).val().toLowerCase());

        $(this).val(newValue);

        first = $(this).val();

        function capitalizeWords(string){

            return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        };
    
    });

    $('#registrationForm').on('submit', function (event) {
    
        event.preventDefault();
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let email = $('#email').val();
        let phoneNumber = $('#phoneNumber').val();
        let errorCount = 0;
        

        if (firstName == " " || !regx.test(firstName)) {

            $('#firstName + .error-msg').text('Pls specify a valid name');
    
            $('#firstName').addClass('error');
    
            errorCount++;
    
        } else {

            $('#firstName + .error-msg').html('');
    
            $('#firstName').removeClass('error');
        };

        if (lastName == " " || !regx.test(lastName)) {

            $('#lastName + .error-msg').text('Pls specify a valid name');
    
            $('#lastName').addClass('error');
    
            errorCount++;
    
        } else {

            $('#lastName + .error-msg').html('');
    
            $('#lastName').removeClass('error');
        };

        if (email == " " || !regxEmail.test(email)) {

            $('#email + .error-msg').text('Pls specify a valid email');
    
            $('#email').addClass('error');
    
            errorCount++;
    
        } else {

            $('#email + .error-msg').html('');
    
            $('#email').removeClass('error');
        };

        if (phoneNumber == " " || !regxPhone.test(phoneNumber)) {

            $('#phoneNumber + .error-msg').text('Pls specify a valid Phone Number');

            $('#phoneNumber').addClass('error');

            errorCount++;

        } else {


            $('#phoneNumber + .error-msg').html('');

            $('#phoneNumber').removeClass('error');
        };

        if (errorCount > 0) {

            errorCount = 0;

        } else {

            alert('Added successfully');

            $('form').trigger('reset');
        }

    });
    
    $('#close').on('click', function () {

        $('form').trigger('reset');

    });
        
})

