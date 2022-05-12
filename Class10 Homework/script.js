"use strict";

// Academy Object

let academy = {
  name: "Web Programing",
  students: [
    "Frodo Baggins",
    "Tom Riddler",
    "Harry Potter",
    "Micheal Scott",
    "Jim Halpert",
    "Dwight Schrute",
    "Luke Skywalker",
    "Chandler Bing",
    "Joey Tribbiani",
  ],
  subjects: [
    "Java Script",
    "Advanced Java Script",
    "Java",
    "Python",
    "PHP",
    "CSS3",
    "HTML5",
    "C++",
    "C",
    "C#",
    "Angular",
    "React",
  ],
  start: "04.11.2021",
  end: "09.11.2022",
  numberOfClasses: function () {
    total = this.subjects.length * 10;
    console.log(`Number of classes: ${total}`);
  },
  printStudents: function () {
    for (const [i, student] of this.students.entries()) {
      const output = `${i + 1}) ${student}`;
      console.log(`${output.padEnd(25)}${"🧑"}`);
    }
  },
  printSubjects: function () {
    for (const [i, subject] of this.subjects.entries()) {
      const output = `${i + 1}) ${subject}`;
      console.log(`${output.padEnd(25)}${"💻"}`);
    }
  },
};

academy.numberOfClasses();

console.log(
  "----------------Subjects 💻----------------\n--------------------------------------------"
);

academy.printSubjects();

// Subject

function Subject(title, classes, elective, academy, students) {
  this.title = title;
  this.numberOfClasses = classes < 3 ? 10 : classes;
  this.isElective = elective;
  this.academy = academy;
  this.students = students;
}

let html5 = new Subject("HTML5", 2, true, { academy: "Programming" }, [
  "John Snow",
  "David Clark",
  "Steve Smith",
  "Mike Peterson",
  "Stela Orient",
  "Martin King",
  "Gorge Bush",
]);

// Student

function Students(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

function Student(firstName, lastName, age) {
  Object.setPrototypeOf(this, new Students(firstName, lastName, age));
  this.completedSubjects = [];
  this.academy = null;
  this.currentSubject = null;
  this.startAcademy = function () {
    this.startAcademy = academy.start;
    this.academy = academy.name;
    academy.students.push(this.firstName + " " + this.lastName);
  };
  this.startSubject = function () {
    if (this.academy && academy.subjects.includes("HTML5")) {
      this.startSubject = html5.title;
    } else {
      console.log("⛔Error no current Subject");
    }
    html5.students.push(this.firstName + " " + this.lastName);
    if (this.currentSubject) {
      this.completedSubjects.push(this.currentSubject);
      this.currentSubject = this.startSubject;
    }
  };
}

let student1 = new Student("Gregori", "Bavaro", 30);
let student2 = new Student("Dale", "Denton", 33);
let student3 = new Student("Soul", "Silver", 29);

// student 1
student1.startAcademy();
student1.startSubject();
// student 2
student2.startAcademy();
student2.startSubject();
// student 3
student3.startAcademy();
student3.startSubject();

console.log(
  "----------------Students 🧑----------------\n--------------------------------------------"
);

academy.printStudents();

console.log(student1);
