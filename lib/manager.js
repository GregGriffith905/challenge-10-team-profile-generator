const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        super(name, email, id);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
    getIcon(){
        return '<i class="fa">&#xf0a1</i>';
    }
}
module.exports = Manager;