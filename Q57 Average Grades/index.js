// Q57  20/06/2024
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, 
// giving us an idea of how well someone did overall.
var arrayGrades = [88, 95, 56, 72, 60];
var averageGrade = arrayGrades.reduce(function (total, grade) { return (total + grade); }, 0) / arrayGrades.length;
console.log(averageGrade);
