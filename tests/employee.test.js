const Employee = require('../lib/Employee');

test('creates an employee object', () =>{
    const employee = new Employee('Andrew', 1234, 'allemondandrew@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets role of employee', () => {
    const employee = new Employee ('Andrew', 1234, 'allemondandrew@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});

test('gets name of employee using getName()', () => {
    const employee = new Employee ('Andrew', 1234, 'allemondandrew@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets get employee id', () => {
    const employee = new Employee ('Andrew', 1234, 'allemondandrew@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email using getEmail()', () => {
    const employee = new Employee ('Andrew', 1234, 'allemondandrew@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});


