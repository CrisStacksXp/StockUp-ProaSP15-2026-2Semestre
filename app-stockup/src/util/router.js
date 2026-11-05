export class Router {

    constructor(routes) {
        this.routes = routes;

        this.app = document.querySelector('#content');
    }

    navigate(path) {
        history.pushState({}, '', path);

        this.render();
    }

    render() {

        const currentPath = window.location.pathname;

        const route = this.routes.find(
            ({ path }) => path === currentPath
        );

        if (!route) {
            this.app.innerHTML = `
                <h1>Página não encontrada!</h1>
            `;
            return;
        }

        this.app.innerHTML = route.component();
    }

    init() {

        document.addEventListener('click', (event) => {

            const link = event.target.closest('[data-link]');

            if (!link) return;

            event.preventDefault();

            const path = link.getAttribute('href');

            this.navigate(path);
        });

        window.addEventListener('popstate', () => {
            this.render();
        });

        this.render();
    }

}