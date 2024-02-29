export default class Ship{
    constructor(length){
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit(dmg){
        if(dmg ==undefined){
            this.hits++;
        }else{
            this.hits = this.hits + dmg;
        }

        this.isSunk();
    }

    isSunk(){
        if(this.hits >= this.length){
            this.sunk = true;
            return true;
        }else{
            return false;
        }
    }
}