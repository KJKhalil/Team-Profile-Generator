const Intern = require('../lib/Intern.js');

test('Creates School', () => {
    const testSchool = 'Case'
    const internTest = new Intern('Khalil', 1, 'khalilkhalil@gmail.com', testSchool);
    expect(internTest.school).toBe(testSchool);
})

test('Test the School Return', () => {
    const testSchool = 'Case';
    const engineerTest = new Intern('Khalil', 1, 'khalilkhalil@gmail.com', testSchool);
    expect(engineerTest.getSchool()).toBe(testSchool);
});

test('Test the Role Return', () => {
    const testRole = 'Intern';
    const engineerTest = new Intern('Khalil', 1, 'khalilkhalil@gmail.com', 'Case');
    expect(engineerTest.getRole()).toBe(testRole);
});