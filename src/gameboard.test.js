import Gameboard from "./gameboard.js";
import Ship from './ship.js';

describe("Gameboard", () => {
    let gameboard;
    beforeEach(() => {
        gameboard = new Gameboard(10);
    })
    it("grid should be 2d grid of size 10x10", () =>{
        expect(gameboard.gridSize).toEqual(10);
        
    })
    
    it("placeShip(new Ship(3), 0, 0, true) should place a ship of length 3 starting from 0,0 horizontally", () => {
        gameboard.placeShip(new Ship(3), 0, 0, true);
        expect(gameboard.grid[0][0].isShip).toBe(true);
        expect(gameboard.grid[1][0].isShip).toBe(true);
        expect(gameboard.grid[2][0].isShip).toBe(true);
        expect(gameboard.grid[3][0].isShip).toBe(false);
        expect(gameboard.grid[0][1].isShip).toBe(false);
    })

    it('canPlaceShip(new Ship(11), 0, 0, true) should return false', () => {
        expect(gameboard.canPlaceShip(new Ship(11), 0, 0, true)).toBe(false);
    })

    it('canPlaceShip() should return false if ship already exists at any of the coordinates', () => {
        gameboard.placeShip(new Ship(7), 0, 0, true);
        expect(gameboard.canPlaceShip(new Ship(5), 2, 0, true)).toBe(false);
    })

    it('shipList should contain an array of all the ships', () => {
        gameboard.placeShip(new Ship(5), 0, 0, true);
        gameboard.placeShip(new Ship(5), 0, 1, false);
        expect(gameboard.shipList[0].position).toBe(true);
        expect(gameboard.shipList[1].position).toBe(false);
    })

    it('recieveAttack(10,4,0) should sink ship of length 5', () => {
        gameboard.placeShip(new Ship(5), 0, 0, true);
        gameboard.recieveAttack(10, 4, 0);
        expect(gameboard.grid[3][0].ship).toEqual({});
    })

    
})