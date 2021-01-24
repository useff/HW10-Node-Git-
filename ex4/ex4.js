const fs = require("fs");
let names;
let numbers;

names= fs.readFileSync('names.txt','utf8')
names=names.split("\r\n")



numbers=fs.readFileSync('numbers.txt','utf8')
numbers=numbers.split("\r\n")



   

console.log(numbers );
