class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

//Penggunaan
let user = new User(`Tatma`);
user.sayHi();

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  study() {
    return `${this.name} is studying`;
  }

  get studentInfo() {
    return `${this.name}, age ${this.age}, grade ${this.grade}`;
  }

  set studentGrade(newGrade) {
    if (newGrade >= 0 && newGrade <= 100) {
      this.grade = newGrade;
    } else {
      console.log(`invalid grade`);
    }
  }
}

let student = new Student(`Syam`, 23, 80);

student.studentGrade = -10;
console.log(student.studentInfo);

console.log(`============ THIS IS ANIMAL ==============`);
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} run with speed ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} is stopped`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} is hiding`);
  }
}

let rabbit = new Rabbit(`White Rabbit`);
rabbit.run(5);
rabbit.hide();

console.log(`============== THIS IS PERSON ==============`);

const student1 = new Student(`John`, 20, 85);
const student2 = new Student(`Tatma`, 23, 100);

console.log(student1.study());
console.log(student2.studentInfo);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name}`;
  }
}
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  teach() {
    return `${this.name} is teaching ${this.subject}`;
  }
}

const teacher1 = new Teacher(`Mr. Syam`, 23, "JavaScript");
const person = new Person(`Tatma`, 23);

console.log(teacher1.introduce());
console.log(teacher1.teach());

console.log(`${person.introduce()} is ${person.age} years old`);

class BankAccount {
  #Balance = 0;

  constructor(accountHolder) {
    this.accountHolder = accountHolder;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#Balance += amount;
      return `Deposited ${amount}. New balance: ${this.#Balance}`;
    }
    return `Invalid amount`;
  }

  getBalance() {
    return this.#Balance;
  }
}

const account1 = new BankAccount(`Tatma`);

console.log(account1.deposit(100));
console.log(account1.getBalance());

try {
  console.log(account1.#Balance);
} catch (error) {
  console.log(error.message);
}
