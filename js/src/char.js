class Character {
  constructor(width = 0, height = 0, imgs = [], x = 0, y = 0) {
    this.width = width;
    this.height = height;
    this.imgs = imgs;
    //Para orientarse, refierase al sector 1 del plano cartesiano
    this.x = x;
    this.y = y;
  }
}

class Lizard extends Character {
  constructor(width, height, imgs, x, y) {
    super(width, height, imgs, x, y);
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

  getPosiblePaths(mapa) {
    let paths = [];
    //SOmething happens here
    return paths;
  }
}
