// JavaScript class used to create object easily

class Student {
    constructor(name, id, school){
        this.name = name;
        this.id = id;
        this.school = school;
    }
}
const student1 = new Student("Mojnu", 180113, "Berubari High School");
const student2 = new Student("Bulbul", 150113, "Khelarvita High School");
const student3 = new Student("Khalid", 250313, "Cantonment School");

console.log(student1, student2, student3.name);