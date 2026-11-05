import { Dashboard } from '../pages/dashboard.js';
import { Products } from '../pages/products.js';
import { LoginRegister } from '../pages/login-register.js';
import { AboutStockUp } from '../pages/about-stockUp.js';

export const routes = [
   {
       path: '/about-stockUp',
       label: 'StockUp',
       component: () => new AboutStockUp().render(),
       protected: false
   },
    {
        path: '/',
        label: 'Dashboard',
        component: () => new Dashboard().render(),
        protected: true
    },
    {
        path: '/produtos',
        label: 'Produtos',
        component: () => new Products().render(),
        protected: true
    },
    {
        path: '/login-register',
        label: 'Login / Cadastro',
        component: () => new LoginRegister().render(),
        protected: false
    },
];