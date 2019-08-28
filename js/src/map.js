const floorTiles = ["F", "w"];
const wallTiles = ["."];
const furnitureTiles = ["T", "C"];

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
    light = []
  ) {
    this.layout = layout;
    this.furniture = furniture;
    this.lizard = lizards;
    this.humans = humans;
    let f = [];
    mapback.split("\n").forEach(element => {
      f.unshift(element.split(""));
    });
    this.maptxt = f;
    //this.layout = this.maptxt.shift();
    this.layout = this.maptxt;
    for (var i = 0; i < map.layout.length; i++) {
      for (var j = 0; j < map.layout[0]; j++) {}
    }
  }
}

var mapback =
  ".............................\n.FFFFF.FFFFFFFFFFFFF.FFFFF...\n.F.FFF.....F.F.FFFFF.F.FFF...\n.F.FFF.FFFFF.F.FFFFF.F.FFF...\n.F.FFF.FFFFF.S.FFFFF.F.FFF...\n.F.FFF.FFFFF.S.FFFFFFF.FFF...\n.F...F.FFFFF...........F.F...\n.FFFFF.FFFFF.FFF.FFFFFFF.FFF.\n.F.....F.....FFF.FFF.FFF.FFF.\n.F.FFFFFFFFF.FFFFFFF.FFF.FFF.\n.F.FFF.FFFFF.FFF...F.FFF.FFF.\n.FFFFF.FFFFFFFFF.F.F.FFF.FFF.\n...F...F.....F...F.F.F...F...\n.FFFFFFFFFFFFFFF.FFFFF.FFFFF.\n.FFFFF.FFFFF.FFF.FFFFF.FFF.F.\n.FFFFF.FFFFF.FFF.FFFFF.FFF.F.\n.....F.......FFF.FFFFF.....F.\n.S.FFFFFFFFF.FFFFFFFFFFFFFFF.\n.S.FFFFF...F.F.........FFF.F.\n.FFFFFFF.FFFFF.FFFFF...FFF.F.\n.F.FFFFF.FFFFF.FFFFF...FFF.F.\n.F.FFFFF.FFFFF.FFFFFFFFFFF.F.\n.F...F.........FFFFF.....F.F.\n.FFFFFFFFFFFFF.FFFFF.FFFFF.F.\n.F.FFFFF.FFFFF.F.....FFFFF.F.\n.F.FFFFF.FFFFFFFFFFFFFFFFF.F.\n.F.............FFFFF.......F.\n.FFFFFFFFFFFFFFFFFFFFFFFFFFF.\n.............................\n";

//  "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWFFFFFWWFFFFFFFFFFFFFWWFFFFFWWWWWWW\nWFWWFFFWWWWWWFWWFWWFFFFFWWFWWFFFWWW\nWFWWFFFWWFFFFFWWFWWFFFFFWWFWWFFFWWW\nWFWWFFFWWFFFFFWWSWWFFFFFWWFWWFFFWWW\nWFWWFFFWWFFFFFWWSWWFFFFFFFWWFFFWWWW\nWFWWWWFWWFFFFFWWWWWWWWWWWWFWWFWWWWW\nWFFFFFWWFFFFFWWFFFWWFFFFFFFWWFFFWWW\nWFWWWWWWFWWWWWWFFFWWFFFWWFFFWWFFFWW\nWFWWFFFFFFFFFWWFFFFFFFWWFFFWWFFFWWW\nWFWWFFFWWFFFFFWWFFFWWWWFWWFFFWWFFFW\nWFFFFFWWFFFFFFFFFWWFWWFWWFFFWWFFFWW\nWWWFWWWWFWWWWWWFWWWWFWWFWWFWWWWFWWW\nWFFFFFFFFFFFFFFFWWFFFFFWWFFFFFWWWWW\nWFFFFFWWFFFFFWWFFFWWFFFFFWWFFFWWFWW\nWFFFFFWWFFFFFWWFFFWWFFFFFWWFFFWWFWW\nWWWWWFWWWWWWWWFFFWWFFFFFWWWWWWFWWWW\nWSWWFFFFFFFFFWWFFFFFFFFFFFFFFFWWWWW\nWSWWFFFFFWWWWFWWFWWWWWWWWWWFFFWWFWW\nWFFFFFFFWWFFFFFWWFFFFFWWWWFFFWWFWWW\nWFWWFFFFFWWFFFFFWWFFFFFWWWWFFFWWFWW\nWFWWFFFFFWWFFFFFWWFFFFFFFFFFFWWFWWW\nWFWWWWFWWWWWWWWWWFFFFFWWWWWWFWWFWWW\nWFFFFFFFFFFFFFWWFFFFFWWFFFFFWWFWWWW\nWFWWFFFFFWWFFFFFWWFWWWWWWFFFFFWWFWW\nWFWWFFFFFWWFFFFFFFFFFFFFFFFFWWFWWWW\nWFWWWWWWWWWWWWWWFFFFFWWWWWWWWFWWWWW\nWFFFFFFFFFFFFFFFFFFFFFFFFFFFWWWWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\n";

var floor1;
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
