const Manager = require('../lib/Manager.js');

test('Test the Role Return', () => {
    const testRole = 'Manager';
    const managerTest = new Manager('Khalil', 1, 'khalilkhalil@gmail.com', 52);
    expect(managerTest.getRole()).toBe(testRole);
});