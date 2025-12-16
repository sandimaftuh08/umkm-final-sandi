const form = document.getElementById("formKontak");
form.addEventListener("submit", function (event) {
let valid = true;
// Nama harus diisi
const nama = document.getElementById("nama");
const errorNama = document.getElementById("errorNama");
if (nama.value.trim() === "") {
errorNama.textContent = "Nama wajib diisi.";
valid = false;
} else {
errorNama.textContent = "";
}
// Email harus valid dan domain harus @gmail.com
const email = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");
const emailPattern = /^[^ ]+@gmail\.com$/i;
if (!emailPattern.test(email.value)) {
errorEmail.textContent = "Email harus @gmail.com dan format benar.";
valid = false;
} else {
errorEmail.textContent = "";
}
// Kategori harus dipilih
const kategori = document.getElementById("kategori");
const errorKategori = document.getElementById("errorKategori");
if (kategori.value === "") {
errorKategori.textContent = "Pilih salah satu kategori.";
valid = false;
} else {
errorKategori.textContent = "";
}
// Pesan minimal 10 karakter
const pesan = document.getElementById("pesan");
const errorPesan = document.getElementById("errorPesan");
if (pesan.value.trim().length < 10) {
errorPesan.textContent = "Pesan minimal 10 karakter.";
valid = false;
} else {
errorPesan.textContent = "";
}
if (!valid) {
event.preventDefault(); // Gagalkan submit
} else {
alert("Pesan berhasil dikirim!");
form.reset();
}
});

//Validasi Checkbox
document.getElementById("nama").addEventListener("blur", function () {
const errorNama = document.getElementById("errorNama");
if (this.value.trim() === "") {
errorNama.textContent = "Nama wajib diisi.";
} else {
errorNama.textContent = "";
}
});
document.getElementById("pesan").addEventListener("input", function () {
const errorPesan = document.getElementById("errorPesan");
if (this.value.trim().length < 10) {
errorPesan.textContent = "Pesan minimal 10 karakter.";
} else {
errorPesan.textContent = "";
}
});

//
function handleSubmit(event) {
    event.preventDefault(); // mencegah reload

    // Ambil data dari form
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const nomorhp = document.getElementById("nomorhp").value;
    const tanggal = document.getElementById("tanggal").value;
    const jeniskelamin = document.getElementById("jeniskelamin").value;
    const kategori = document.getElementById("kategori").value;
    const pesan = document.getElementById("pesan").value;
    const langganan = document.getElementById("langganan").checked ? "Ya" : "Tidak";

    // Tampilkan ke jendela popup di Chrome
    alert(
        "Pesan Berhasil Dikirim!\n\n" +
        "=== DATA ANDA ===\n" +
        "Nama: " + nama + "\n" +
        "Email: " + email + "\n" +
        "Nomor HP: " + nomorhp + "\n" +
        "Tanggal Pengiriman: " + tanggal + "\n" +
        "Jenis Kelamin: " + jeniskelamin + "\n" +
        "Kategori: " + kategori + "\n" +
        "Langganan: " + langganan + "\n" +
        "Pesan:\n" + pesan
    );

    // Menampilkan pesan sukses di halaman
    const feedback = document.getElementById("feedbackMessage");
    feedback.innerText = "Pesan Anda berhasil dikirim!";
    feedback.classList.add("show");

    // Reset form
    document.getElementById("contactForm").reset();
}

// Clear form
function clearForm() {
    document.getElementById("contactForm").reset();
}
