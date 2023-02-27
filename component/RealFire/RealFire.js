const RealFire = document.createElement('section')
RealFire.classList.add('real_fire')
RealFire.innerHTML = `
<div class="real_fire__content content">
    <div class="real_fire__header">
        <h2>Настоящий высокий огонь у вас дома</h2>
        <p>Благодаря специальной технологии горения биоэтанола мы добились горения потрясающей красоты</p>
    </div>
    <div class="real_fire__kamin">
        <div class="real_fire__background"></div>
        <img src="../../public/realFire/kamin2.png" alt="">
    </div>
    <div class="real_fire__info">
        <div class="real_fire__item">
            <img src="../../public/realFire/icon_1.png" alt="">
            <p>Пламя яркое, высотой до 20 сантиметров</p>
        </div>
        <div class="real_fire__item">
            <img src="../../public/realFire/icon_2.png" alt="">
            <p>Работает такой камин на биотопливе </p>
        </div>
        <div class="real_fire__item">
            <img src="../../public/realFire/icon_3.png" alt="">
            <p>Он не дымит и не пахнет</p>
        </div>
    </div>
</div>

`

export default RealFire.outerHTML