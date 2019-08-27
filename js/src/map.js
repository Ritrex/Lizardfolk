const floorTiles = ["F", "w"];
const WallTiles = ["W"];
class Map {
  constructor(
    layout = [],
    furniture = [],
    lizards = new Lizard(),
    humans = [new Human()],
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
    this.layout = this.maptxt.shift();
  }
}

var mapback =
  "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWFFFFFWWFFFFFFFFFFFFFWWFFFFFWWWWWWW\nWFWWFFFWWWWWWFWWFWWFFFFFWWFWWFFFWWW\nWFWWFFFWWFFFFFWWFWWFFFFFWWFWWFFFWWW\nWFWWFFFWWFFFFFWWSWWFFFFFWWFWWFFFWWW\nWFWWFFFWWFFFFFWWSWWFFFFFFFWWFFFWWWW\nWFWWWWFWWFFFFFWWWWWWWWWWWWFWWFWWWWW\nWFFFFFWWFFFFFWWFFFWWFFFFFFFWWFFFWWW\nWFWWWWWWFWWWWWWFFFWWFFFWWFFFWWFFFWW\nWFWWFFFFFFFFFWWFFFFFFFWWFFFWWFFFWWW\nWFWWFFFWWFFFFFWWFFFWWWWFWWFFFWWFFFW\nWFFFFFWWFFFFFFFFFWWFWWFWWFFFWWFFFWW\nWWWFWWWWFWWWWWWFWWWWFWWFWWFWWWWFWWW\nWFFFFFFFFFFFFFFFWWFFFFFWWFFFFFWWWWW\nWFFFFFWWFFFFFWWFFFWWFFFFFWWFFFWWFWW\nWFFFFFWWFFFFFWWFFFWWFFFFFWWFFFWWFWW\nWWWWWFWWWWWWWWFFFWWFFFFFWWWWWWFWWWW\nWSWWFFFFFFFFFWWFFFFFFFFFFFFFFFWWWWW\nWSWWFFFFFWWWWFWWFWWWWWWWWWWFFFWWFWW\nWFFFFFFFWWFFFFFWWFFFFFWWWWFFFWWFWWW\nWFWWFFFFFWWFFFFFWWFFFFFWWWWFFFWWFWW\nWFWWFFFFFWWFFFFFWWFFFFFFFFFFFWWFWWW\nWFWWWWFWWWWWWWWWWFFFFFWWWWWWFWWFWWW\nWFFFFFFFFFFFFFWWFFFFFWWFFFFFWWFWWWW\nWFWWFFFFFWWFFFFFWWFWWWWWWFFFFFWWFWW\nWFWWFFFFFWWFFFFFFFFFFFFFFFFFWWFWWWW\nWFWWWWWWWWWWWWWWFFFFFWWWWWWWWFWWWWW\nWFFFFFFFFFFFFFFFFFFFFFFFFFFFWWWWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\n";

var floor1 = new Map();
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
