$(document).ready(function() {
    /*radio button select set up payment*/
    var flag = ""
    $("input[name='payment-option']").click(function() {
        if ($('#payone').is(":checked")) {
            flag = 1;
            radiobutonValue = $("input[name='payment-option']:checked").val();
        } else if ($('#paytwo').is(":checked")) {

            flag = 2;
        } else if ($('#paythree').is(":checked")) {
            flag = 3;
        } else {
            flag = 4;
        }
    });

    /*page navigation as per payment radio button selected*/
    $('#setupPayment').click(function() {
        if (flag == 1) {
            $('.chs-container').show()
            $('.card-container').hide();
            $('.apay-container').hide();
            $('.gpay-container').hide();
        } else if (flag == 2) {
            $('.chs-container').hide()
            $('.card-container').show();
            $('.apay-container').hide();
            $('.gpay-container').hide();
        } else if (flag == 3) {
            $('.chs-container').hide()
            $('.card-container').hide();
            $('.apay-container').show();
            $('.gpay-container').hide();
        } else {
            $('.chs-container').hide()
            $('.card-container').hide();
            $('.apay-container').hide();
            $('.gpay-container').show();
        }
    });
});


// Add active class to the current button (highlight it)
$(document).ready(function() {
    $('.payment-method a.thumbnail').click(function() {
        $('.payment-method a.thumbnail').removeClass("active");
        $(this).addClass("active");
    });
});