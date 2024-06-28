//Q62   21/06/2024

//Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, 
// and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information,
// making your code more organized.

interface studentTemplate {
    name: string,
    age: Number,
    classes: string[]
}
//using studentTemplate interface in same pattern
let student1 : studentTemplate ={
    name: "Annu",
    age: 30,
    classes: ["AI Metaverse", "Graphics Designing", "Typescript"]
}

//using studentTemplate in another student
let student2: studentTemplate={
    name: "Ali",
    age: 32,
    classes: ["English", "Accounts", "Computer"]
}

//showing Students Information
console.log(student1);
console.log(student2);

