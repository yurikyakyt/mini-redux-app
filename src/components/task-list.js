import { BaseComponent } from "../core/base-component";

export class TaskList extends BaseComponent {
    constructor(tasks, onDelete, onEdit) {
        super();
        this.tasks = tasks;
        this.onDelete = onDelete;
        this.onEdit = onEdit;
    }

    render() {
        this.el.innerHTML = '';
        this.el.style.marginTop = '20px';

        if (this.tasks.length === 0) {
            const empty = document.createElement('p');
            empty.textContent = 'Нет задач';
            Object.assign(empty.style, {
                textAlign: 'center',
                color: '#718096',
                padding: '20px',
                backgroundColor: '#f7fafc',
                borderRadius: '8px',
            });
            this.el.appendChild(empty);
            return this.el;
        }

        this.tasks.forEach(task => {
            const card = document.createElement('div');
            Object.assign(card.style, {
                border: '1px solid #e2e8f0',
                padding: '16px',
                marginBottom: '12px',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s, box-shadow 0.2s',
            });
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-2px)';
                card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'none';
                card.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
            });

            const title = document.createElement('h3');
            title.textContent = task.title;
            Object.assign(title.style, {
                margin: '0 0 8px 0',
                color: '#2d3748',
                fontSize: '18px',
                fontWeight: '600',
            });

            const desc = document.createElement('p');
            desc.textContent = task.description;
            Object.assign(desc.style, {
                margin: '0 0 12px 0',
                color: '#4a5568',
                fontSize: '14px',
                lineHeight: '1.5',
            });

            const buttonsContainer = document.createElement('div');
            Object.assign(buttonsContainer.style, {
                display: 'flex',
                gap: '8px',
            });

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Редактировать';
            Object.assign(editBtn.style, {
                padding: '8px 12px',
                backgroundColor: '#ed8936',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
            });
            editBtn.addEventListener('mouseenter', () => {
                editBtn.style.backgroundColor = '#dd6b20';
            });
            editBtn.addEventListener('mouseleave', () => {
                editBtn.style.backgroundColor = '#ed8936';
            });
            editBtn.onclick = () => this.onEdit(task);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Удалить';
            Object.assign(deleteBtn.style, {
                padding: '8px 12px',
                backgroundColor: '#f56565',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
            });
            deleteBtn.addEventListener('mouseenter', () => {
                deleteBtn.style.backgroundColor = '#e53e3e';
            });
            deleteBtn.addEventListener('mouseleave', () => {
                deleteBtn.style.backgroundColor = '#f56565';
            });
            deleteBtn.onclick = () => this.onDelete(task.id);

            buttonsContainer.appendChild(editBtn);
            buttonsContainer.appendChild(deleteBtn);

            card.appendChild(title);
            card.appendChild(desc);
            card.appendChild(buttonsContainer);

            this.el.appendChild(card);
        });

        return this.el;
    }
}
