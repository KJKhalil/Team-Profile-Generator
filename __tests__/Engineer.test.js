const Engineer = require('../lib/Engineer.js');

describe('engineer', () => {
    const name = 'Khalil Khalil';
    const id = 1;
    const email = 'khalilkhalil@gmail.com';
    const role = 'Engineer';
    const github = 'KJKhalil';
    const gitHubreturn = `<a href= 'https://github.com/${github}' target='_blank'>https://github.com/${github}</a>`;
    
    const test = new Engineer(name, id, email, github);

    it('Returns Github', () => {
        expect(test.getGithub()).toBe(gitHubreturn);
    });
    it('Returns Name', () => {
        expect(test.getName()).toBe(name);
    });
    it('Returns Id', () => {
        expect(test.getId()).toBe(id);
    });
    it('Returns Email', () => {
        expect(test.getEmail()).toBe(email);
    });
    it('Returns Role', () => {
        expect(test.getRole()).toBe(role);
    });
});
