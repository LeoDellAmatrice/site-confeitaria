document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelector('.menu-items');
    const items = Array.from(menuItems.children);
    const itemWidth = items[0].offsetWidth; // Largura do item
    const totalItems = items.length;
    let currentIndex = 0;

    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');

    function updateButtons() {
        // Verifica se deve desativar o botão "prev" ou "next"
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= totalItems - 1;
    }

    function moveSlide(direction) {
        if (direction === 1 && currentIndex < totalItems - 1) {
            currentIndex++;
        } else if (direction === -1 && currentIndex > 0) {
            currentIndex--;
        }

        const offset = -currentIndex * itemWidth + 20; // Adiciona 20px de espaçamento extra à esquerda
        menuItems.style.transform = `translateX(${offset}px)`;

        updateButtons();
    }

    // Inicializa o estado dos botões
    updateButtons();

    // Adiciona eventos aos botões
    prevButton.addEventListener('click', () => moveSlide(-1));
    nextButton.addEventListener('click', () => moveSlide(1));

    // Adiciona eventos de rolagem com o teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            moveSlide(-1);
        } else if (e.key === 'ArrowRight') {
            moveSlide(1);
        }
    });
});
