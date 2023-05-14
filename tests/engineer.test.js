const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates and Engineer object', () => {
    const engineer = new Engineer('Andrew', 3000,'allemondandrew@gmail.com', 'aallemond');

    expect(engineer.github).toEqual(expect.any(String));
    
});

test('gets role of employee using getRole()', () => {
    const engineer = new Engineer ('Andrew', 3000, 'allemondandrew@gmail.com', 'aallemond');

    expect(engineer.getRole()).toEqual("Engineer");
});

test('gets github of engineer object using getGitHub()', () => {
    const engineer = new Engineer ('Andrew', 3000, 'allemondandrew@gmail.com', 'aallemond');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
})