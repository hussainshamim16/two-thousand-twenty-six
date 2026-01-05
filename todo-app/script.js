
let inputTaxt = document.querySelector("#targetInput");
let todocontainer = document.querySelector("#todocontainer");

let allTodo = [];

function renderTodos() {
    todocontainer.innerHTML = "";
    allTodo.forEach((todo, i) => {
        todocontainer.innerHTML += `
                    <div class="todo-item">
                        <div class="todo-content">
                            <input type="checkbox" class="todo-checkbox" ${todo.completed ? "checked" : ""} onchange="toggleComplete(${i})"/>
                            <span class="todo-text ${todo.completed ? "completed" : ""}">${todo.text}</span>
                        </div>
                        <div class="todo-actions">
                            <button class="btn-edit" onclick="todoedit(${i})">
                                <i class="ri-pencil-line"></i>
                            </button>
                            <button class="btn-delete" onclick="tododelete(${i})">
                                <i class="ri-delete-bin-line"></i>
                            </button>
                        </div>
                    </div>
                `;
    });
}

function addTodo() {
    if (inputTaxt.value.trim() === "") {
        alert("Todo Not Found");
        return;
    }
    allTodo.push({ text: inputTaxt.value, completed: false });
    inputTaxt.value = "";
    renderTodos();
}

function todoedit(index) {
    let newText = prompt("Edit your Todo:", allTodo[index].text);
    if (newText !== null && newText.trim() !== "") {
        allTodo[index].text = newText;
        renderTodos();
    }
}

function tododelete(index) {
    allTodo.splice(index, 1);
    renderTodos();
}

function toggleComplete(index) {
    allTodo[index].completed = !allTodo[index].completed;
    renderTodos();
}