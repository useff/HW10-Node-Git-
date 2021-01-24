const fs = require("fs");

let fromData = fs.readFileSync("from.txt", "utf8");

fs.writeFileSync("to.txt", fromData);

let appendData = fs.readFileSync("append.txt", "utf8");

fs.appendFileSync("to.txt", appendData);