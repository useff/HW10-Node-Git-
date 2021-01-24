const input=require('prompt-sync')()


function logger(x) {
    console.log(x);
}

function fullName(name, family, cb) {
    let full = name + " " + family

    cb(full)


}

let Name=input("Enter a name: ")
let Family=input("Enter family name: ")


fullName(Name,Family,logger)

