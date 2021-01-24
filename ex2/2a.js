const fs = require("fs");

fs.appendFile("from.txt", "something", (err) => {
  if (err) return console.log(err.message);
});


fs.writeFile("append.txt", "someone ", (err) => {
  if (err) return console.log(err.message);
});


fs.readFile("from.txt", "utf8", (err, data) => {
  if (err) return console.log(err.message);

  fs.writeFile("to.txt", `${data}`, (err) => console.log(err));
});
