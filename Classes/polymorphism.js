class Animal{
    constructor(name){
        this.name = name;
    }

    makeSound(){
        console.log("Generic Animal Sound");
    }

}

const a1 = new Animal('Dom');

a1.makeSound();

class Dog extends Animal{
    constructor(name){
        super(name);
    }

    makeSound(){
        super.makeSound()
        console.log('Wooooof! Wooof!');
    }
}

const a2 = new Dog('Jeff');

a2.makeSound();