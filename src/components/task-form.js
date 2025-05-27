import { BaseComponent } from "@core";

export class TaskForm extends BaseComponent {
    constructor(onSubmit, editingTask = null) {
        super();
        this.onSubmit = onSubmit;
        this.editingTask = editingTask;
        this.el.style.marginBottom = '30px';
        this.el.style.backgroundColor = '#ffffff';
        this.el.style.padding = '20px';
        this.el.style.borderRadius = '8px';
        this.el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }

    render() {
        this.el.innerHTML = '';

        const titleInput = document.createElement('input');
        titleInput.placeholder = 'Название задачи';
        titleInput.value = this.editingTask?.title || '';
        Object.assign(titleInput.style, {
            display: 'block',
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border 0.2s',
        });
        titleInput.addEventListener('focus', () => {
            titleInput.style.borderColor = '#667eea';
        });
        titleInput.addEventListener('blur', () => {
            titleInput.style.borderColor = '#e2e8f0';
        });

        const descInput = document.createElement('textarea');
        descInput.placeholder = 'Описание задачи';
        descInput.value = this.editingTask?.description || '';
        Object.assign(descInput.style, {
            display: 'block',
            width: '100%',
            minHeight: '100px',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            fontSize: '16px',
            resize: 'vertical',
            outline: 'none',
            transition: 'border 0.2s',
        });
        descInput.addEventListener('focus', () => {
            descInput.style.borderColor = '#667eea';
        });
        descInput.addEventListener('blur', () => {
            descInput.style.borderColor = '#e2e8f0';
        });

        const button = document.createElement('button');
        button.textContent = this.editingTask ? 'Обновить задачу' : 'Добавить задачу';
        Object.assign(button.style, {
            display: 'block',
            width: '100%',
            padding: '12px',
            backgroundColor: this.editingTask ? '#4c51bf' : '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
        });
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = this.editingTask ? '#434190' : '#5a67d8';
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = this.editingTask ? '#4c51bf' : '#667eea';
        });

        button.addEventListener('click', () => {
            const task = {
                id: this.editingTask?.id || Date.now(),
                title: titleInput.value.trim(),
                description: descInput.value.trim(),
            };
            this.onSubmit(task);
        });

        this.el.appendChild(titleInput);
        this.el.appendChild(descInput);
        this.el.appendChild(button);

        return this.el;
    }
}
