export default class Ship{
    constructor(length){//length should be be multiples of 5
        if (length % 5 !== 0) {
            throw new Error('Length should be multiples of 5.');
        }
        this.length = length;
        this.hits  = 0;
        this.sunk = false;
    }

    hit(){
        this.hits += 5;
        this.isSunk();
        return this.isSunk();
        
    }

    isSunk(){
        if(this.hits >= this.length){
            this.sunk = true;
            return true;
        }
        return false;
    }
}