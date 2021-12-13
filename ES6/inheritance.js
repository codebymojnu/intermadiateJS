/* পিতার property গুলো সন্তানেরা পাবে 
Interview Question: >>Inheritance, >>Encaptulation, >>Polymorphisom */

class Parent{
    constructor(){
        this.bodyColor = "lightBlack";
        this.hairColor = "black";
    }
}
class Child extends Parent{
    constructor(name, age){
        super();
        this.name = name;
        this.age = age;
    }

    // we can declare a function in class
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    total(age1, age2) {
        return age1 + age2;
    }
}

const child1 = new Child("Mojnu", 24);
const child2 = new Child("Mominul", 17);
console.log(child1.name, child1.hairColor, "\n", child2.name, child2.hairColor, child2.total(24, 17));

/* Interview Question: Which method will you call to call the parent class constructor? 
Answer: super() */