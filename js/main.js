$("#form").submit(function(event) {

    event.preventDefault();

    $('.full-form').attr('disabled', true);

    var form_data = $(this).serializeArray();
    form_data.push({ name: 'rq_lc', value: 'stock-tips' });

    $.post("https://www.cofagr.com/free-stock-tips/index.php/welcome/subscribe", form_data, function(responce) {
        var res = JSON.parse(responce);
        if (res.success) {
            $('.title-mod').html('Thanks For Subscribing');
            $('.body-mod').html(res.message);
            $('.modal-footer').html("<!-- Event snippet for LP_Conversion conversion page --><script>  gtag('event', 'conversion',{'send_to': 'AW-732239660/zVl6CLfIv6YBEKyulN0C'});</script>");
            $('#myModal2').modal();
        } else {
            $('.title-mod').html('Error');
            $('.body-mod').html(res.message);
            $('#myModal2').modal();
            $('.full-form').attr('disabled', false);
        }

    });
});

$(".trial-form").submit(function(event) {

    event.preventDefault();

    $('.trial-submit').attr('disabled', true);

    var form_data = $(this).serializeArray();

    form_data.push({ name: 'rq_lc', value: 'stock-tips' });

    $.post("https://www.cofagr.com/free-stock-tips/index.php/welcome/free_trial", form_data, function(responce) {
        var res = JSON.parse(responce);
        if (res.success) {
            $('.title-mod').html('Request Submitted For Free Trial');
            $('.body-mod').html(res.message);
            $('#myModal2').modal();
        } else {
            $('.title-mod').html('Sorry');
            $('.body-mod').html(res.message);
            $('#myModal2').modal();
            $('.trial-submit').attr('disabled', false);
        }

    });
});