const container = document.querySelector(".container");

async function fillPostsandCreateElements() {
  const postsData = await getPosts();
  for (const post of postsData) {
    const divCardPost = document.createElement("div");
    divCardPost.classList.add("card-post");
    container.appendChild(divCardPost);

    const id = document.createElement("h1");
    const title = document.createElement("strong");
    const description = document.createElement("p");

    id.textContent = post.id;
    title.textContent = post.title;
    description.textContent = post.body;

    divCardPost.appendChild(id);
    divCardPost.appendChild(title);
    divCardPost.appendChild(description);
  }
}

fillPostsandCreateElements();
