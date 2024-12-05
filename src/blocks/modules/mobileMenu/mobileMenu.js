const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#mobileMenu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('mobileMenu--open');

    document.addEventListener('click', (event) => {
        const target = event.target.closest('#mobileMenu') || event.target.closest('#menu-button');

        if (target === null) {
            menu.classList.remove('mobileMenu--open');
        }
    });
});
