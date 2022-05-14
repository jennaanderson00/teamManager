const Engineer = require('../lib/Engineer.js');

test('creates a github object', () => {
    const engineer = new Engineer('John Doe', 00000, 'johndoe@gmail.com', 'johnd0e', 'Engineer');

    expect(engineer.github).toBe('johnd0e');
});

test('gets engineer github', () => {
    const engineer = new Engineer('John Doe', 00000, 'johndoe@gmail.com', 'johnd0e', 'Engineer');

    expect(engineer.getGithub()).toBe(expect.stringContaining('johnd0e'));
});