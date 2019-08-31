var cnv;
var ctx;
var tileXsize;
var tileYsize;

floor1;
function setCoveredDisplay() {
  let tw = tileXsize;
  let th = tileYsize;
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  for (var i = 0; i < floor1.maptxt.length; i++) {
    for (var j = 0; j < floor1.maptxt[0].length; j++) {
      im.src = "./../../img/unknown.png";
      ctx.drawImage(im, tw * (i + 1), th * (j + 1), tileXsize, tileYsize);
    }
  }
}
function updateDisplay() {
  let tw = tileXsize;
  let th = tileYsize;
  /**THIS SECTION IS PROVISIONAL UNTIL VISION FUNCTIONS ARE IMPLEMENTED */
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  ctx.fillStyle = "blue";
  for (var i = 0; i < floor1.maptxt.length; i++) {
    for (var j = 0; j < floor1.maptxt[0].length; j++) {
      ctx.fillText(floor1.maptxt[i][j], (1 + i) * tw, (1 + j) * th);
      // if (floor1.maptxt[i][j] === "F") {
      //   ctx.drawImage(floorim, tw + i * tw, th + j * th, tileXsize, tileYsize);
      // }
      // if (floor1.maptxt[i][j] === ".") {
      //   ctx.drawImage(wallim, (1 + i) * tw, (1 + j) * th, tileXsize, tileYsize);
      // }
    }
  }
  /**END OF PROVISIONAL SECTION */
  console.log(`PC: ${im.src}`);
  ctx.drawImage(pcim, tw * (1 + pc.y), th * (1 + pc.x), tw, th);
}
