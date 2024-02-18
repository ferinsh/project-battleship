import Ship from "./ship";

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