import { projectsData } from "./data.js";

const projectsContainer = document.querySelector(".projects-container");
const btnsContainer = document.querySelector(".btns-container");

window.addEventListener("DOMContentLoaded", () => {
  const projectsCategory = projectsData.filter((project) => {
    if (project.category === "ReactJS") {
      return project;
    }
  });
  showProjects(projectsCategory);
  showBtns();
});

function showProjects(data) {
  const projects = data
    .map((project) => {
      return `<article class="w-96 h-[310px] p-2 border rounded-3xl border-gray-700 text-center  bg-black ">
                <p class="text-center my-5 hover:text-yellow-500 hover:scale-110  duration-1000">${project.title}</p>
                <a href=${project.live} target="_blank">
                <img class="m-auto w-80 rounded-lg hover:scale-105 duration-1000  border border-slate-800"
                    src=${project.src}
                    alt=${project.title}></a>
                <a href="${project.git}" target="_blank"><i
                        class="fa-brands fa-github fa-2xl hover:scale-110 hover:text-red-400 duration-500 ease-in-out m-8 px-3" ></i></a>
                <a href="${project.live}" target="_blank"><i
                        class="fa-solid fa-rocket fa-2xl hover:scale-110 hover:text-orange-600 duration-500 ease-in-out m-8 px-3"></i></a>
            </article>`;
    })
    .join(" ");
  projectsContainer.innerHTML = projects;
}

function showBtns() {
  let btns = new Set([
    ...projectsData.map((project) => {
      return project.category;
    }),
  ]);
  btns = [...btns];

  let finalBtns = btns
    .map((btn) => {
      return `<button class="text-xl mb-4 mt-2 mx-4 py-1 px-3 hover:bg-green-500 rounded-lg hover:text-sky-700 duration-300 ease-linear filter-btn border border-slate-800"  data-id=${btn}>${btn}</button>`;
    })
    .join(" ");

  btnsContainer.innerHTML = finalBtns;

  const filterBtns = btnsContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const projectsCategory = projectsData.filter((project) => {
        if (project.category === category) {
          return project;
        }
      });
        showProjects(projectsCategory);
    });
  });
}
