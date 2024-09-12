const mainTodoElem = document.querySelector(".todo-list-elem");
const inputValue = document.getElementById("inputValue");
const btn = document.querySelector(".btn");


mainTodoElem.style.display = 'none';

const getTodoListFromLocal = () => {
    return JSON.parse(localStorage.getItem("TodoList"));   
}

const addTodoListToLocalStorage = ((localTodoList) => {
    return localStorage.setItem("TodoList", JSON.stringify(localTodoList))
})

let localTodoList = getTodoListFromLocal() || [];

const addTodoDynamicElement = (item) => {
    let elemDiv = document.createElement('div');
    elemDiv.classList.add('elemDiv');
    elemDiv.innerHTML = `<p class="listPara"><i class="fa-solid fa-clover"></i>  ${item}</p> <button class="delBtn">Delete</button>`;
    mainTodoElem.append(elemDiv);
    mainTodoElem.style.display = 'block';
    inputValue.value = " ";
}

const addTodoList = (e) => {
    e.preventDefault();
    const todoListValue = inputValue.value.trim();
    inputValue.value = " ";
    if ( todoListValue !== "" && !localTodoList.includes(todoListValue)) {
        localTodoList.push(todoListValue);
        localTodoList = [...new Set(localTodoList)];
        localStorage.setItem("TodoList", JSON.stringify(localTodoList));

        addTodoDynamicElement(todoListValue);
    }
}

const showTodoList = () => {
    localTodoList.forEach((item) => {
        addTodoDynamicElement(item);
    });
}
showTodoList();

const removeTodoElem = (e) => {
    const todoToRemove = e.target;
    let todoListContent = todoToRemove.previousElementSibling.innerText;
    let parentElem = todoToRemove.parentElement;
    localTodoList = localTodoList.filter((curTodo) => {
        return curTodo !== todoListContent.trim();
    });
    addTodoListToLocalStorage(localTodoList);
    parentElem.remove();
    if (mainTodoElem.innerHTML.trim() === "") {
        mainTodoElem.style.display = "none";
    }
}

mainTodoElem.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("delBtn")) {
        removeTodoElem(e);   
    }
});

btn.addEventListener("click", (e) => {
    addTodoList(e);
});

