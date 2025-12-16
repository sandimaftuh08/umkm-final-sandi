document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("orderForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Pesanan berhasil dikirim. Tim kami akan menghubungi Anda via WhatsApp.");
        });
    }
});
