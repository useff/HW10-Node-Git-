const stuff = require("./nodeModules");

for (let i = 0; i < stuff.end.length; i++) {

  if (stuff.end[i].Number.length > 11) {
    console.log(`${stuff.end[i].Name} phone numbers are${stuff.end[i].Number}`);
  } 
  else {
    console.log(`${stuff.end[i].Name} phone number is${stuff.end[i].Number}`);
  }
}

for (let i = 0; i < stuff.list_object_name.length; i++) {
  let x = 0;
  for (let j = 0; j < stuff.end.length; j++) {
    if (stuff.list_object_name[i].Name === stuff.end[j].Name) {
      x = 1;
      break;
    }
  }
  if (x != 1)
    console.log(`${stuff.list_object_name[i].Name} hasn't any phone number`);
}