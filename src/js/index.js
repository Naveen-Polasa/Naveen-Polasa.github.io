const navBtn = document.querySelector(".nav-btn");
const navElements = document.querySelectorAll("li");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const up = document.querySelector(".fa-circle-up ");
const particles = document.querySelector(".particles");

// navbar
navBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-bars")) {
    bars.classList.add("hidden");
    xmark.classList.remove("hidden");
  } else {
    bars.classList.remove("hidden");
    xmark.classList.add("hidden");
  }

  navElements.forEach((li) => {
    li.classList.toggle("hidden");
  });
});

// scroll to top
window.addEventListener("scroll", () => {
  if (window.scrollY > (particles.scrollHeight / 100) * 66) {
    up.classList.remove("hidden");
    up.classList.add("visible");
  } else {
    up.classList.add("hidden");
  }
});
