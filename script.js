let lastScrollTop = 0;
const navbar = document.querySelector('.minha-nav');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // LÓGICA 1: ESCONDER / MOSTRAR
    // Se rolar mais de 100px para baixo, esconde. Se subir, mostra.
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.top = "-100px"; // Esconde (valor maior para garantir que suma)
    } else {
        navbar.style.top = "0"; // Mostra
    }
    
    // Atualiza a posição do último scroll
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    // LÓGICA 2: MUDAR TRANSPARÊNCIA (Background)
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, false);