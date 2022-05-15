// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() - returns 'Employee'

class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = this.getName(data).name;
        this.id = this.getId(data).id;
        this.email = this.getEmail(data).email;
    }
    getName(data) {
        if (getRole() === 'Manager') {
            var name = data.mgrName;
        } else if (getRole() === 'Engineer') {
            var name = data.egrName;
        } else {
            var name = data.intName;
        }
    }
    getId(data) {
        if (getRole() === 'Manager') {
            var id = data.mgrId;
        } else if (getRole() === 'Engineer') {
            var id = data.egrId;
        } else {
            var id = data.intId;
        }
    }
    getEmail(data) {
        if (getRole() === 'Manager') {
            var email = data.mgrEmail;
        } else if (getRole() === 'Engineer') {
            var email = data.egrEmail;
        } else {
            var email = data.intEmail;
        }
    }
    getRole() {
        return 'Employee';
    } 
}

module.exports = Employee;