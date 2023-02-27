const Header = document.createElement('header')
Header.innerHTML = `
<div class="header__content content">
        <div class="header__logo">
        <span class="header__name"> Elite Fire </span>
        <p class="header__sub_name"> Автоматические биокамины</p>
        </div>
        <div class="header__navigation">
       <div class="header__anchor">
        <a href="">Продукция</a>
        <a href="">Конструктор</a>
        <a href="">Опыт</a>
        <a href="">Контакты</a>
        </div>
        <div class="header__phone">
        <img src="../../public/header/phone.png" alt="">
        </div>
        </div>
    </div>`

export default Header.outerHTML