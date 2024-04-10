class Parent{
    constructor() {
        this.fatherName = "Negger";
    }
}

class Child extends Parent{    //inheriting
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){             // function   --- method 
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child('Arid');
const baby2 = new Child('Arida');
// console.log(baby,baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());