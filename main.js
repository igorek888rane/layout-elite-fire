import './styles/all.scss'
import Header from "./component/Header/Header.js";
import Automatic from "./component/Automatic/Automatic.js";
import RealFire from "./component/RealFire/RealFire.js";

document.querySelector('#app').innerHTML = `
${Header}
${Automatic}
${RealFire}
`

