const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Andrew', 3000, 'allemondandrew@gmail.com', 'LSU')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets role of employee', () => {
    const intern = new Intern ('Andrew', 1234, 'allemondandrew@gmail.com', 'LSU');

    expect(intern.getRole()).toEqual("Intern");
});

test('gets school from intern object using getSchool()', () => {
    const intern = new Intern ('Andrew', 1234, 'allemondandrew@gmail.com','LSU');

    expect(intern.getSchool()).toEqual(expect.any(String));
})