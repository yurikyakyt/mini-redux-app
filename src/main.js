import { store } from "./store";
import { HomePage } from "./pages/home-page";
import { Router } from "./router/router";

const app = document.createElement("div");
app.id = "app";
document.body.appendChild(app);

const homePage = new HomePage();
const routes = { "/": homePage };

new Router(routes);

store.subscribe(() => {
    homePage.render();
});
