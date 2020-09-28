document.addEventListener("DOMContetLoaded", () => {
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");
  let doodlerLeftSapce = 50;
  let doodlerBottomSpace = 150;

  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add("doodler");
    doodler.style.left = doodlerLeftSapce + "px";
    doodler.style.bottom = doodlerBottomSpace + "px";
  }

  function start() {
    if (!isGameOver) {
      createDoodler();
    }
  }

  start();
});
