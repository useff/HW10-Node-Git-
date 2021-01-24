const fs = require("fs");

let data = fs.readFileSync("from.txt", "utf-8");

fs.writeFileSync("to.txt", data);
