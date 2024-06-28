// Q57  20/06/2024

// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, 
// giving us an idea of how well someone did overall.

let arrayGrades = [88, 95, 56, 72, 60]

let averageGrade = arrayGrades.reduce((total, grade)=>(total + grade),0) / arrayGrades.length

console.log(averageGrade);
