const form = document.querySelector('#addTodo');
const input = document.querySelector('#newTodo');
const todoList = document.querySelector('#todoList');
const storedTodos = JSON.parse(localStorage.getItem('todolist'));
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTodo = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    newTodo.innerText = input.value;
    newTodo.appendChild(document.createTextNode(' '));
    newTodo.appendChild(deleteBtn);
    input.value = '';
    todoList.appendChild(newTodo);
    localStorage.setItem('todolist', JSON.stringify(todoList));
    
})
todoList.addEventListener('click', function(e) {
    const finishedTask = e.target;
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
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