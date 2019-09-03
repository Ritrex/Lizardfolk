const floorTiles = ["F", "w"];
const metaTiles = ["G", "S"];
const wallTiles = ["."];
const furnitureTiles = ["T", "C"];
class Character {
  constructor(width = 0, height = 0, imgs = [], x = 0, y = 0) {
    this.width = width;
    this.height = height;
    this.imgs = imgs;
    //Para orientarse, refierase al sector 1 del plano cartesiano
    this.x = x;
    this.y = y;
  }
  getPossibleMoves(map, x, y, exclusionlist = []) {
    //x es movimiento vertical
    //y es movimiento horizontal

    let moves = [];
    if (x > 0) {
      let northofChar = map.maptxt[x - 1][y];
      console.log(`Considered  ${exclusionlist.indexOf(northofChar) > -1}`);
      if (exclusionlist.indexOf(northofChar) < 0) {
        moves.push("N");
      }
    }
    if (x < map.maptxt.length) {
      let southofChar = map.maptxt[x + 1][y];
      if (exclusionlist.indexOf(southofChar) < 0) moves.push("S");
    }

    if (y > 0) {
      let westOfChar = map.maptxt[x][y - 1];
      if (exclusionlist.indexOf(westOfChar) < 0) moves.push("W");
    }

    if (y < map.maptxt.length) {
      let eastOfChar = map.maptxt[x][y + 1];
      if (exclusionlist.indexOf(eastOfChar) < 0) moves.push("E");
    }
    return moves;
  }
}

class Lizard extends Character {
  constructor(width, height, imgs, x, y) {
    super(width, height, imgs, x, y);
  }

  move(map, direction = "") {
    if (direction === "") return;
    let res = this.getPossibleMoves(map, this.x, this.y, wallTiles);
    console.log(res);
    if (res.indexOf(direction) > -1)
      switch (direction) {
        case "N":
          this.x--;
          break;
        case "S":
          this.x++;
          break;
        case "E":
          this.y++;
          break;
        case "W":
          this.y--;
          break;
      }

    //it exist in the array if its not a wall

    return res;
  }

  vision(map) {
    let queue = [].unshift([this.x, this.y]);
    let visited = [];

    while (queue.length > 1) {
      let position = queue.pop();
      let currentX = position[0];
      let currentY = position[1];
      let reach = Math.abs(this.x - currentX) + Math.abs(this.y - currentY);
      if (reach > 7) queue = [];

      let currentTile = map.layout[currentY][currentX];
      if (hasVisited(visited, position)) continue;
      visited.push(position);
      if (reach > 5) map.fog[currentY][currentX] = -1;
      else map.fog[currentY][currentX] = 0;
      //Si es válido
      if (["T", "C", "."].indexOf(currentTile) < 0) {
        if (!hasVisited(visited, [currentX + 1, currentY]))
          queue.unshift([currentX + 1, currentY]);
        if (!hasVisited(visited, [currentX - 1, currentY]))
          queue.unshift([currentX - 1, currentY]);
      }
    }
    //return map;
  }
}

class Human extends Character {
  constructor(width, height, imgs, x, y) {
    super(width, height, imgs, x, y);
    this.xbias = 0.5;
    this.ybias = 0.5;
    this.futureactions = [];
    this.hasSeenLizard = false;
    this.lizardlastseenXposition;
    this.lizardlastseenYposition;
  }

  isValid(map, x, y, exclusionlist) {
    let res = x > 0 && x < map.layout.length && y > 0 && map.layout[0].length;
    return res;
  }
  getPossibleMoves(map) {}
  getPosiblePaths(mapa) {
    let paths = su;
    //SOmething happens here
    return paths;
  }
}
function hasVisited(arr, elem) {
  let hasvisited = false;
  arr.forEach(element => {
    hasvisited =
      hasvisited || (element[0] === elem[0] && element[1] === elem[1]);
  });
  return hasvisited;
}
var pc;

var humans;
