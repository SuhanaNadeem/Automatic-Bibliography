var fs = require("fs");
var text = fs.readFileSync("./mytext.txt").toString('utf-8');
var textByLine = text.split("\n")