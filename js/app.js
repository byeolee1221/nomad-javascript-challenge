const background = ["beach.jpg", "dawn.jpg", "leaves.jpg"];

const bgRandom = background[Math.floor(Math.random() * background.length)];

const onBgChange = () => {
  document.body.style.background = `url("./img/${bgRandom}") no-repeat center/cover`;
}

document.addEventListener("DOMContentLoaded", onBgChange);