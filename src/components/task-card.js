import { BaseComponent } from "@core";

export class TaskCard extends BaseComponent {
    constructor(task, onDelete, onEdit) {
        super();
        this.task = task;
        this.onDelete = onDelete;
        this.onEdit = onEdit;
    }

    render() {
        this.el.style.border = "1px solid #ccc";
        this.el.style.padding = "10px";
        this.el.style.marginBottom = "10px";
        this.el.style.borderRadius = "5px";

        this.el.innerHTML = `
            <h3>${this.task.title}</h3>
            <p>${this.task.description}</p>
            <button class="editBtn">✏ Изменить</button>
            <button class="deleteBtn">🗑 Удалить</button>
        `;

        this.el
            .querySelector(".deleteBtn")
            .addEventListener("click", () => this.onDelete(this.task.id));
        this.el.querySelector(".editBtn").addEventListener("click", () => this.onEdit(this.task));

        return this.el;
    }
}
