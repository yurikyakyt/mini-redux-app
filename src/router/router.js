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

        if (page) {
            const app = document.getElementById('app');
            app.innerHTML = '';
            app.appendChild(page.render());
        }
    }
}