import Ship from "./ship";
import Gameboard from './gameboard.js';

describe('Ship', () => {
    it('should create a ship with the correct length', () => {
        const ship = new Ship(15);
        expect(ship.length).toBe(15);
    })

    it('should throw an error if ship length is not multiple of 5', () => {
        expect(() => {
            new Ship(13);
        }).toThrow('Length should be multiples of 5.');
    })

    it('Should initialize this.hit to 0 and this.sunk to false', () => {
        const ship = new Ship(15);
        expect(ship.hits).toBe(0);
        expect(ship.sunk).toBe(false);
    })

    it('should increase hits by 5 if hit() is called', () => {
        const ship = new Ship(15);
        ship.hit();
        expect(ship.hits).toBe(5);
    })

    it('Should change sunk = true when hits is greater than length', () => {
        const ship = new Ship(15);
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.sunk).toBe(true);
    })
})

describe('Gameboard', () => {

    let gameboard;

    beforeEach(() => {
        gameboard = new Gameboard();
    });

    it('should create a gameboard with a 100x100 grid', () => {
        expect(gameboard.grid.length).toBe(gameboard.gridSize);
        expect(gameboard.grid[gameboard.gridSize - 1].length).toBe(gameboard.gridSize);
    })

    it('Should create a grid property with a grid property isShip', () => {
        expect(gameboard.grid[0][0].isShip).toBe(false);
    })

    it('should place a ship at a given position horizontally', () => {
        const ship = new Ship(5);
        expect(gameboard.placeShip(ship, 50, 53, true)).toBe(true);
    })

    it('should throw an error if a ship larger than 10 is placed', () => {
        expect(() => {
            gameboard.placeShip(new Ship(105), 0, 0, true)
        }).toThrow("Invalid Length");
    })

    it('should horizontally place a ship of length 10 at (50,60), trying to place another ship crossing these coordinates should return false', () => {
        const ship = new Ship(10);
        expect(gameboard.placeShip(ship, 50, 60, true)).toBe(true);
        expect(gameboard.placeShip(ship, 55, 60, true)).toBe(false);
    })

    it('shouldnt cross gameboard boundaries', () => {
        const ship = new Ship(10);
        expect(gameboard.placeShip(ship, 90, 99, true)).toBe(true);
        expect(gameboard.placeShip(ship,91, 99, true)).toBe(false);
        expect(gameboard.placeShip(ship,99, 89, false)).toBe(true);
        expect(gameboard.placeShip(ship,89,91, false)).toBe(false);
    })

    it('should find ship at (10,15) and give its complete coordinates', () => {
        const ship = new Ship(10);
        expect(gameboard.placeShip(ship, 90, 99, true)).toBe(true);
        expect(gameboard.receiveAttack(92,99)).toBe(true);
    })

    it('should increase ship hit value', () => {
        const ship = new Ship(10);
        gameboard.placeShip(ship, 10, 20, true);
        gameboard.receiveAttack(11, 20);
        expect(gameboard.ships[0].ship.hits).toBe(5);
    })

    it('should change ship sunk status to true', () => {
        const ship = new Ship(10);
        gameboard.placeShip(ship, 10, 20, true);
        gameboard.receiveAttack(11, 20);
        gameboard.receiveAttack(14, 20);
        expect(gameboard.ships[0].ship.sunk).toBe(true);
    })

})