var floor1;
const mapfloor1back =
  ".............................\n.FFFFF.FFFFFFFFFFFFF.FFFFF...\n.F.FFF.....F.F.FFFFF.F.FFF...\n.F.FFF.FFFFF.F.FFFFF.F.FFF...\n.F.FFF.FFTFF.F.FFFFF.F.FFF...\n.F.FFF.FFTFF.S.FFFFFFF.FFF...\n.F...F.FFTFF...........F.F...\n.FFFFF.FFFFF.FFF.FFFFFFF.FFF.\n.F.....F.....FFF.FFF.FFF.FFF.\n.F.FFFFFFFFC.FFFFFFF.FFF.FFF.\n.F.FFF.FFFFC.FFF...F.FFF.FFF.\n.FFFFF.FFFFFFFFF.F.F.FFF.FFF.\n...F...F.....F...F.F.F...F...\n.FFFFFFFFFFFFFFF.FFFFF.FFFFF.\n.FFFFF.FFFFF.FFF.FFFFF.FFF.F.\n.FFFFF.FFFFF.FFF.FFFFF.FFF.F.\n.....F.......FFF.FFFFF.....F.\n.F.FFFFFFFFF.FFFFFFFFFFFFFFF.\n.F.FFFFF...F.F.........FFF.F.\n.FFFFFFF.CCFFF.FFFFF...FFF.F.\n.F.FFFFF.CFFFF.FFFFF...FFF.F.\n.F.FFFFF.CCFFF.FFFFFFFFFFF.F.\n.F...F.........FFFFF.....F.F.\n.FFFFFFFFFFFFF.FFFFF.FFFFF.F.\n.F.FFFFF.FFFFF.F.....FFFFF.F.\n.F.GFFFF.FFFFFFFFFFFFFFFFF.F.\n.F.............FFFFF.......F.\n.FFFFFFFFFFFFFFFFFFFFFFFFFFF.\n.............................\n";
const mapfloor1fogback =
  "11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n11111111111111111111111111111\n";
const mapback =
  ".............................\n.FFFFF.FFFFFFFFFFFFF.FFFFF...\n.F.FFF.....F.F.FFFFF.F.FFF...\n.F.FFF.FFFFF.F.FFFFF.F.FFF...\n.F.FFF.FFFFF.S.FFFFF.F.FFF...\n.F.FFF.FFFFF.S.FFFFFFF.FFF...\n.F...F.FFFFF...........F.F...\n.FFFFF.FFFFF.FFF.FFFFFFF.FFF.\n.F.....F.....FFF.FFF.FFF.FFF.\n.F.FFFFFFFFF.FFFFFFF.FFF.FFF.\n.F.FFF.FFFFF.FFF...F.FFF.FFF.\n.FFFFF.FFFFFFFFF.F.F.FFF.FFF.\n...F...F.....F...F.F.F...F...\n.FFFFFFFFFFFFFFF.FFFFF.FFFFF.\n.FFFFF.FFFFF.FFF.FFFFF.FFF.F.\n.FFFFF.FFFFF.FFF.FFFFF.FFF.F.\n.....F.......FFF.FFFFF.....F.\n.S.FFFFFFFFF.FFFFFFFFFFFFFFF.\n.S.FFFFF...F.F.........FFF.F.\n.FFFFFFF.FFFFF.FFFFF...FFF.F.\n.F.FFFFF.FFFFF.FFFFF...FFF.F.\n.F.FFFFF.FFFFF.FFFFFFFFFFF.F.\n.F...F.........FFFFF.....F.F.\n.FFFFFFFFFFFFF.FFFFF.FFFFF.F.\n.F.FFFFF.FFFFF.F.....FFFFF.F.\n.F.FFFFF.FFFFFFFFFFFFFFFFF.F.\n.F.............FFFFF.......F.\n.FFFFFFFFFFFFFFFFFFFFFFFFFFF.\n.............................\n";
const testmap = "......\n.FFFF.\n.F.FF.\n..FF..\n.F.FF.\n...FF.\n......";
const fogtestmap = "111111\n111111\n111111\n111111\n111111\n111111\n111111";
//for(let i =0;i<floor1.maptxt.length;i++){console.log(floor1.layout[i])}

