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

// A for loop to display all student results in the console.

// Use an if...else to assign grades (A, B, C, D, F) based on their score.
