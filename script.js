document.addEventListener("DOMContentLoaded", function () {
    // Pesan selamat datang
    alert("Selamat datang di website kami!");

    // Validasi form
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (!name || !email) {
            alert("Mohon isi semua field!");
            event.preventDefault(); // Mencegah pengiriman form
        } else {
            alert("Form berhasil dikirim!");
        }
    });
});
