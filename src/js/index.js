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
window.addEventListener('scroll', ()=>  {
//    particles.classList.add = `h-[${window.scrollY}px]`
//     console.log(`h-[${window.scrollY}px]`);
    if(window.scrollY > 2000) {
        up.classList.remove("hidden");
        up.classList.add("visible");
    }
    else{
        up.classList.add('hidden')
    }
})