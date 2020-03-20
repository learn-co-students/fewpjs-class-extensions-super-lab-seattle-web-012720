
class Pet {
    constructor(name) {
      this.name = name;
      this._owner = null;
    }
   
    get owner() {
      return this._owner;
    }
   
    set owner(owner) {
      this._owner = owner;
    }
   
    static definition() {
      return `A pet is an animal kept primarily for a person's company.`;
    }
  }
   
  // Inherits from Pet
  class Dog extends Pet {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
   
    static definition() {
      return (
        super.definition() + ' Dogs are one of the most common types of pets.'
      );
    }
  }
   
  let creature = new Pet('The Thing');
  let dog = new Dog('Spot', 'foxhound');
   
console.log( Pet.definition())
console.log( Dog.definition())