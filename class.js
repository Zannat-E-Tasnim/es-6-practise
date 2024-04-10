class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "KPB High School";
    }
}

const student1 = new Student(16007,'Tanim');
const student2 = new Student(04201,'Zinat');
// console.log(student1,student2);
console.log(student1.name,student2.name);