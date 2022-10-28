const Employee = require('../lib/Employee.js');

describe('employee', () => {
    const name = 'Khalil Khalil';
    const id = 1;
    const email = 'khalilkhalil@gmail.com';
    const role = 'Employee';

    const test = new Employee(name, id, email);

    it('Returns The Employee Name', () => {
        expect(test.getName()).toBe(name);
    });
    it('Returns The Employee Id', () => {
        expect(test.getId()).toBe(id);
    });
    it('Returns The Employee Email', () => {
        expect(test.getEmail()).toBe(email);
    });
    it('Returns The Employee Role', () => {
        expect(test.getRole()).toBe(role);
    });
})