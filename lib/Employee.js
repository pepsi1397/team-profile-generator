
class Employee {
    constructor(name,id,email){
        this.name=name;
        this.id=id;
        this.email=email;
    }
    getName(){
        return this.name
    }
    getId(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"

    }
}

const jose = new Employee('jose','13','test@test.com')

module.exports = Employee;