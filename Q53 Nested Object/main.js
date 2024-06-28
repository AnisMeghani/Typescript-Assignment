// Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list 
// that shows what a computer programmer knows, like coding languages, tools, and software frameworks.
// Find a way to get three specific skills from this list and show them
// All computer programmer skills list
var computerProgrammer = {
    language: ['Java', 'Typescript', 'Python'],
    tools: ['Git', 'Webpack', 'Docker'],
    frameworks: ["React", "Angular", "Vue"],
};
// getting specific skills from the list
var language = computerProgrammer.language, tools = computerProgrammer.tools, frameworks = computerProgrammer.frameworks;
// showing each skill from each category
console.log("Language: ".concat(language[0], " Tool: ").concat(tools[1], " Framework: ").concat(frameworks[2]));
