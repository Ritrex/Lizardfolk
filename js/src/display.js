var cnv;
var ctx;
var tileXsize;
var tileYsize;
var floor1;
function setCoveredDisplay() {
  let tw = tileXsize;
  let th = tileYsize;
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  for (var i = 0; i < floor1.maptxt.length; i++) {
    for (var j = 0; j < floor1.maptxt[0].length; j++) {
      im.src = "./../../img/unknown.png";
      ctx.drawImage(im, tw * (j + 1), th * (i + 1), tileXsize, tileYsize);
    }
  }
}

function updateDisplay() {
  let tw = tileXsize;
  let th = tileYsize;
  /**THIS SECTION IS PROVISIONAL UNTIL VISION FUNCTIONS ARE IMPLEMENTED */
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  ctx.fillStyle = "blue";
  setCoveredDisplay();
  pc.vision;
  for (var i = 0; i < floor1.layout.length; i++) {
    for (var j = 0; j < floor1.layout[i].length; j++) {
      // ctx.fillText(floor1.maptxt[i][j],(1 + i) * tw,(1 + j) * th)
      if (floor1.fog[i][j] === 1) {
        ctx.drawImage(fogim, (1 + j) * tw, (1 + i) * th, tileXsize, tileYsize);
        continue;
      }
      if (floor1.maptxt[i][j] === "F") {
        ctx.drawImage(
          floorim,
          (1 + j) * tw,
          (1 + i) * th,
          tileXsize,
          tileYsize
        );
      }
      if (floor1.maptxt[i][j] === ".") {
        ctx.drawImage(wallim, (1 + j) * tw, (1 + i) * th, tileXsize, tileYsize);
      }
      if (floor1.maptxt[i][j] === "C") {
        ctx.drawImage(
          closedcupim,
          (1 + j) * tw,
          (1 + i) * th,
          tileXsize,
          tileYsize
        );
      }

      drawPC();
    }
  }
}
/**END OF PROVISIONAL SECTION */
//console.log(`PC: ${im.src}`);

function drawPC() {
  ctx.drawImage(
    pcim,
    tileXsize * (1 + pc.y),
    tileYsize * (1 + pc.x),
    tileXsize,
    tileYsize
  );
}
function drawHuman(human) {
  ctx.drawImage(
    soundsrcim,
    tileXsize * (1 + human.y),
    tileYsize * (1 + human.x),
    tileXsize,
    tileYsize
  );
}
