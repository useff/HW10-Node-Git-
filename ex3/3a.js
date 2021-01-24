const fs = require("fs");

fs.appendFile("newFile.txt", "there is sth in here...", (err) => {
  if (err) console.log(err.message);

  fs.readFile(
    "newFile.txt",
    {
      encoding: "utf8",
      flag: "r",
    },
    (err, data) => {
      if (err) console.log(err.message);

      console.log(data);
    }
  );
});
