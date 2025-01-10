function moveMario() {
  const mario = document.getElementById("mario");
  let position = 0;
  setInterval(() => {
    if (screen.width == position) {
      position = 0;
    }
    position += 3;
    mario.style.marginLeft = `${position}px`;
  }, 10);
}

moveMario();
