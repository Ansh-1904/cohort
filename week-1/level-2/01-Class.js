// example 1
// class Animal {
//   constructor(name, legCount) {
//     this.name = name
//     this.legCount = legCount
//   }
//   describe() {
//     return `${this.name} has ${this.legCount} legs`
//   }
// }

// example 2

// const dog={
//   name:"Doggie",
//   legCount:4,
//   speaks:"Bhow Bhow"
// }

// const cat={
//   name:"Cat",
//   legCount:4,
//   speaks:"Meow Meow"
// }

// function printAnimal(Animal)
// {
//   console.log("Animal " + Animal["name"]+" "+ Animal["speaks"]+" and has "+ Animal["legCount"]+" legs")
// }

// printAnimal(dog);
printAnimal(cat);

//example 3 using constructor

class Animal{
  constructor(name, legCount, speaks){
    this.name=name,
    this.legCount=legCount,
    this.speaks=speaks
  }

  static myType(){
    console.log("My class is animal")
  }

  detail()
  {
    console.log("Animal "+ this.name+" has "+this.legCount+" legs and speaks "+this.speaks)
  }
}

let dog=new Animal("Doggie",4,"Bhow Bhow") //creating object here.
dog.detail()  //detail function can be called on the object we created //we cannot call Animal.detail();

//To call a function using the class Animal we need to make it static ...for example
Animal.myType()