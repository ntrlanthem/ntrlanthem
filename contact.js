$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});     


$(".contactform").validate({

            submitHandler: function (form) {
                $.ajax({
                    url: "//formspree.io/ntrlanthem@gmail.com"
                    , method: "POST"
                    , data: {
                        name: $(form).find("input[name='name']").val()
                        , _replyto: $(form).find("input[name='_replyto']").val()
                        , message: $(form).find("textarea[name='message']").val()
                    }
                    , dataType: "json"
                    , success: function () {
                        $("#submit-success").fadeIn();
                        $(".contactform").fadeOut();
                    }
                    , error: function () {
                        $("#submit-errors").fadeIn();
                    }
                
                });
            }
        });

//reload contact form
$("#send-another").click(function (e) {
    $("#submit-success").fadeOut();
    $('input[type="text"], textarea').val('');
    $(".contactform").fadeIn();
});


