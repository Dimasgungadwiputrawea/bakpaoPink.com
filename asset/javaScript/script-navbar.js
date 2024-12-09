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
