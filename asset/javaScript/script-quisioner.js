document.getElementById("recommend-btn").addEventListener("click", async () => {
  const era = document.getElementById("era").value;
  const mainCharacter = document.getElementById("main-character").value;
  const story = document.getElementById("story").value;
  const world = document.getElementById("world").value; // "none" if not selected

  try {
    // Fetch the JSON data
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const comics = await response.json();

    // Check if the selected era exists
    if (!comics[era]) {
      throw new Error(`No comics found for the selected era: ${era}`);
    }

    // Filter comics based on user preferences
    const filteredComics = comics[era].filter((comic) => {
      return comic.tags.includes(mainCharacter) && comic.tags.includes(story) && (world === "none" || comic.tags.includes(world));
    });

    const resultDiv = document.getElementById("result");
    if (filteredComics.length > 0) {
      // Dynamically generate HTML for each comic
      resultDiv.innerHTML = `
                <h3>Recommended Comics:</h3>
                <div class="grid-container three-columns">
                    ${filteredComics
                      .map(
                        (comic, index) => `
                        <div class="item card" id="comic-${index + 1}">
                            <img src="${comic.img}" alt="${comic.title}" />
                            <div class="info">
                                <h1>${comic.title}</h1>
                                <p>${comic.desc}<p>
                                <a href="#" class="btn">Read More</a>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            `;
    } else {
      resultDiv.innerHTML = `<p>No comics match your preferences. Try different options!</p>`;
    }
    resultDiv.style.display = "block";
  } catch (error) {
    console.error(error);
    document.getElementById("result").innerHTML = `<p>Error loading data: ${error.message}</p>`;
  }
});

//=============================================================

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
