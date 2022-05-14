const Manager = require('../lib/Manager.js');

test('creates officeNumber object', () => {
    const manager = new Manager('John Doe', 00000, 'johndoe@gmail.com', 000, 'Manager');

    expect(manager.officeNumber).toBe(000);
});
