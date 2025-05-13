import { BaseComponent } from "../core/base-component";
import { store } from "../store";
import { TaskForm } from "../components/task-form";
import { TaskList } from "../components/task-list";

export class HomePage extends BaseComponent {
    constructor() {
        super();
        this.editingTask = null;
        this.el.style.maxWidth = "800px";
        this.el.style.margin = "0 auto";
        this.el.style.padding = "20px";
        this.el.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    }

    render() {
        this.el.innerHTML = `
            <h2 style="
                text-align: center; 
                color: #2d3748;
                margin-bottom: 30px;
                font-size: 28px;
                font-weight: 600;
            ">Таск-трекер</h2>
        `;

        const state = store.getState();
        const tasks = (state && state.tasks) || [];

        const form = new TaskForm(this.handleSubmit.bind(this), this.editingTask);
        this.el.appendChild(form.render());

        const list = new TaskList(tasks, this.handleDelete.bind(this), this.handleEdit.bind(this));
        this.el.appendChild(list.render());

        return this.el;
    }

    handleSubmit(task) {
        if (this.editingTask) {
            store.dispatch({ type: "UPDATE_TASK", payload: task });
        } else {
            store.dispatch({ type: "ADD_TASK", payload: task });
        }
        this.editingTask = null;
        this.render();
    }

    handleDelete(taskId) {
        store.dispatch({ type: "REMOVE_TASK", payload: taskId });
        this.render();
    }

    handleEdit(task) {
        this.editingTask = task;
        this.render();
    }
}
