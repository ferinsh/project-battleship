import Ship from "./ship.js";

export default class Gameboard{
    constructor(size){
        this.gridSize = size;
        this.grid = this.createGrid();
        this.shipList = [];
        this.numOfShips = 0;
    }

    createGrid(){
        let map = [];
        for(let i = 0; i < this.gridSize; i++){
            let temp = [];
            for(let j = 0; j < this.gridSize; j++){
                temp[j] = {isShip: false, ship: {}, isHorizontal: undefined};
            }
            map[i] = temp;
        }

        return map;
    }

    placeShip(shp, x, y, isHorizontal){
        if(this.canPlaceShip(shp, x, y, isHorizontal)){
            //get complete coordinates
            let tempCoord = [];
            if(isHorizontal){
                let j = y;
                for(let i = x; i < (shp.length + x); i++){
                    this.grid[i][j].isShip = true;
                    this.grid[i][j].ship = shp;
                    this.grid[i][j].isHorizontal = true;
                    tempCoord.push({x: i, y: j});
                }
            }else{
                let i = x;
                for(let j = y; j < (shp.length + y); j++){
                    this.grid[i][j].isShip = true;
                    this.grid[i][j].ship = shp;
                    this.grid[i][j].isHorizontal = false;
                    tempCoord.push({x: i, y: j});
                }
            }
            this.shipList.push({ship: this.grid[x][y].ship, coord: tempCoord, position: isHorizontal});
            this.numOfShips++;
        }else{
            return false;
        }
    }

    canPlaceShip(shp, x, y, isHorizontal){
        if((shp.length + x) > this.gridSize || (shp.length + y) > this.gridSize){
            return false;
        }
        
        if(isHorizontal){
            let j = y;
            for(let i = x; i < (shp.length + x); i++){
                if(this.grid[i][j].isShip == true){
                    return false;
                }
            }
        }else{
            let i = x;
            for(let j = y; j < (shp.length + y); j++){
                if(this.grid[i][j].isShip == true){
                    return false;
                }
            }
        }

        return true;
    }

    recieveAttack(dmg, x, y){
        let ship = this.grid[x][y].ship;
        let shipStart = [];

        for(let i = 0; i < this.numOfShips; i++){
            if(this.shipList[i].coord == [x,y]){
                
            }
        }
        

        if(!this.grid[x][y].isShip){
            return false;
        }else{
            this.grid[x][y].ship.hit(dmg);
            
            console.log(this.grid[x][y].ship);
            console.log(this.shipList);

            if(this.grid[x][y].ship.sunk){
                for(let i = 0; i < this.shipList.length; i++){
                    for(let j = 0; j < this.shipList[i].coord.length; j++){
                        if(this.shipList[i].coord[j].x == x && this.shipList[i].coord[j].y == y){
                            shipStart = {x: this.shipList[i].coord[0].x, y: this.shipList[i].coord[0].y};
                            this.shipList.splice(i, 1);
                            break;
                        }
                    }
                }   
                let length = this.grid[shipStart.x][shipStart.y].ship.length;
                if(this.grid[shipStart.x][shipStart.y].isHorizontal){
                    for(let i = shipStart.x; i <= length; i++){
                        this.grid[i][y].isShip = false;
                        this.grid[i][y].isHorizontal = undefined;
                        this.grid[i][y].ship = {};
                    }
                }else{
                    for(let j = shipStart.y; j <= length; j++){
                        this.grid[i][y].isShip = false;
                        this.grid[i][y].isHorizontal = undefined;
                        this.grid[i][y].ship = {};
                    }
                }
                console.log(this.grid);

            }

            
        }
    }
}