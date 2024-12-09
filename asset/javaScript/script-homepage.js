//============================================================================================================

//UNTUK LOAD MORE
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".grid-container .item"); // Semua item
  const loadMoreBtn = document.getElementById("load-more"); // Tombol "Load More"
  const viewMore = document.getElementById("view-all"); // Tombol "View More
  let visibleItems = 12; // Jumlah item yang terlihat awalnya

  loadMoreBtn.addEventListener("click", function () {
    // Tambahkan 4 item lagi setiap klik
    visibleItems += 12;

    // Tampilkan item sesuai jumlah visibleItems
    items.forEach((item, index) => {
      if (index < visibleItems) {
        item.style.display = "block";
      }
    });

    // Sembunyikan tombol jika semua item sudah ditampilkan
    if (visibleItems >= items.length) {
      loadMoreBtn.style.display = "none";
      viewMore.style.display = "block";
    }
  });
});

//=====================================================//=====================================================

//UNTUK TOP 10 POPULAR COMIC
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item-top10");
  document.querySelector(".slide-top10").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item-top10");
  document.querySelector(".slide-top10").prepend(items[items.length - 1]); // here the length of items = 6
});

//=============================================================================================

document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', function (event) {
    // Cegah default behavior jika klik pada dropdown toggle
    event.stopPropagation();

    // Tambahkan atau hapus kelas 'active' pada elemen yang diklik
    if (item.classList.contains('active')) {
      item.classList.remove('active'); // Jika sudah aktif, matikan
    } else {
      // Hapus 'active' dari elemen lain jika sudah ada yang aktif
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      item.classList.add('active'); // Tandai item ini sebagai aktif
    }
  });
});

// Tutup dropdown dan reset warna ketika klik di luar menu
document.addEventListener('click', function () {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active'); // Reset warna semua item
  });
});

// Untuk mencegah dropdown tertutup ketika mengklik tombol dropdown
document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
  dropdown.addEventListener('click', function (event) {
    event.stopPropagation(); // Mencegah klik di dalam dropdown agar dropdown tetap terbuka
  });
});

