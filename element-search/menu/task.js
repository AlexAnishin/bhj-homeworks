'use strict';

class MenuComponent {
    // Инициализируем все обработчики событий для указанного селектора
    constructor(selector) {
        const self = this;

        self.menuElement = document.querySelector(selector);
        self.subMenuElements = self.menuElement.querySelectorAll('.menu_sub');

        self.menuElement.querySelectorAll('.menu__link').forEach((link) => {
            link.addEventListener('click', self.handleMenuLinkClick);
        });

        document.body.addEventListener('click', (e) => {
            if (!e.target.closest('.menu')) {
                self.closeSubmenu();
            }
        });
    }

    // Обработчик события нажатия кнопки мыши на элемент меню
    handleMenuLinkClick = (event) => {
        const subMenuElement = event.target.closest('.menu__item').querySelector('.menu_sub');
        if (subMenuElement) {
            event.preventDefault();
            this.closeSubmenu();
            subMenuElement.classList.toggle('menu_active');
        }
    };

    // Закрывает все выпадающие подменю для данного меню
    closeSubmenu() {
        this.subMenuElements.forEach((subMenu) => {
            subMenu.classList.contains('menu_active') && subMenu.classList.remove('menu_active');
        });
    }
}

// только когда вся страница загрузилась добавляем обработчики событий
window.onload = function ready(handler) {
    new MenuComponent('.menu_main');
    new MenuComponent('.menu_secondary');
};