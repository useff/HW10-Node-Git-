const fs = require("fs");

fs.appendFileSync("newFile.txt", "there is sth in ...")

fs.readFileSync('newFile.txt','utf8')