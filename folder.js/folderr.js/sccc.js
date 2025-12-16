// =====================
// RATING PRODUK OTOMATIS
// =====================
let rating = 4;

if (rating >= 4.5) {
  document.getElementById("hasil-rating").textContent = "★★★★★  Sangat Disarankan";
} else if (rating >= 3) {
  document.getElementById("hasil-rating").textContent = "★★★  Rekomendasi Biasa";
} else {
  document.getElementById("hasil-rating").textContent = "★  Tidak Direkomendasikan";
}

// =====================
// LAYANAN UNGGULAN
// =====================
let layanan = ["Gratis Ongkir", "Bayar di Tempat", "Garansi 30 Hari"];
layanan.forEach(function(item) {
  let li = document.createElement("li");
  li.textContent = item;
  document.getElementById("layanan-list").appendChild(li);
});

// =====================
// VALIDASI FORM PEMESANAN
// =====================
function cekForm() {
  let nama = document.getElementById("namaProduk").value;
  let jumlah = document.getElementById("jumlah").value;

  if (nama === "" || jumlah === "") {
    alert("Semua kolom wajib diisi.");
    return false;
  }
  if (jumlah <= 0) {
    alert("Jumlah harus lebih dari 0");
    return false;
  }
  alert("Pemesanan berhasil dikirim!");
  return true;
}

// =====================
// FITUR WISHLIST & TEMA
// =====================
document.addEventListener("DOMContentLoaded", function () {
  const produkInput = document.getElementById("produkInput");
  const tambahBtn = document.getElementById("tambahBtn");
  const daftarProduk = document.getElementById("daftarProduk");
  const previewProduk = document.getElementById("previewProduk");
  const temaSelect = document.getElementById("temaSelect");

  // Tambah Produk
  tambahBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const namaProduk = produkInput.value.trim();

    if (namaProduk !== "") {
      const li = document.createElement("li");
      li.textContent = namaProduk;

      // Hover efek
      li.addEventListener("mouseover", () => li.style.backgroundColor = "#e0e0e0");
      li.addEventListener("mouseout", () => li.style.backgroundColor = "");

      // Hapus dengan double klik
      li.addEventListener("dblclick", () => {
        if (confirm("Yakin ingin menghapus produk ini?")) {
          li.remove();
        }
      });

      daftarProduk.appendChild(li);
      produkInput.value = "";
      previewProduk.textContent = "";
    }
  });

  // Preview input ketik
  produkInput.addEventListener("keyup", function () {
    previewProduk.textContent = produkInput.value;
  });

  // Ubah tema warna
  temaSelect.addEventListener("change", function () {
    document.body.style.backgroundColor = temaSelect.value;
  });
});

// =====================
// FITUR RATING BINTANG INTERAKTIF
// =====================
document.addEventListener("DOMContentLoaded", function () {
  const ratingContainer = document.getElementById("ratingStars");
  const ratingText = document.getElementById("ratingText");

  if (!ratingContainer) return;

  let currentRating = 0;
  let stars = ["★","★","★","★","★"];

  ratingContainer.innerHTML = "";

  stars.forEach((star, index) => {
    const span = document.createElement("span");
    span.innerText = "★";
    span.dataset.value = index + 1;

    span.addEventListener("click", function () {
      currentRating = this.dataset.value;
      updateRating(currentRating);
      ratingText.innerText = "Rating Anda: " + currentRating + " / 5";
    });

    span.addEventListener("mouseover", function () {
      updateRating(this.dataset.value);
    });

    span.addEventListener("mouseout", function () {
      updateRating(currentRating);
    });

    ratingContainer.appendChild(span);
  });

  function updateRating(value) {
    const allStars = ratingContainer.querySelectorAll("span");
    allStars.forEach((star, index) => {
      star.style.color = index < value ? "gold" : "#fffffbff";
    });
  }
});

$(document).ready(function () {
    console.log("Website Rokok Herbal Sandi siap digunakan!");

    // Event semua tombol
    $(".btn").click(function () {
        console.log("Tombol diklik:", $(this).text());
    });
});
//ck pesanan
    function cekForm() {
      let produk = document.getElementById("namaProduk").value;
      let jumlah = document.getElementById("jumlah").value;

      if (produk === "" || jumlah === "") {
        alert("Harap isi semua form!");
        return false;
      }

      alert("Pesanan berhasil dikirim!");
      return true;
    }

    function scrollForm() {
      document.getElementById("formPemesanan").scrollIntoView({ behavior: "smooth" });
    }

    // 1. Smooth Scroll untuk anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 2. Tombol Scroll ke Atas
const scrollBtn = document.createElement('button');
scrollBtn.textContent = "↑ Top";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.cssText = "position:fixed;bottom:20px;right:20px;padding:10px 15px;font-size:18px;display:none;z-index:9999;";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.classList.contains('btn-primary')){
      alert("Terima kasih telah mengunjungi Cerita Kami!");
    }
    // Hapus alert untuk btn-danger agar Instagram bisa langsung dibuka
  });
});



