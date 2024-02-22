import Gameboard from "./gameboard.js";

export default class Player{
    constructor(name, isAI = false){
        this.name = name;
        this.isAI = isAI;
    }

    playTurn(ourField, theirField){
        if(this.isAI){
            let ships = ourField.ships;
            let enemyShips = theirField.ships;
            let attackCoord = {x: 0, y: 0};

            // attackCoord.x = Math.floor(Math.random() * theirField.gridSize);
            // attackCoord.y = Math.floor(Math.random() * theirField.gridSize);

            attackCoord.x = 20;
            attackCoord.y = 30;

            console.log("AIships", ships);
            console.log("AIenemyShips", enemyShips);
            console.log("AIattackCoord", attackCoord.x, attackCoord.y);

            theirField.receiveAttack(attackCoord.x, attackCoord.y);
        }else{

        }
    }
}


