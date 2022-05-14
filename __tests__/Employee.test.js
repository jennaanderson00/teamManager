const Employee = require('./Employee.js');

test('creates a name, id, and email object', () => {
    const employee = new Employee ('John Doe', 00000, 'johndoe@gmail.com', 'Manager');

    expect(employee.name).toBe('John Doe');
    expect(employee.id).toBe(00000);
    expect(employee.email).toBe('johndoe@gmail.com');
});

test('gets employee name', () => {
    const employee = new Employee ('John Doe', 00000, 'johndoe@gmail.com', 'Manager');

    expect(employee.getName()).toBe(expect.stringContaining('John Doe'));
});

test('gets employee ID', () => {
    const employee = new Employee ('John Doe', 00000, 'johndoe@gmail.com', 'Manager');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('gets employee email', () => {
    const employee = new Employee ('John Doe', 00000, 'johndoe@gmail.com', 'Manager');

    expect(employee.getEmail()).toBe(expect.stringContaining('johndoe@gmail.com'));
});

test('gets employee role', () => {
    const employee = new Employee ('John Doe', 00000, 'johndoe@gmail.com');

    expect(employee.getRole()).toBe(expect.stringContaining('Manager'));
});