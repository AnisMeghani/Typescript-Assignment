// Q58   20/06/2024

//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// Explain & TIP: This program can handle any number of scores you give it,
// and it tells you the average score. Handy for seeing how well you did overall!

// creating array of scores
// let mixexScore = [15, 3, 48, 72, 0, 2, 32]

// let averageScore = mixexScore.reduce((total, score)=>(total + score) , 0) / mixexScore.length

// //.tofixed lagaya ha taake decimal k aage sirf 2 digit aaen
// console.log(averageScore.toFixed(2));

//now solve it through function
function averageScore(...scores: number[]):number{
    let totalNumber = scores.reduce((sum, score) => (sum + score), 0)
    return totalNumber / scores.length
}
console.log(averageScore(15, 3, 48, 72, 0 , 2, 32).toFixed(2));