class Map {
  constructor(
    layout = [],
    furniture = [],
    lizards = new Lizard(),
    humans = [new Human()],
    /***
     * fov es sólo una lista de elemenos jugadores
     * los humanos pintan más a color pero el alcane es menor
     * los lizards pintan mucho de gris y su alcance es mayor
     */
    availableTiles = [],
    fog = [],
    fov = [],
    light = [],
    mapstring = testmap,
    mapfo = fogtestmap
  ) {
    this.layout = layout;
    this.furniture = furniture;
    this.lizard = lizards;
    this.humans = humans;
    let f = [];
    let fo = [];
    mapstring.split("\n").forEach(element => {
      f.push(element.split(""));
    });
    mapfo.split("\n").forEach(element => {
      fo.push(element.split(""));
    });
    fog = fo;
    //f.pop();
    //transpose(f);
    this.maptxt = f;
    this.layout = this.maptxt;
    //f = [];
    // for (let i = 0; i < layout.length; i++) {
    //   for (let j = 0; j < layout[i].length; j++) {
    //     fo[i][j] = 1;
    //   }
    // }
    console.log(fo);
    this.fog = fo;
    // for (var i = 0; i < this.layout.length; i++) {
    //   this.fog.push(new Array(this.layout[0].length));
    //   for (var j = 0; j < this.layout[0].length; j++) {
    //     this.fog[i][j] = 1;
    //   }
    // }
  }
}

function transpose(array) {
  for (let i = 0; i < array.length; i++) {
    for (let index = 0; index < i; index++) {
      let provisional = array[i][index];
      array[i][index] = array[index][i];
      array[index][i] = provisional;
    }
  }
}

function printmap(m) {}
//  "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWFFFFFWWFFFFFFFFFFFFFWWFFFFFWWWWWWW\nWFWWFFFWWWWWWFWWFWWFFFFFWWFWWFFFWWW\nWFWWFFFWWFFFFFWWFWWFFFFFWWFWWFFFWWW\nWFWWFFFWWFFFFFWWSWWFFFFFWWFWWFFFWWW\nWFWWFFFWWFFFFFWWSWWFFFFFFFWWFFFWWWW\nWFWWWWFWWFFFFFWWWWWWWWWWWWFWWFWWWWW\nWFFFFFWWFFFFFWWFFFWWFFFFFFFWWFFFWWW\nWFWWWWWWFWWWWWWFFFWWFFFWWFFFWWFFFWW\nWFWWFFFFFFFFFWWFFFFFFFWWFFFWWFFFWWW\nWFWWFFFWWFFFFFWWFFFWWWWFWWFFFWWFFFW\nWFFFFFWWFFFFFFFFFWWFWWFWWFFFWWFFFWW\nWWWFWWWWFWWWWWWFWWWWFWWFWWFWWWWFWWW\nWFFFFFFFFFFFFFFFWWFFFFFWWFFFFFWWWWW\nWFFFFFWWFFFFFWWFFFWWFFFFFWWFFFWWFWW\nWFFFFFWWFFFFFWWFFFWWFFFFFWWFFFWWFWW\nWWWWWFWWWWWWWWFFFWWFFFFFWWWWWWFWWWW\nWSWWFFFFFFFFFWWFFFFFFFFFFFFFFFWWWWW\nWSWWFFFFFWWWWFWWFWWWWWWWWWWFFFWWFWW\nWFFFFFFFWWFFFFFWWFFFFFWWWWFFFWWFWWW\nWFWWFFFFFWWFFFFFWWFFFFFWWWWFFFWWFWW\nWFWWFFFFFWWFFFFFWWFFFFFFFFFFFWWFWWW\nWFWWWWFWWWWWWWWWWFFFFFWWWWWWFWWFWWW\nWFFFFFFFFFFFFFWWFFFFFWWFFFFFWWFWWWW\nWFWWFFFFFWWFFFFFWWFWWWWWWFFFFFWWFWW\nWFWWFFFFFWWFFFFFFFFFFFFFFFFFWWFWWWW\nWFWWWWWWWWWWWWWWFFFFFWWWWWWWWFWWWWW\nWFFFFFFFFFFFFFFFFFFFFFFFFFFFWWWWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\n";

/* Map translation formula
  This translates a simple doorlesss map from https://donjon.bin.sh/fantasy/dungeon/
  to  a single line string.
  Despite the notation, you need a text editor that allows you 
  to  use regular expresions to achieve this.
  In other words, the js syntax is just of convinience.
  replace("\t"," ")
  replace("F ","F")
  replace("S ","") //Here you should be able to see the same layout
                   //the original map had.
  replace("\n","\\n") 

  //if you want to make it an array then you need js here.
  //Assume that tere's a variable named  maptxt that  
  //has the strnig generated previously.
  maptxt.split("\n")

  //if you want a bidimensional array
  maptxt.split("\n").split("")
*/
