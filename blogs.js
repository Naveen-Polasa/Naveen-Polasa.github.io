const query = `
query {
  user(username: "NaveenPolasa") {
     publication {
      posts(page: 0) {
        title
        slug
        coverImage
        brief
      }
    }
  }
}
`;
const fetchData = async () => {
    const data = await fetch("https://api.hashnode.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
        }),
    });
    
  const result = await data.json();
  console.log(result)
    const articles = result.data.user.publication.posts;
    console.table(articles);
}

fetchData()