// testimoni//
const testimoni = [
  {
    nama: "Andi Pratama",
    komentar: "Produk sangat berkualitas dan pengiriman cepat. Saya sangat puas!",
    rating: 5,
    foto: "img/img testimoni/download (1).jpg"
  },
  {
    nama: "Siti Rahma",
    komentar: "Pelayanan ramah dan produk sesuai deskripsi. Recommended.",
    rating: 4,
    foto: "img/img testimoni/download (2).jpg"
  },
  {
    nama: "Budi Santoso",
    komentar: "Harga terjangkau dan manfaatnya terasa. Akan beli lagi.",
    rating: 5,
    foto: "img/img testimoni/download (3).jpg"
  },
  {
    nama: "Dewi Lestari",
    komentar: "Kemasan rapi, kualitas oke. Cukup memuaskan.",
    rating: 4,
    foto: "img/img testimoni/download (4).jpg"
  },
  {
    nama: "ahmad sandi",
    komentar: "Awalnya ragu, tapi ternyata bagus. Pengiriman aman.",
    rating: 4,
    foto: "img/img testimoni/download (5).jpg"
  },
  {
    nama: "Nur Aisyah",
    komentar: "Produk herbal terbaik yang pernah saya coba.",
    rating: 5,
    foto: "img/img testimoni/download.jpg"
  }
];

const container = document.getElementById("testimoni-container");

testimoni.forEach(item => {
  container.innerHTML += `
    <div class="col-md-4 col-sm-6">
      <div class="card h-100 shadow-sm text-center">
        <div class="card-body">
          <img src="${item.foto}" class="rounded-circle mb-3" width="100" height="100" alt="${item.nama}">
          <p class="card-text">"${item.komentar}"</p>
          <h6 class="mt-3 mb-1">${item.nama}</h6>
          <div class="text-warning">
            ${"★".repeat(item.rating)}${"☆".repeat(5 - item.rating)}
          </div>
        </div>
      </div>
    </div>
  `;
});



//validasi form pemesanan//
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

    // keranjang//

let keranjang = [];

function tambahKeKeranjang(nama, harga) {
  let item = keranjang.find(p => p.nama === nama);

  if (item) {
    item.jumlah++;
  } else {
    keranjang.push({
      nama: nama,
      harga: harga,
      jumlah: 1
    });
  }

  renderKeranjang();
}

function renderKeranjang() {
  const tbody = document.getElementById("cart-body");
  tbody.innerHTML = "";
  let total = 0;

  if (keranjang.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5">Keranjang masih kosong</td></tr>`;
    document.getElementById("totalHarga").innerText = "Rp 0";
    return;
  }

  keranjang.forEach((item, index) => {
    let subtotal = item.harga * item.jumlah;
    total += subtotal;

    tbody.innerHTML += `
      <tr>
        <td>${item.nama}</td>
        <td>Rp ${item.harga.toLocaleString()}</td>
        <td>${item.jumlah}</td>
        <td>Rp ${subtotal.toLocaleString()}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="hapusItem(${index})">
            Hapus
          </button>
        </td>
      </tr>
    `;
  });

  document.getElementById("totalHarga").innerText =
    "Rp " + total.toLocaleString();
}

function hapusItem(index) {
  keranjang.splice(index, 1);
  renderKeranjang();
}

function checkout() {
  if (keranjang.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  alert(
    "Checkout berhasil!\nTotal belanja: " +
    document.getElementById("totalHarga").innerText
  );

  keranjang = [];
  renderKeranjang();
}
