export class Navigation {

    constructor(routes) {
        this.routes = routes;
    }

    render() {
      if (!this.routes || this.routes.length === 0) 
         return '<h1>Sem dados para o roteamento</h1>';

      const links = this.routes.map(({ path, label }) => {
         return `
            <a 
               href="${path}" 
               data-link
               lass="text-white hover:text-emerald-400 transition-colors"
            >
               ${label}
            </a>
         `;
        }).join('');

        return `
            <aside>
                <nav class="flex gap-4 p-4 bg-gray-800">
                    ${links}
                </nav>
            </aside>
        `;
    }
}