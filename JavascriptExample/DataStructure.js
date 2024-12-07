const studentName = `Syam`;
let studentAge = 23;
let studentAgeString = `24`;
let studentGrade = undefined;

// String
let courseName = `Javascript 101`;
// Float

//Boolean
let isPassing = true;
//Undefined
let nextCourse;
//Null
let certificateNumber = null;

let courseModules = [`Variables`, `Functions`, `Objects`, `Arrays`];

let students = {
  name: `Syam`,
  age: 23,
  grades: [85, 90, 95],
  contact: {
    email: `satriasyamm@gmail.com`,
    phone: `087802558582`,
  },
};

let saldo = 10000;
let uang = `10000`;

if (saldo == uang) {
  console.log(`Bener`);
} else {
  console.log(`Salah`);
}

console.log(students.name);
console.log(courseModules[3]);

console.log(studentAge + studentAgeString);
let namaUmur = `Nama : ${studentName} dengan Umur : ${studentAge}`;

console.log(namaUmur);

let homework = 90;
let midterm = 85;
let final = 80;

let score = 80.5;
let attendance = 80;
let hasPassingGrade = score >= 60;
let hasAttendance = true;

let willPass = hasPassingGrade && hasAttendance;

let needsHelp = score < 60 || attendance < 80;

let isFailing = !hasPassingGrade;

console.log(`This student ${willPass ? "Passed" : "Failed"}`);
console.log(`This student ${needsHelp ? "Need Helps" : "Doesn't Need Helps"}`);
console.log(`This student ${isFailing ? "Failed" : "Pass the Passing Grade"}`);
