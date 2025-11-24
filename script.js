// ====== PESQUISA DE MANGÁS ======
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar input");
  const searchButton = document.querySelector(".search-bar button");


  // script.js

// ... (Parte de PESQUISA DE MANGÁS e MODO ESCURO) ...

// ====== DADOS DE PRODUTOS PARA DEMONSTRAÇÃO ======
// Adicione um campo 'category' para cada mangá.
const allMangas = [
  // Populares / Shonen / Fantasia
  { title: "One Piece 3 em 1 Vol.33", author: "Eiichiro Oda", price: "R$ 70,40", image: "one.jpg", category: "shonen" },
  { title: "Naruto Vol. 70", author: "Masashi Kishimoto", price: "R$ 25,90", image: "naruto vol 70.jpg", category: "shonen" },
  { title: "Attack on Titan Vol.32", author: "Hajime Isayama", price: "R$ 32,90", image: "ATTACH.webp", category: "shonen" },
  { title: "Demon Slayer Vol.23", author: "Koyoharu Gotouge", price: "R$ 28,90", image: "demon 2.webp", category: "shonen" },
  { title: "Blue Lock Vol.16", author: "Muneyuki Kaneshiro", price: "R$ 37,90", image: "blue lock.jfif", category: "shonen" },
  // Exemplo de Seinen
  { title: "Kingdom Vol.3", author: "Yasuhisa Hara", price: "R$ 28,90", image: "kingdom.webp", category: "seinen" },
  { title: "Sakamoto Days Vol.9", author: "Yuto Suzuki", price: "R$ 32,92", image: "Sakamoto Days.jpg", category: "shonen" },
  // Exemplo de Isekai/Fantasia
  { title: "The Apothecary Diaries Vol.15", author: "Natsu Hyūga", price: "R$ 33,90", image: "diaries vol 15", category: "fantasia" },
  // Outros...
  { title: "Bleach vol. 1", author: "Tite Kubo", price: "R$ 24,90", oldPrice: "R$ 35,90", image: "blech.webp", category: "shonen" },
  { title: "Death Note Vol. 1", author: "Tsugumi Ohba", price: "R$ 27,90", oldPrice: "R$ 40,00", image: "death note.jpg", category: "shonen" },
  { title: "Spy × Family Vol.1", author: "Tatsuya Endo", price: "R$ 21,90", oldPrice: "R$ 31,90", category: "shonen" }
];


// ====== LÓGICA DE FILTRAGEM DE CATEGORIAS ======
const categoryList = document.getElementById("category-filter-list");
const productGrid = document.getElementById("filtered-products-grid");
const categoryTitle = document.getElementById("category-title");

// Função para renderizar os produtos
function renderProducts(mangas) {
    if (!productGrid) return; // Sai se não estiver na página Categorias

    productGrid.innerHTML = ''; // Limpa o grid
    mangas.forEach(manga => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        let priceHtml = `<span>${manga.price}</span>`;
        if (manga.oldPrice) {
            priceHtml = `<span class="old-price">${manga.oldPrice}</span> ${priceHtml}`;
        }
        
        productDiv.innerHTML = `
            <img src="${manga.image}" alt="${manga.title}">
            <h3>${manga.title}</h3>
            ${manga.author ? `<p>${manga.author}</p>` : ''}
            ${priceHtml}
        `;
        productGrid.appendChild(productDiv);
    });
}

// Função para filtrar e atualizar a interface
function filterAndDisplay(category) {
    let filteredMangas = [];
    let titleText = "";

    if (category === 'all') {
        filteredMangas = allMangas;
        titleText = "Todos os Mangás";
    } else {
        filteredMangas = allMangas.filter(manga => manga.category === category);
        // Capitaliza a primeira letra para o título
        titleText = `Mangás de ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    }
    
    // Atualiza o título e renderiza os produtos
    if (categoryTitle) categoryTitle.textContent = titleText;
    renderProducts(filteredMangas);
}

// Adiciona o listener de clique apenas na página categorias
if (categoryList) {
    categoryList.addEventListener('click', (e) => {
        const target = e.target;
        // Verifica se o clique foi em um item de lista com data-category
        if (target.tagName === 'LI' && target.dataset.category) {
            
            // 1. Atualiza a classe ativa
            document.querySelectorAll('.active-category').forEach(li => {
                li.classList.remove('active-category');
            });
            target.classList.add('active-category');

            // 2. Filtra e exibe os produtos
            filterAndDisplay(target.dataset.category);
        }
    });
    
    // Exibe todos os produtos ao carregar a página pela primeira vez
    filterAndDisplay('all');
}

 
    });

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
;
