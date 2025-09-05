// script_forum.js

document.addEventListener("DOMContentLoaded", () => {
  const forumForm = document.getElementById("forumForm");
  const titleInput = document.getElementById("titleInput");
  const messageInput = document.getElementById("messageInput");
  const postsContainer = document.getElementById("postsContainer");

  forumForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const message = messageInput.value.trim();

    if (title && message) {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");

      const postTitle = document.createElement("h3");
      postTitle.textContent = title;

      const postMessage = document.createElement("p");
      postMessage.textContent = message;

      postDiv.appendChild(postTitle);
      postDiv.appendChild(postMessage);
      postsContainer.prepend(postDiv);

      // Alanları temizle
      titleInput.value = "";
      messageInput.value = "";
    }
  });
});
