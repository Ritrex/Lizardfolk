var cnv;
var ctx;
var tileXsize;
var tileYsize;
var im;

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
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  for (var i = 0; i < floor1.maptxt.length; i++) {
    for (var j = 0; j < floor1.maptxt[0].length; j++) {
      if (floor1.maptxt[i][j] === "F") {
        im.src = "./../../img/floor.png";
        ctx.drawImage(im, tw + i * tw, th + j * th, tileXsize, tileYsize);
      }
      if (floor1.maptxt[i][j] === ".") {
        im.src = "./../../img/simplewall.png";
        ctx.drawImage(im, tw + i * tw, th + j * th, tileXsize, tileYsize);
      }
    }
  }
}
