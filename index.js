
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex=sex;
  }
 
  speak() {
    return `${this.name} says meow!`;
  }
}
 
class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex=sex;
  }
 
  speak() {
    return `${this.name} says woof!`;
  }
}
 
 
 
 
 class Bird {
  
   constructor(name, sex) {
     this.name = name;
     this.sex = sex;
   }
  speak(){
   let bird= new Bird('Pablo','male');
   let bird2= new Bird('Mable', 'female');
       
       if (sex==='male') return `It's me! ${this.name} the parrot!`;
     else if (sex==='female') return `It's me! ${this.name} says Squawk!`;}
    
 }
 
