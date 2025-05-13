export class Router {
    constructor(routes) {
        this.routes = routes;
        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => this.route());
        this.route();
    }

    route() {
        const path = window.location.hash.slice(1) || '/';
        const page = this.routes[path];

        console.log('Routing to:', path);
        console.log('Page component:', page);

        if (page) {
            const app = document.getElementById('app');
            app.innerHTML = '';
            const element = page.render();
            app.appendChild(element);
        }
    }
}
