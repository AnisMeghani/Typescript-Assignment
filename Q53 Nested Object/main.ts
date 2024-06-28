// Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list 
// that shows what a computer programmer knows, like coding languages, tools, and software frameworks.
// Find a way to get three specific skills from this list and show them

// All computer programmer skills list
let computerProgrammer = {
    language: ['Java', 'Typescript', 'Python'], 
    tools: ['Git', 'Webpack', 'Docker'],
    frameworks: ["React", "Angular", "Vue"],
}  
// getting specific skills from the list
let {language , tools , frameworks} = computerProgrammer  
// showing each skill from each category
console.log(`Language: ${language[0]} Tool: ${tools[1]} Framework: ${frameworks[2]}`);
