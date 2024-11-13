
var video = document.getElementById('video');

// Quando a página carregar, o vídeo começa automaticamente
window.onload = function() {
  video.muted = false;  // Desmuta o vídeo
  video.play();         // Inicia a reprodução do vídeo
  video.loop = true;    // Faz o vídeo repetir em loop
};

// Também desmuta o vídeo quando o evento 'canplay' ocorre
video.oncanplay = function () {
  setTimeout(function () {
    video.muted = false;  // Garante que o vídeo não fique mudo
  }, 1000);
};

const toggletheme = document.getElementById("toggle-theme")

const rootHTML= document.documentElement
function changeTheme() {
    const currentTheme = rootHTML.getAttribute("data-theme");

    if(currentTheme == "dark")
        rootHTML.setAttribute("data-theme" ,"light")
    else{
        rootHTML.setAttribute("data-theme" ,"dark")
    }


    toggletheme.classList.toggle("bi-brightness-high")
    toggletheme.classList.toggle("bi-moon-stars")
}

toggletheme.addEventListener("click", changeTheme);
const accordionHeaders = document.querySelectorAll('.accordion-header');
const menuLinks = document.querySelectorAll('.menu-link');

// Lógica para o acordeão (fechar e abrir itens)
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");
    
    // Fecha todos os itens do acordeão
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
    });

    // Abre o item clicado, caso não estivesse aberto
    if (!accordionActive) {
      accordionItem.classList.add("active");
    }
  });
});

// Lógica para o menu (ativar um item de menu e desativar os outros)
menuLinks.forEach(item => {
  item.addEventListener("click", (event) => {
    event.preventDefault();  // Impede o comportamento padrão de navegação dos links
    
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
