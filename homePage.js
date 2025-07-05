// Footer Visibility on Scroll
window.addEventListener("scroll", toggleFooter);
window.addEventListener("load", toggleFooter);

function toggleFooter() {
  const footer = document.querySelector(".footer");
  const isScrollable = document.body.scrollHeight >= window.innerHeight;

  if (window.scrollY > 80 || !isScrollable) {
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }
}

// Anime Search Logic
const searchButton = document.querySelector('.srchBtn');
const API_URL = 'https://api.jikan.moe/v4/anime?q=';

function getAnimeData() {
  const animeName = document.getElementById('inputText').value.trim();
  if (!animeName) return alert("Please enter an anime name.");

  fetch(API_URL + animeName)
    .then(response => response.json())
    .then(data => {
      if (!data.data || data.data.length === 0) {
        alert("No anime found.");
        return;
      }

      const anime = data.data[0];
      localStorage.setItem("mainAnimeId", anime.mal_id);
      window.location.href = "animePage.html";
    })
    .catch(error => {
      console.error("Error fetching anime:", error);
      alert("Something went wrong. Try again.");
    });
}
