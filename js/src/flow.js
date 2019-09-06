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
const humanim = new Image();
const youdiedim = new Image();
const ringim = new Image();
const winim = new Image();
const loseim = new Image();
$(document).ready(function() {
  cnv = document.getElementById("cnv");
  ctx = cnv.getContext("2d");

  cnv.width = (window.innerWidth / 5) * 4;
  tileXsize = cnv.width / 40;
  tileYsize = cnv.height / 40;

  im = new Image();
  //Cada imagen que se va a usar tiene que mandarse a llamar al menos una vez aqui
  //para que no se tenga que estar cargando al momento.
  //Esto evita que solo se carguen fragmentos del labetirno o que no se imprima.

  //floorim.src = "./../../css/img/floor2.png";
  floorim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/floor.png";
  //wallim.src = "./../../css/img/simplewall.png";
  wallim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/simplewall.png";
  //pcim.src = "./../../css/img/pcfaacingnorth.png";
  pcim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/pcfaacingnorth.png";
  //fogim.src = "./../../css/img/unknown.png";
  fogim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/unknown.png";
  //soundsrcim.src = "./../../css/img/soundsrc.png";
  soundsrcim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/soundsrc.png";
  //opencupim.src = "./../../css/img/greyopencupboard.png";
  opencupim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/greyopencupboard.png";
  //closedcupim.src = "./../../css/img/greyclosedcupboard.png";
  closedcupim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/greyclosedcupboard.png";
  //humanim.src = "./../../css/img/human.png";
  humanim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/human.png";
  youdiedim.src = "./../../css/img/youdied.jpg";
  //youdiedim.src =
  //  "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/youdied.jpg";
  //ringim.src = "./../../css/img/ring.png";
  ringim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/ring.png";
  //winim.src = "./../../css/img/win.png";
  //wingim.src =
  //  "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/youdied.jpg";
  winim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/win1.jpg";
  loseim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/lose.jpg";

  initialize();

  strtbtn = document.getElementById("start");
  $(strtbtn).on("click", () => {
    $(cnv).toggleClass("no-display");
    gameInterval = setInterval(function() {
      updateDisplay();
      drawPC();

      if (framecount % 15 == 0) {
        floor1.humans.forEach(element => {
          element.move();
          //drawHuman(element);
          if (element.x != pc.x || element.y != pc.y) {
            element.move();
            //drawHuman(element);
          }
          if (element.x === pc.x && element.y == pc.y) {
            finish(false);

            // pc=undefined;
            // humans=undefined;
          }
        });
      }
      floor1.humans.forEach(element => {
        drawHuman(element);
      });

      console.log(`X:${pc.x},Y:${pc.y}`);
      framecount = ++framecount % 60;
    }, 1000 / 10);
    initialize();
  });
  //setCoveredDisplay();
  //updateDisplay();
  window.addEventListener("keypress", function() {
    let key = event.key;
    console.log(key);

    this.console.log(key);
    //arriba
    if (["w", "W"].indexOf(key) > -1) pc.move(floor1, "N");
    //derecha
    if (["d", "D"].indexOf(key) > -1) pc.move(floor1, "E");
    //abajo
    if (["s", "S"].indexOf(key) > -1) pc.move(floor1, "S");
    //izquierda
    if (["a", "A"].indexOf(key) > -1) pc.move(floor1, "W");
  });

  console.log("READY");
});

function initialize() {
  pc = new Lizard(tileXsize, tileYsize, [pcim], 1, 1);
  humans = [];
  console.log(pc.x);

  floor1 = new Map([], pc, [], [], fzero, fogfzero);
  //tileXsize
  //for (let e = 0; e < 3; e++) {
  humans.push(new Human(tileXsize, tileYsize, [soundsrcim], 3, 3));
  //}
  floor1.humans = humans;
  framecount = 0;
}
//$("");
function finish(win) {
  if (win) ctx.drawImage(winim, 0, 0, cnv.width, cnv.height);
  else ctx.drawImage(loseim, 0, 0, cnv.width, cnv.height);
  clearInterval(gameInterval);
  //display widifferent images depending
  //ctx.clearRect(0, 0, cnv.width, cnv.height);
  floor1 = undefined;
}
