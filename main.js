import './styles/all.scss'
import Header from "./component/Header/Header.js";
import Automatic from "./component/Automatic/Automatic.js";
import RealFire from "./component/RealFire/RealFire.js";
import Refueling from "./component/Refueling/Refueling.js";

document.querySelector('#app').innerHTML = `
${Header}
${Automatic}
${RealFire}
${Refueling}
`

