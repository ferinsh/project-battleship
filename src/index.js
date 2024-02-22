import Gameboard from "../src/gameboard.js";
import Ship from "../src/ship.js";
import Player from "../src/player.js";

let play = new Player("play", true);

let ship1 = new Ship(5); 

let field1 = new Gameboard();
let field2 = new Gameboard();

play.playTurn(field1, field2);

field1.placeShip(ship1, 20, 30, true);
field2.placeShip(ship1, 20, 30, true);
field2.placeShip(ship1, 30, 40, true);

