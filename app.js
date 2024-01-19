const form = document.querySelector('#addTodo');
const input = document.querySelector('#newTodo');
const todoList = document.querySelector('#todoList');
const storedTodos = JSON.parse(localStorage.getItem('todoList')) || [];
for (let i = 0; i < storedTodos.length; i++) {
    const newTodo = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    newTodo.innerText = storedTodos[i];
    newTodo.appendChild(document.createTextNode(' '));
    newTodo.appendChild(deleteBtn);
    todoList.appendChild(newTodo);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTodo = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    newTodo.innerText = input.value;
    newTodo.appendChild(document.createTextNode(' '));
    newTodo.appendChild(deleteBtn);
    storedTodos.push(input.value);
    todoList.appendChild(newTodo);
    localStorage.setItem('todoList', JSON.stringify(storedTodos));
    input.value = '';
})
todoList.addEventListener('click', function(e) {
    const finishedTask = e.target;
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        localStorage.setItem('todoList', JSON.stringify(storedTodos.filter(item => item !== e.target.parentElement.firstChild.data)));
    }
    else if (!finishedTask.isCompleted) {
        finishedTask.style.textDecoration = 'line-through';
        finishedTask.isCompleted = true;
    }
    else {
        finishedTask.style.textDecoration = 'none';
        finishedTask.isCompleted = false;
    }
})