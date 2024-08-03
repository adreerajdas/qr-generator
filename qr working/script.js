document.getElementById('qr-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const text = document.getElementById('text').value;

    document.getElementById('qrcode').innerHTML = '';

    new QRCode(document.getElementById('qrcode'), text);
});
