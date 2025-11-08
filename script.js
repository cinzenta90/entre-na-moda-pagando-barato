// Função de busca simples
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar input");
  const searchButton = document.querySelector(".search-bar button");

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", () => {
      const termo = searchInput.value.toLowerCase();
      const produtos = document.querySelectorAll(".product");

      if (!termo.trim()) {
        alert("Digite algo para buscar!");
        return;
      }

      let encontrados = 0;
      produtos.forEach(produto => {
        const nome = produto.querySelector("h3").innerText.toLowerCase();
        if (nome.includes(termo)) {
          produto.style.display = "block";
          encontrados++;
        } else {
          produto.style.display = "none";
        }
      });

      if (encontrados === 0) {
        alert("Nenhum mangá encontrado 😢");
      }
    });
  }

  // Função para enviar formulário de contato
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensagem enviada com sucesso! 🎉");
      contactForm.reset();
    });
  }
});

// ====== MODO ESCURO ======
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("dark-mode-toggle");

  // Carrega preferência do usuário
  const darkModeAtivo = localStorage.getItem("darkMode") === "true";
  if (darkModeAtivo) {
    document.body.classList.add("dark");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  }

  // Alterna modo
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const ativo = document.body.classList.contains("dark");
      localStorage.setItem("darkMode", ativo);
      toggleBtn.textContent = ativo ? "☀️" : "🌙";
    });
  }
});
