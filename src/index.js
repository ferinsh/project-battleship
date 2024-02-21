import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

let ship1 = new Ship(10);
let ship2 = new Ship(10);

let gameboard = new Gameboard();
console.log(gameboard.placeShip(ship1, 10, 15, true));
console.log(gameboard.placeShip(ship2, 20, 25, true));
console.log(gameboard.grid[10][15]);
console.log(ship1.length);

// console.log(gameboard.grid);

// for(let i = 0; i < 10; i++){
//     let newX = 50 + i;
//     let newY = 60;
//     console.log(gameboard.grid[newX, 60]);
// }

console.log(gameboard)
console.log(typeof(gameboard.grid));

gameboard.receiveAttack(11,15);
gameboard.receiveAttack(13,15);
console.log(gameboard);