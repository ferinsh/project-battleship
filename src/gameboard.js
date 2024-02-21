import Ship from "./ship.js";

export default class Gameboard{
    constructor(){
        this.gridSize = 100;
        this.grid = Array.from({ length: this.gridSize }, () =>
            Array.from({ length: this.gridSize }, () => ({ isShip: false, isHit: false, ship: {} }))
        );
        this.ships = [];
        this.missedAttacks = [];
    }

    placeShip(ship,x,y,isHorizontal){
        if(ship.length > this.gridSize){
            throw new Error("Invalid Length");
        }
        if(this.canPlaceShip(ship, x, y, isHorizontal)){
            const shipCordinates = [];
            for(let i = 0; i < ship.length; i++){
                const newX = isHorizontal ? x + i : x;
                const newY = isHorizontal ? y : y + i;
                this.grid[newX][newY].isShip = true;
                this.grid[newX][newY].ship = ship;
                shipCordinates.push({x: newX, y: newY});
            }
            this.ships.push({ship: new Ship(ship.length), coordinates: shipCordinates});
            return true;
        }
        return false;
    }

    canPlaceShip(ship, x, y, isHorizontal) {
        if (isHorizontal && x + ship.length > this.gridSize){
            return false;
        }

        if (!isHorizontal && y + ship.length > this.gridSize){
            return false;
        }

        for(let i = 0; i < ship.length; i++){
            const newX = isHorizontal ? x + i : x;
            const newY = isHorizontal ? y : y + i;
            if(this.grid[newX][newY].isShip) {
                return false;
            }
        }

        return true;
    }

    receiveAttack(x, y){
        if(this.grid[x][y].isHit) {
            return false;
        }

        this.grid[x][y].isHit = true;
        if(this.grid[x][y].isShip) {
            this.ships.forEach(ship => {
                ship.coordinates.forEach(coord => {
                    if(coord.x === x && coord.y ===y){
                        ship.ship.hit();
                    }
                })
            })
            this.grid[x][y].isShip = false;
            return true;
        } else {
            this.missedAttacks.push({x,y});
            return false;
        }
    }

    allShipsSunk(){
        return this.ships.every(ship => ship.ship.sunk);
    }


}