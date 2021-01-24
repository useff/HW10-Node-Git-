const fs = require("fs");

fs.readFile("from.txt", "utf8", (err, data) => {
  if (err) console.log(err.message);

  fs.writeFile("to.txt", data, (err) => {
    if (err) console.log(err.message);

    fs.readFile("append.txt", "utf8", (err, datas) => {
      if (err) console.log(err.message);

      fs.appendFile("to.txt", datas, (err) => {
        if (err) console.log(err.message);
      });
    });
  });
});
