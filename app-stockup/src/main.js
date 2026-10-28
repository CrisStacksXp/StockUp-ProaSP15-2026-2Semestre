import './style.css'
import heroImg from './assets/hero.png'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = /*html*/`
<section id="center">
  <h1 class="text-stone-150">StockUP / Gerenciamento o futuro</h1>
</section>
`

setupCounter(document.querySelector('#counter'));