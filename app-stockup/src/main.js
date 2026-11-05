import './style.css';

import { Navigation } from './components/navigation.js';

import { Router } from './util/router.js';
import { routes } from './util/router-init.js';

// Inicializa a estrutura principal
document.querySelector('#app').innerHTML = `
    <section id="center">

        ${new Navigation(routes).render()}

        <main id="content"></main>

    </section>
`;

// Inicializa o roteador
const router = new Router(routes);

router.init();