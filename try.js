var fs = require("fs");
var text = fs.readFileSync("./mytext.txt").toString('utf-8');
var textByLine = text.split("\n")
console.log(textByLine)
let links = ["https://www.khanacademy.org/science/physics/forces-newtons-laws", "https://www.bettycrocker.com/recipes/ultimate-chocolate-chip-cookies/77c14e03-d8b0-4844-846d-f19304f61c57", "https://www.rei.com/learn/expert-advice/training-for-your-first-marathon.html"];

console.log(links);