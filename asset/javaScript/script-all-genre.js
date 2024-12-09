const slider = document.querySelector(".slider");
const form = document.querySelector(".form");
let mouseDownAt = 0;
let left = 0;
slider.onmousedown = (e) => {
  mouseDownAt = e.clientX;
  console.log(mouseDownAt);
};
slider.onmouseup = () => {
  mouseDownAt = 0;
  slider.style.userSelect = "unset";
  slider.style.cursor = "unset";
  form.style.pointerEvents = "unset";
  form.classList.remove("left");
  form.classList.remove("right");
};
slider.onmousemove = (e) => {
  if (mouseDownAt == 0) return;
  slider.style.userSelect = "none";
  slider.style.cursor = "grab";
  form.style.pointerEvents = "none";

  if (e.clientX > mouseDownAt) {
    form.classList.add("left");
    form.classList.remove("right");
  } else if (e.clientX < mouseDownAt) {
    form.classList.remove("left");
    form.classList.add("right");
  }
  // increase or decrease the speed
  //by changing the value of 'speed'
  let speed = 3;
  let leftTemporary = left + (e.clientX - mouseDownAt) / speed;
  let leftLimit = form.offsetWidth - slider.offsetWidth / 2;

  if (leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit) {
    form.style.setProperty("--left", left + "px");
    left = leftTemporary;
    mouseDownAt = e.clientX;
  }
};
window.addEventListener("load", function () {
  const loadingWrapper = document.getElementById("loading-wrapper");
  const canvas = document.getElementById("loading-canvas");
  const ctx = canvas.getContext("2d");

  let particles = [];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.originX = x;
      this.originY = y;
      this.targetX = Math.random() * 50 - 25;
      this.targetY = Math.random() * 50 - 25;
      this.sincount = 0;
      this.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${z})`;
    }

    update() {
      this.sincount += this.z;
      this.x = this.originX + this.targetX * Math.sin(this.sincount * (Math.PI / 180));
      this.y = this.originY + this.targetY * Math.sin(this.sincount * (Math.PI / 180));
      if (this.sincount > 90) this.sincount = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.z * 10, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < 150; i++) {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let z = Math.random() * 0.6 + 0.4;
      particles.push(new Particle(x, y, z));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  // Initialize and animate particles

  animate();

  // Remove loading screen after 3 seconds
  setTimeout(() => {
    loadingWrapper.style.opacity = "0";
    setTimeout(() => {
      loadingWrapper.style.display = "none";
    }, 500);
  }, 3000);
});

//===============================================================

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
