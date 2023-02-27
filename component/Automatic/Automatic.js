const Automatic = document.createElement('section')
Automatic.classList.add('automatic')
Automatic.innerHTML = `
<div class="automatic__content content">
    <div class="automatic__block">
        <h1>Автоматические</br> биокамины</h1>
        <span class="automatic__price">от 99 000₽</span>
        <div class="automatic__info">
             <div class="automatic__item">
                <img src="../../public/automatic/icon_1.png" alt="">
                 <p>Свое производство</p>
              </div>
             <div class="automatic__item">
                <img src="../../public/automatic/icon_2.png" alt="">
                <p>Доставка в любую точку мира</p>
               </div>
        </div>
     </div>
             <div class="automatic__kamin">
                 <div class="automatic__background"></div>
                 <div class="automatic__background_two"></div>
                  <img  class="automatic__img" src="../../public/automatic/kamin_automatic.png" alt="">
             </div>
</div>

`

export default Automatic.outerHTML