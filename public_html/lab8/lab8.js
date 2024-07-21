// Exercise 1
String.prototype.filter = function (bannedWords) {
  const words = this.split(" ");
  const filteredWords = words.filter((word) => !bannedWords.includes(word));
  return filteredWords.join(" ");
};

const sentence = "This house is not nice!";
console.log(sentence.filter(["not"]));

// Exercise 2
Array.prototype.bubbleSort = function () {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

// Exercise 3
function Person(name) {
  this.name = name;
}

function Teacher(name) {
  Person.call(this, name);
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

const teacher1 = new Teacher("John");
teacher1.teach("Math");

// Exercise 4
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greeting = function () {
  console.log(`Greetings, my name is ${this.name} and I am
${this.age} years old`);
};

Person.prototype.salute = function () {
  console.log(
    "Good morning!, and in case I don't see you, good afternoon, good evening and good night!"
  );
};

function Student(name, age, major) {
  Person.call(this, name, age);
  this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function () {
  console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
  Person.call(this, name, age);
  this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.greeting = function () {
  console.log(
    `Good day, my name is ${this.name} and I am in the ${this.department} department.`
  );
};

const student = new Student("Alice", 20, "Computer Science");
const professor = new Professor("Dr. Smith", 50, "Physics");

student.greeting();
student.salute();

professor.greeting();
professor.salute();
