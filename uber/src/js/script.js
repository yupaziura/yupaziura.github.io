window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.container'),
    menuItem = document.querySelectorAll('.c_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('container_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('container_active');
        })
    })
})