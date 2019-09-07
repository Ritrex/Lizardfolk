const strtbtn = document.getElementById("start");
const contbtn = document.getElementById("controles");
const instscroll = document.getElementById("instrucciones");
const okbtn = document.getElementById("ok");
var gameInterval;
var framecount;
const instructionbtn = document.getElementById("controles");
const floorim = new Image();
const wallim = new Image();
const pcim = new Image();
const greypcim = new Image();
const fogim = new Image();
const opencupim = new Image();
const closedcupim = new Image();
const soundsrcim = new Image();
const humanim = new Image();
const youdiedim = new Image();
const ringim = new Image();
const winim = new Image();
const loseim = new Image();
const tableim = new Image();
const doorsnd = document.getElementById("doorsnd");
const ringsnd = document.getElementById("ringsnd");
const winsnd = document.getElementById("winsnd");
const lostsnd = document.getElementById("youlostsnd");
const playsnd = document.getElementById("play");
//const playsnd
//$("#doorsnd");

$(document).ready(function() {
  cnv = document.getElementById("cnv");
  ctx = cnv.getContext("2d");
  doorsnd.volume = 0.5;
  cnv.width = window.innerWidth;
  cnv.height = window.innerHeight;
  tileXsize = cnv.width / 30;
  tileYsize = cnv.height / 37;

  //im = new Image();
  //Cada imagen que se va a usar tiene que mandarse a llamar al menos una vez aqui
  //para que no se tenga que estar cargando al momento.
  //Esto evita que solo se carguen fragmentos del labetirno o que no se imprima.

  //floorim.src = "./../../css/img/floor2.png";
  floorim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/wood1.jpg";
  //wallim.src = "./../../css/img/simplewall.png";
  wallim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/simplewall.jpg";
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
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/opencupboard.png";
  //closedcupim.src = "./../../css/img/greyclosedcupboard.png";
  closedcupim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/closedcupboard.png";
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
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/youdied.jpg";

  //tableim.src = "./../../css/img/table.png";
  tableim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/table.png";
  // winim.src =
  //   "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/table.png";

  greypcim.src =
    "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/greypcfaacingnorth.png";
  // winim.src =
  //   "https://raw.githubusercontent.com/Ritrex/Lizardfolk/master/css/img/greypcfaacingnorth.png";

  initialize();
  //instructionbtn = document.getElementById("controles");
  //strtbtn = document.getElementById("start");

  $(okbtn).on("click", () => {
    $(cnv).toggleClass("no-display");
    $(strtbtn).toggleClass("no-display");
    $(contbtn).toggleClass("no-display");
    playsnd.load();
    winsnd.load();
    lostsnd.load();
  });
  $(instructionbtn).on("click", () => {
    $(instscroll).toggleClass("no-display");
    if (instructionbtn.innerText === "OK")
      instructionbtn.innerText = "Controles";
    else instructionbtn.innerText = "OK";
    $("html, body").animate(
      {
        scrollTop: $(instructionbtn).offset().top
      },
      800
    );
  });
  $(strtbtn).on("click", () => {
    $(cnv).toggleClass("no-display");
    $("html, body").animate(
      {
        scrollTop: $("#cnv").offset().top
      },
      800
    );
    $(strtbtn).toggleClass("no-display");
    $(contbtn).toggleClass("no-display");
    playsnd.play();
    playsnd.loop = true;
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
        if (floor1.fog[element.x][element.y] < 1) drawHuman(element);
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
  //floor1 = map1;
  floor1 = new Map([], pc, [], [], fzero, fogfzero);
  //tileXsize
  //for (let e = 0; e < 3; e++) {
  humans.push(new Human(tileXsize, tileYsize, [soundsrcim], 3, 3));
  humans.push(new Human(tileXsize, tileYsize, [soundsrcim], 19, 11));

  humans.push(new Human(tileXsize, tileYsize, [soundsrcim], 14, 15));
  //}
  floor1.humans = humans;
  framecount = 0;
}
//$("");
function finish(win) {
  playsnd.pause();
  playsnd.load();

  $(okbtn).toggleClass("no-display");
  if (win) {
    ctx.drawImage(winim, 0, 0, cnv.width, cnv.height);
    winsnd.play();
  } else {
    ctx.drawImage(loseim, 0, 0, cnv.width, cnv.height);
    lostsnd.play();
  }
  clearInterval(gameInterval);
  //display widifferent images depending
  //ctx.clearRect(0, 0, cnv.width, cnv.height);
  floor1 = undefined;
}
