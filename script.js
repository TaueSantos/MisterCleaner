// Espera todo o conteúdo HTML da página ser carregado ANTES de executar QUALQUER código
document.addEventListener("DOMContentLoaded", function() {

    // =========================================
    // 1. CÓDIGO DO SCROLL SUAVE
    // =========================================
    try {
        const linksDoMenu = document.querySelectorAll('header nav a[href^="#"]');
        linksDoMenu.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    } catch (e) {
        console.error("Erro no script de Scroll Suave:", e);
    }


    // =========================================
    // 2. CÓDIGO DO SLICK CAROUSEL
    // =========================================
    try {
        $('.galeria-carousel').slick({
            dots: true,       // Mostra os pontinhos de navegação embaixo
            arrows: true,     // Mostra as setas < >
            infinite: true,   // O carrossel é infinito
            speed: 500,       // Velocidade da transição
            slidesToShow: 3,  // Mostra 3 slides no desktop
            centerMode: true, // Habilita o "Center Mode"
            
            // Configurações de responsividade
            responsive: [
                {
                    breakpoint: 1024, // Em telas médias
                    settings: {
                        slidesToShow: 2,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 600, // Em celulares
                    settings: {
                        slidesToShow: 1, // Mostra apenas 1 slide
                        centerMode: false
                    }
                }
            ]
        });
    } catch (e) {
        console.error("Erro ao inicializar o Slick Carousel (Verifique se jQuery e Slick.js estão carregados ANTES deste script):", e);
    }

}); // <-- ESTA É A ÚNICA CHAVE DE FECHAMENTO PARA O DOMContentLoaded