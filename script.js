// ====== PESQUISA DE MANGÁS ======
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar input");
  const searchButton = document.querySelector(".search-bar button");

  function realizarBusca() {
    const termo = searchInput.value.trim().toLowerCase();
    const produtos = document.querySelectorAll(".product");

    if (!produtos.length) return; // caso a página não tenha produtos

    // Se o campo estiver vazio, mostra tudo novamente
    if (termo === "") {
      produtos.forEach(produto => (produto.style.display = "block"));
      return;
    }

    let encontrados = 0;
    produtos.forEach(produto => {
      const titulo = produto.querySelector("h3").innerText.toLowerCase();
      const autor = produto.querySelector("p") ? produto.querySelector("p").innerText.toLowerCase() : "";
      if (titulo.includes(termo) || autor.includes(termo)) {
        produto.style.display = "block";
        encontrados++;
      } else {
        produto.style.display = "none";
      }
    });

    if (encontrados === 0) {
      alert("Nenhum mangá encontrado 😢");
    }
  }

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", realizarBusca);
    searchInput.addEventListener("keypress", e => {
      if (e.key === "Enter") realizarBusca();
    });
  }

  // ====== FORMULÁRIO DE CONTATO ======
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Mensagem enviada com sucesso! 🎉");
      contactForm.reset();
    });
  }

  // ====== MODO ESCURO ======
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const darkModeAtivo = localStorage.getItem("darkMode") === "true";

  if (darkModeAtivo) {
    document.body.classList.add("dark");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const ativo = document.body.classList.contains("dark");
      localStorage.setItem("darkMode", ativo);
      toggleBtn.textContent = ativo ? "☀️" : "🌙";
    });
  }
});
