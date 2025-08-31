// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Join butonu alerti
  const joinBtn = document.getElementById("joinBtn");
  joinBtn.addEventListener("click", () => {
    alert("Aramıza Hoşgeldin!");
  });

  // Forum işlevleri
  const forumForm = document.getElementById("forumForm");
  const postsContainer = document.getElementById("postsContainer");

  // LocalStorage'dan kayıtlı mesajları yükle
  let posts = JSON.parse(localStorage.getItem("forumPosts")) || [];

  // Sayfada göster
  function renderPosts() {
    postsContainer.innerHTML = "";
    if(posts.length === 0) {
      postsContainer.innerHTML = "<p>Henüz mesaj yok. İlk sen yaz!</p>";
      return;
    }
    posts.forEach((post, index) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");

      const title = document.createElement("h3");
      title.textContent = post.title;

      const message = document.createElement("p");
      message.textContent = post.message;

      postDiv.appendChild(title);
      postDiv.appendChild(message);

      postsContainer.appendChild(postDiv);
    });
  }

  renderPosts();

  // Form submit işlemi
  forumForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const titleInput = document.getElementById("titleInput");
    const messageInput = document.getElementById("messageInput");

    const newPost = {
      title: titleInput.value.trim(),
      message: messageInput.value.trim()
    };

    // Basit doğrulama
    if(newPost.title === "" || newPost.message === "") {
      alert("Lütfen başlık ve mesaj alanlarını doldurun.");
      return;
    }

    posts.push(newPost);
    localStorage.setItem("forumPosts", JSON.stringify(posts));

    // Formu temizle
    forumForm.reset();

    // Gönderilen mesajı hemen göster
    renderPosts();
  });
});
