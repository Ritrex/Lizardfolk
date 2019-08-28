var strtbtn;
var gameInterval;
$(document).ready(function() {
  cnv = document.getElementById("cnv");
  ctx = cnv.getContext("2d");

  tileXsize = cnv.width / 40;
  tileYsize = cnv.height / 40;

  im = new Image();
  pc = new Lizard(
    tileXsize,
    tileYsize,
    [(new Image().src = "./../../img/pcfaacingnorth.png")],
    1,
    1
  );
  humans = [];
  humans.push(
    new Human(
      tileXsize,
      tileYsize,
      [(new Image().src = "./../../img/soundsrc.png")],
      22,
      1
    )
  );
  floor1 = new Map(
    [],
    [],
    pc,
    humans,
    [["L", pc.x, pc.y], ["H", humans[0].x, humans[0].y]],
    []
  );
  strtbtn = document.getElementById("start");
  $(strtbtn).on("click", () => updateDisplay());
  setCoveredDisplay();
  setCoveredDisplay();
  updateDisplay();
  updateDisplay();
  setDisplay();
  console.log("READY");
});

function startGame() {
  var gameInterval = setInterval();
}

//$("");
