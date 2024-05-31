const toDoContents = document.querySelector(".toDo-contents");
const toDoForm = document.querySelector(".toDo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDo-list");

const TODO_KEY = "toDos";
let toDos = [];

const savedToDos = () => {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

const deleteTodo = (e) => {
  const listItem = e.target.parentNode;

  listItem.remove()
  toDos = toDos.filter((item) => item.createdAt !== parseInt(listItem.createdAt));
  savedToDos();
}

const createToDos = (toDo) => {
  const listItem = document.createElement("li");
  listItem.createdAt = toDo.createdAt;
  const itemContents = document.createElement("span");
  itemContents.innerText = toDo;

  const itemBtn = document.createElement("button");
  itemBtn.textContent = "삭제하기";
  itemBtn.addEventListener("click", deleteTodo);

  toDoList.appendChild(listItem);
  listItem.appendChild(itemContents);
  listItem.appendChild(itemBtn);
}

const onToDo = (e) => {
  e.preventDefault();

  const toDo = toDoInput.value;
  const toDoObj = {
    contents: toDo, createdAt: Date.now()
  };
  
  toDos.push(toDoObj);
  createToDos(toDo);
  savedToDos();

  toDoInput.value = "";
}

toDoForm.addEventListener("submit", onToDo);

const saveToDo = localStorage.getItem(TODO_KEY);

if (saveToDo !== null) {
  const parsedToDos = JSON.parse(saveToDo);
  toDos = parsedToDos;
  parsedToDos.forEach(createToDos);
}