let visibleFreeChapters = 5; // Menampilkan 5 chapter pertama untuk free
const freeChapterItems = document.querySelectorAll("#chapter-list .chapter-item"); // Semua elemen chapter untuk free

const freeLoadMoreButton = document.querySelector("#free-load-more"); // Tombol Load More untuk free
bole;

// Function to toggle the display of free chapters
function toggleChapters() {
  const chapterList = document.getElementById("chapter-list");

  if (chapterList.style.display === "none" || chapterList.style.display === "") {
    chapterList.style.display = "block"; // Show the chapters

    // Reset to show only the first 5 chapters when opening
    visibleFreeChapters = 5;

    // Display the first 5 chapters
    freeChapterItems.forEach((item, index) => {
      if (index < visibleFreeChapters) {
        item.style.display = "block"; // Show chapter
      } else {
        item.style.display = "none"; // Hide chapter
      }
    });

    // Show the "Load More" button if not already hidden
    if (visibleFreeChapters < freeChapterItems.length) {
      freeLoadMoreButton.style.display = "block";
    }
  } else {
    chapterList.style.display = "none";
    freeLoadMoreButton.style.display = "none";
    // Hide the chapters
  }
}

// Function for "Load More" button for free chapters
function loadMoreChapters() {
  visibleFreeChapters += 5; // Add 5 more chapters

  // Display the next set of chapters
  freeChapterItems.forEach((item, index) => {
    if (index < visibleFreeChapters) {
      item.style.display = "block"; // Show chapter
    } else {
      item.style.display = "none"; // Hide chapter
    }
  });

  // If all chapters are shown, hide the "Load More" button
  if (visibleFreeChapters >= freeChapterItems.length) {
    freeLoadMoreButton.style.display = "none";
  }
}

//==============================================================

