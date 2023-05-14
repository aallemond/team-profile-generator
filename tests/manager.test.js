const Manager = require('../lib/Manager');

test('creates a new manager object', () =>{
    const manager = new Manager('Andrew', 3000, 'allemondandrew@gmail.com', 1001);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
});

test('gets role of employee using getRole()', () => {
    const manager = new Manager ('Andrew', 3000, 'allemondandrew@gmail.com', 4445869432);

    expect(manager.getRole()).toEqual("Manager");
});

test('gets office number from manager object', () => {
    const manager = new Manager ('Andrew', 3000, 'allemondandrew@gmail.co', 4445869432);

    expect(manager.officeNum).toEqual(expect.any(Number));
});