// --------------------------------------------- Assignment: Super Ninja ---------------------------------------------

// Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 
// 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, 
// and the default should be 10. Finally, add the speakWisdom() method. 
// speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

//Assignment checks:
// create a class Sensei that inherits from the Ninja class
// add an attribute: wisdom - default to 10
// create a method: speakWisdom()


//pair programming with Richard, Anthony, Eric, Viviana, Kye


class Ninja{
    constructor (name, health = 90, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`The ninja's name is ${this.name}.`)
        return;
    }
    showStats(){
        console.log(`The ninja's name is ${this.name}.`)
        console.log(`The ninja's health is ${this.health}.`)
        console.log(`The ninja's speed is ${this.speed}.`)
        console.log(`The ninja's strength is ${this.strength}.`)
        return;
    }
    drinkSake(){
        this.health +=10;
        console.log(`Ninja's updated health is ${this.health}`)
        return;
    }
}

const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();


//inheriting a class
//calling a super is only trying to call and execute a function of your super class
class Sensei extends Ninja{
    constructor(name){  //put in name because does not have a default name in ninja constructor
        super(name) //finds this method first and then looks for constructor method
        //super(name, 200, 10, 10) --> another method of writing it
        this.health = 200,
        this.speed = 10,
        this.strength = 10,
        this.widsom = 10
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in on month, two programmers can do in two months")
        return this; //return "this" if you are trying to chain
    }
}

const Sensei1 = new Sensei("Sensze");
Sensei1.speakWisdom();
Sensei1.showStats();