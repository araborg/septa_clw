/*
Student Grades Manager
Goal: 
Create a program that manages a list of students 
and their scores.

Requirements:
    •    Store at least 5 students as objects in an 
    array (each with a name and score).

    •    Use:
    
    •    map() to get all student names.
    
    •    filter() to find those who passed (score ≥ 50).
    
    •    reduce() to find the average score.
    
    •    A for loop to display all student results in the console.
    
    •    Use an if...else to assign grades (A, B, C, D, F) based on their score.



*/

/* Store at least 5 students as objects in an 
    array (each with a name and score). */

const studentList = [
	{ name: "Kola", score: 60 },

	{ name: "Uche", score: 80 },

	{ name: "Alli", score: 50 },

	{ name: "Godfrey", score: 30 },

	{ name: "Salah", score: 70 },
];

// map() to get all student names.
const studentNames = studentList.map((student) => student.name);
console.log(studentNames); // [ "Kola", "Uche", "Alli", "Godfrey", "Salah" ]

// filter() to find those who passed (score ≥ 50).
const targetScore = 50;
const scoresAbove50 = studentList
	.filter((student) => student.score >= targetScore)
	.map((sortedStudent) => sortedStudent.name);

console.log(scoresAbove50); // ["Kola", "Uche", "Alli", "Salah" ]

// reduce() to find the average score.
const averageScore =
	studentList
		.map((student) => student.score)
		.reduce((accu, el) => accu + el, 0) / studentNames.length;

console.log(averageScore); // 58

// A for loop to display all student results in the console.
let result = [];

for (let i = 0; i < studentNames.length; i++) {
	let score = studentList[i];

	result.push(score.name);
}

console.log(result); //  [ "Kola", "Uche", "Alli", "Godfrey", "Salah" ]

// Use an if...else to assign grades (A, B, C, D, F) based on their score.
const score = document.querySelector("#score");
const btn = document.querySelector("#btn");
const output = document.querySelector(".output");

function getInput(e) {
	e.preventDefault();

	const inputScore = Number(score.value);

	let grade;

	if (inputScore >= 90) {
		grade = "A+";
	} else if (inputScore >= 80) {
		grade = "A";
	} else if (inputScore >= 70) {
		grade = "B+";
	} else if (inputScore >= 60) {
		grade = "B";
	} else if (inputScore >= 50) {
		grade = "C";
	} else if (inputScore >= 40) {
		grade = "D";
	} else if (inputScore >= 30) {
		grade = "E";
	} else {
		grade = "F";
	}

	output.textContent = grade;
	score.value = "";
}

btn.addEventListener("click", getInput);
