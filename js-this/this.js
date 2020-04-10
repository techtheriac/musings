function greetFrank() {
  console.log(`Hello ${this.name}`)
}

Person = {
  name: "Frank"
}

greetFrank.call(Person);
