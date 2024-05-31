const clock = document.querySelector(".clock");

const onClock = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours().toString().padStart(2, "0");
  const currentMinute = currentTime.getMinutes().toString().padStart(2, "0");

  clock.textContent = `${currentHour}:${currentMinute}`;
};

setInterval(onClock, 1000);
