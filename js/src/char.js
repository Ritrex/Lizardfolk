class Character {
  constructor(width, height, imgs, x, y) {
    this.width = width;
    this.height = height;
    this.imgs = imgs;
    this.x = x;
    this.y = y;
  }
}

class Lizard {
  constructor(width, height, imgs, x, y) {
    super(width, height, imgs, x, y);
  }
}
