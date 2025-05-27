import { taskModel } from "@model";
import { TaskForm } from "@components";
import { TaskList } from "@components";

export class TaskController {
    constructor(container) {
        this.container = container;
        this.editingTask = null;

        this.taskForm = new TaskForm(this.handleSubmit.bind(this), this.editingTask);
        this.taskList = new TaskList(taskModel.getTasks(), this.handleDelete.bind(this), this.handleEdit.bind(this));

        taskModel.subscribe(() => this.partialRender());
    }

    render() {
        this.container.innerHTML = `<h2 style="
                text-align: center; 
                color: #2d3748;
                margin-bottom: 30px;
                font-size: 28px;
                font-weight: 600;
            ">Таск-трекер</h2>`;

        this.container.appendChild(this.taskForm.render());
        this.container.appendChild(this.taskList.render());
    }

    partialRender() {
        this.taskList.tasks = taskModel.getTasks();
        const updatedList = this.taskList.render();
        const oldList = this.container.querySelector(".task-list");
        if (oldList) oldList.replaceWith(updatedList);
        else this.container.appendChild(updatedList);
    }

    handleSubmit(task) {
        if (this.editingTask) {
            taskModel.updateTask(task);
        } else {
            taskModel.addTask(task);
        }
        this.editingTask = null;
        this.taskForm.editingTask = null;
        this.taskForm.render();
    }

    handleDelete(taskId) {
        taskModel.removeTask(taskId);
    }

    handleEdit(task) {
        this.editingTask = task;
        this.taskForm.editingTask = task;
        this.taskForm.render();
    }
}
