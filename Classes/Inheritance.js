class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }
    describe(){
        console.log(`I am ${this.name}, I am ${this.age}`)
    }
}

class Programmer extends Person{
    constructor(_name, _age, _yearsOfExperience){
        super(_name, _age);

        this.yearsOfExperience = _yearsOfExperience;
    }

    code(){
        console.log(`${this.name} is coding`);
    }
}

let person1 = new Person('Jeff', 45);
let programmer1 = new Programmer ("Dave", 55, 12);


console.log(person1);
console.log(programmer1);

programmer1.code()
programmer1.describe()

console.log('/////////')
const programmers = [
    new Programmer("Dom", 44, 12),
    new Programmer("Jeff", 24, 4 ),
]


function developSoftware(programmers){
    for(let programmer of programmers){
        programmer.code();
    }
}

developSoftware(programmers);