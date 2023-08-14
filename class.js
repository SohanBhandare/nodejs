class Person {

  constructor(name) {
      this.name = name
  }

  print() {
      console.log(this.name);
  }
}

const p1 = new Person("Sohan")
p1.print()