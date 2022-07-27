function go() {
  // canvas
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}

go();
window.addEventListener("resize", go);