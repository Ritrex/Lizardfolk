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
    let queue = [];
    queue.unshift([this.y, this.x]);
    let visited = [];
    map.fog[this.y][this.x] = 0;

    return this.visionaux(map, 7, 0, visited, this.x, this.y, queue);
  }

  visionaux(map, maxdepth, currentDepth, visited, x, y, path) {
    if (hasVisited(visited, [x, y]) || currentDepth > maxdepth) return;
    let fog = map.fog;
    let lay = map.layout;
    let currentTile = lay[x][y];
    if (currentDepth > 5) fog[x][y] = 0;
    if (currentDepth < 6) fog[x][y] = 0;
    visited.push([x, y]);
    if (wallTiles.indexOf(currentTile) < 0) {
      if (!hasVisited(visited, [x + 1, y]))
        this.visionaux(
          map,
          maxdepth,
          currentDepth + 1,
          visited,
          x + 1,
          y,
          path
        );
      if (!hasVisited(visited, [x - 1, y]))
        this.visionaux(
          map,
          maxdepth,
          currentDepth + 1,
          visited,
          x - 1,
          y,
          path
        );
      if (!hasVisited(visited, [x, y + 1]))
        this.visionaux(
          map,
          maxdepth,
          currentDepth + 1,
          visited,
          x,
          y + 1,
          path
        );
      if (!hasVisited(visited, [x, y - 1]))
        this.visionaux(
          map,
          maxdepth,
          currentDepth + 1,
          visited,
          x,
          y - 1,
          path
        );
    }
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
  getPosiblePaths(mapa) {
    let paths = su;
    //SOmething happens here
    return paths;
  }
  move() {
    let moves = this.getPossibleMoves(floor1, this.x, this.y, ["T", "C", "."]);
    let pick;
    console.log(`Human: ${this.x},${this.y},${moves}`);
    if (["C", "T"].indexOf(floor1.layout[pc.x][pc.y]))
      pick = moves[~~(Math.random() * moves.length)];
    switch (pick) {
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
      default:
        break;
    }
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
