import Ship from "./ship"



describe("test ship interface", () => {
    let ship;
    
    beforeEach(() => {
        ship = new Ship(10);
    })

    it("hit() should increase the number of hits", () => {
        ship.hit();
        expect(ship.hits).toBe(1);
    })
    it("hit(10) should increase the number of hits to 10", () => {
        ship.hit(10);
        expect(ship.hits).toBe(10);
    })
    it("isSunk should say ship is sunk", () => {
        ship.hit(10);
        expect(ship.isSunk()).toBe(true);
        expect(ship.sunk).toBe(true);
    })
    it("isSunk should return false if hits is less than length", () => {
        ship.hit(5);
        expect(ship.hits).toBe(5);
        expect(ship.length).toBe(10);
        expect(ship.sunk).toBe(false);
    })
})