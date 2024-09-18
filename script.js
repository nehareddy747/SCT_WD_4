document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const categorySelect = document.getElementById('category-select');
    const addTaskBtn = document.getElementById('add-task-btn');

    function createTodoItem(text) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        const span = document.createElement('span');
        span.textContent = text;
        span.addEventListener('click', () => {
            span.parentElement.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        return li;
    }

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const selectedCategory = categorySelect.value;
        const categoryList = document.getElementById(`${selectedCategory}-list`);

        if (taskText) {
            const todoItem = createTodoItem(taskText);
            categoryList.appendChild(todoItem);
            taskInput.value = '';
        }
    });
});
