const blogsContainer = document.querySelector(".blogs-container");

window.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const query = `query Publication  {
  publication(host: "naveenpolasa.hashnode.dev") {
    isTeam
    title 
    posts (first: 3) {
      edges{
        node {
          title,
          coverImage {
            url
          },
          url
        }
      }
    }
  }
}`;

// const query = `
// query {
//   user(username: "NaveenPolasa") {
//      publication {
//       posts(page: 0) {
//         title
//         slug
//         coverImage
//       }
//     }
//   }
// }
// `;

const fetchData = async () => {
  const data = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  let result = await data.json();
  result = result.data.publication.posts.edges.map((edge) => edge.node);
  const articles = result.map((article) => {
    return `<article class="w-96 h-[310px] p-2 border rounded-3xl border-gray-700 text-center bg-black ">
                <p class="text-center my-5 hover:text-orange-400 hover:scale-110  duration-1000">${article.title}
                </p>
                <a href="${article.url}" target="_blank">
                    <img class="m-auto w-80 h-[58%] rounded-lg hover:scale-105 duration-1000  border border-slate-800"
                        src=${article.coverImage.url}
                        alt=${article.title}></a>
                <a class="hover:scale-110 hover:text-orange-600 duration-500 ease-in-out hover:tracking-wider"
                    href="${article.url}" target="_blank">Visit Blog<i
                        class="fa-solid fa-rocket fa-2xl my-8 ml-6"></i></a>
            </article>`;
  });
  blogsContainer.innerHTML = articles.join(" ");
};
