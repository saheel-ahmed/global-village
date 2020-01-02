$("#btnQRCode").click(function() {
    var amt = $('input[name="amount"]').val();
    var refno = $('input[name="orderno"]').val();

    if (refno.trim().length == 0) {
        alert('Please enter reference number!');
        return false;
    }

    if (amt.trim().length == 0) {
        alert('Please enter amount!');
        return false;
    }

    const qrData = {
        qr_type: 1,
        card_no: "5273269582041620",
        amount: amt,
        ref_no: refno
    };

    $('#qrcode').qrcode({
        render: "canvas",
        text: JSON.stringify(qrData),
        width: 256,
        height: 256,
        background: "#ffffff",
        foreground: "#000000",
        src: './img/gv-logo.png',
        imgWidth: 32,
        imgHeight: 32
    });

    $(".price").hide();
    $('.qr').show();

});

$(document).on('click', '.close', function() {
    $('#qrcode').html('');
    $(".qr").hide();
    $('.price').show();
});