/* Madusha Wijesinghe (M23W0114) */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const todoInput = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(task) {
        if (todoList.children.length >= 5) {
            alert('You can only add up to 5 items.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = task;

        const finishButton = document.createElement('button');
        finishButton.textContent = 'Finish';
        finishButton.addEventListener('click', () => {
            li.classList.toggle('finished');
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            li.remove();
        });


        /* Madusha Wijesinghe (M23W0114) */
        li.appendChild(finishButton);
        li.appendChild(removeButton);
        todoList.appendChild(li);
    }
});
