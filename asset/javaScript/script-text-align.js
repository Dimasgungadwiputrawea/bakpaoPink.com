// Ambil elemen gambar (start, center, end)
const startImg = document.querySelector(".start img");
const centerImg = document.querySelector(".center-align img");
const endImg = document.querySelector(".end img");

// Ambil semua elemen h2 dan p di dalam novel-read
const h2Elements = document.querySelectorAll(".novel-read h2");
const pElements = document.querySelectorAll(".novel-read p");

// Fungsi untuk mengubah text-align ke start
function setTextAlignToStart() {
  h2Elements.forEach((h2) => {
    h2.style.textAlign = "start"; // Atur text-align ke start
  });
  pElements.forEach((p) => {
    p.style.textAlign = "start"; // Atur text-align ke start
  });
}

// Fungsi untuk mengubah text-align ke center
function setTextAlignToCenter() {
  h2Elements.forEach((h2) => {
    h2.style.textAlign = "center"; // Atur text-align ke center
  });
  pElements.forEach((p) => {
    p.style.textAlign = "center"; // Atur text-align ke center
  });
}

// Fungsi untuk mengubah text-align ke end
function setTextAlignToEnd() {
  h2Elements.forEach((h2) => {
    h2.style.textAlign = "end"; // Atur text-align ke end
  });
  pElements.forEach((p) => {
    p.style.textAlign = "end"; // Atur text-align ke end
  });
}

// Tambahkan event listeners untuk gambar start, center, dan end
startImg.addEventListener("click", setTextAlignToStart);
centerImg.addEventListener("click", setTextAlignToCenter);
endImg.addEventListener("click", setTextAlignToEnd);

//================================================================================

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", function (event) {
    // Cegah default behavior jika klik pada dropdown toggle
    event.stopPropagation();

    // Tambahkan atau hapus kelas 'active' pada elemen yang diklik
    if (item.classList.contains("active")) {
      item.classList.remove("active"); // Jika sudah aktif, matikan
    } else {
      // Hapus 'active' dari elemen lain jika sudah ada yang aktif
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });
      item.classList.add("active"); // Tandai item ini sebagai aktif
    }
  });
});

// Tutup dropdown dan reset warna ketika klik di luar menu
document.addEventListener("click", function () {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active"); // Reset warna semua item
  });
});

// Untuk mencegah dropdown tertutup ketika mengklik tombol dropdown
document.querySelectorAll(".nav-item.dropdown").forEach((dropdown) => {
  dropdown.addEventListener("click", function (event) {
    event.stopPropagation(); // Mencegah klik di dalam dropdown agar dropdown tetap terbuka
  });
});
