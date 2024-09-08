const mainTodoElem = document.querySelector(".todo-list-elem");
const inputValue = document.getElementById("inputValue");
const btn = document.querySelector(".btn");


mainTodoElem.style.display = 'none';


btn.addEventListener("click", () => {
    let listPara = document.createElement('p');
    listPara.setAttribute('class', 'listPara');
    listPara.innerHTML = `<i class="fa-solid fa-clover"></i>  ${inputValue.value}`;
    mainTodoElem.style.display = 'block';
    mainTodoElem.append(listPara);
    inputValue.value = " ";
});

mainTodoElem.addEventListener('click', (e) => {
    let currentElem = e.target;
    currentElem.remove();
});
