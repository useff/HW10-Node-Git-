const fs = require("fs");

//some datas
let names;
let numbers;
let finalName = [];
let finalNumber = [];
let list_object_name = [];
let list_object_number = [];
let end = [];

//reading and making list of our datas
names = fs.readFileSync("names.txt", "utf8");
names = names.split("\r\n");

numbers = fs.readFileSync("numbers.txt", "utf8");
numbers = numbers.split("\r\n");

//trying to remove "-" form our data
for (let i = 0; i < names.length && numbers.length; i++) {
    finalName.push(names[i].split("-"));
    finalNumber.push(numbers[i].split("-"));

    finalName = finalName.flat();
    finalNumber = finalNumber.flat();
}


//creating objects for names and numbers for merging them and pushing them to a list...
function object_name(id, Name) {
    this.id = id;
    this.Name = Name;
}

function object_number(id, Number) {
    this.id = id;
    this.Number = Number;
}
for (let i = 0; i < finalName.length - 1; i++) {
    if (i % 2 === 0) {
        list_object_name.push(
            (finalName[i] = new object_name(finalName[i], finalName[i + 1]))
        );
    }
}

for (let i = 0; i < finalNumber.length - 1; i++) {
    if (i % 2 === 0) {
        list_object_number.push(
            (finalNumber[i] = new object_number(finalNumber[i], finalNumber[i + 1]))
        );
    }
}


//merging our objects into one list
for (let i = 0; i < list_object_name.length; i++) {
    for (j = 0; j < list_object_number.length; j++) {
        if (list_object_name[i].id === list_object_number[j].id) {
            res = {
                ...list_object_name[i],
                ...list_object_number[j],
            };
            end.push(res);
        }
    }
}

//making our more than 2 numbers ids to one element...
let y = 0;

for (let i = 0; i < end.length; i++) {
    for (let j = 0; j < end.length; j++) {
        if (end[i].id === end[j].id && end[i].Number !== end[j].Number) {
            end[i].Number += "," + end[j].Number;
            end.splice(j, 1);
            y = 1;
        }
    }

    if (y === 1) break;
}
module.exports={end,list_object_name}