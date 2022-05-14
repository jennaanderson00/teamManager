const Intern = require('../lib/Intern.js');

test('creates school object', () => {
    const intern = new Intern('John Doe', 00000, 'johndoe@gmail.com', 'College University', 'Intern');

    expect(intern.school).toBe('College University');
});

test('gets intern school', () => {
    const intern = new Intern('John Doe', 00000, 'johndoe@gmail.com', 'College University', 'Intern');

    expect(intern.getSchool()).toBe(expect.stringContaining('College University'));
});