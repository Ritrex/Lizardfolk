var strtbtn;
var gameInterval;
var framecount;
const floorim = new Image();
const wallim = new Image();
const pcim = new Image();
const fogim = new Image();
const opencupim = new Image();
const closedcupim = new Image();
const soundsrcim = new Image();
$(document).ready(function() {
  cnv = document.getElementById("cnv");
  ctx = cnv.getContext("2d");

  tileXsize = cnv.width / 10;
  tileYsize = cnv.height / 10;

  im = new Image();
  //Cada imagen que se va a usar tiene que mandarse a llamar al menos una vez aqui
  //para que no se tenga que estar cargando al momento.
  //Esto evita que solo se carguen fragmentos del labetirno o que no se imprima.
  floorim.src = "./../../css/img/floor2.png";
  wallim.src = "./../../css/img/simplewall.png";
  pcim.src = "./../../css/img/pcfaacingnorth.png";
  fogim.src = "./../../css/img/unknown.png";
  soundsrcim.src = "./../../css/img/soundsrc.png";
  opencupim.src = "./../../css/img/greyopencupboard.png";
  closedcupim.src = "./../../css/img/greyclosedcupboard.png";
  pc = new Lizard(tileXsize, tileYsize, [pcim], 1, 1);
  humans = [];
  humans.push(new Human(tileXsize, tileYsize, [soundsrcim], 22, 1));
  floor1 = new Map([], [], pc, humans, [
    ["L", pc.x, pc.y],
    ["H", humans[0].x, humans[0].y]
  ]);
  strtbtn = document.getElementById("start");
  $(strtbtn).on(
    "click",
    () =>
      (gameInterval = setInterval(function() {
        updateDisplay();
        drawPC();

        if (framecount > 10) {
          //move humans
        }
        floor1.humans.forEach(element => {
          drawHuman(element);
        });
        console.log(`X:${pc.x},Y:${pc.y}`);
        framecount = ++framecount % 60;
      }, 1000 / 60))
  );
  //setCoveredDisplay();
  //updateDisplay();
  window.addEventListener("keypress", function() {
    let key = event.key;
    console.log(key);

    this.console.log(key);
    if (framecount > 15) {
      //arriba
      if (["w", "W"].indexOf(key) > -1) pc.move(floor1, "N");
      //derecha
      if (["d", "D"].indexOf(key) > -1) pc.move(floor1, "E");
      //abajo
      if (["s", "S"].indexOf(key) > -1) pc.move(floor1, "S");
      //izquierda
      if (["a", "A"].indexOf(key) > -1) pc.move(floor1, "W");
    }
  });
  framecount = 0;

  console.log("READY");
});

//$("");
