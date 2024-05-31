const nameForm = document.querySelector(".contents-form");
const nameInput = nameForm.querySelector("input");
const mainContents = document.querySelector(".name-contents");

const NAME_KEY = "name";

const onLogin = (e) => {
  e.preventDefault();

  const userName = nameInput.value;
  localStorage.setItem(NAME_KEY, userName);
}

const greeting = (name) => {
  const nameSpan = document.createElement("span");
  mainContents.appendChild(nameSpan);
  nameSpan.textContent = `${name}님 반갑습니다!`; 
}

const saveName = localStorage.getItem(NAME_KEY);

if (saveName === null) {
  nameInput.style.display = "block";
  nameForm.addEventListener("submit", onLogin);
} else {
  nameInput.style.display = "none";
  greeting(saveName);
}