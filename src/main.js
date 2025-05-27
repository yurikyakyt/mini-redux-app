import { Router } from "@router";
import { TaskController } from "@controller";

const app = document.createElement("div");
app.id = "app";
document.body.appendChild(app);

const controller = new TaskController(app);
const routes = {
    "/": controller,
};

new Router(routes);
