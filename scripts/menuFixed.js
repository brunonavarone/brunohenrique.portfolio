const nav = document.querySelector("nav");

// Obtém a posição vertical do header em relação ao topo da página
const headerOffsetTop = nav.offsetTop;

function handleScroll() {
  // Obtém a posição vertical atual do scroll
  const scrollY = window.scrollY;

  // Se o scroll ultrapassou a posição vertical do header, adiciona a classe "fixed"
  if (scrollY > headerOffsetTop) {
    nav.classList.add("fixed");
  } else {
    // Caso contrário, remove a classe "fixed"
    nav.classList.remove("fixed");
  }
}

// Adiciona o evento de scroll à janela, chamando a função handleScroll quando ocorrer
window.addEventListener("scroll", handleScroll);
