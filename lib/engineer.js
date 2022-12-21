const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name, email, id, gitHub){
        super(name, email, id);
        this.gitHub = gitHub;
    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return 'Engineer';
    }
    getIcon(){
        return '<i class="fa">&#xf7d9</i>';
    }
}
module.exports = Engineer;
 
