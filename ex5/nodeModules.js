function sum(a, b) {
    return (a + b);
}

function minus(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function division(a, b) {
    return (a / b)

}


function calculator(a, b, cb) {
    let res = cb(a, b)

    console.log(res);
}
module.exports = {
    sum,
    minus,
    multiply,
    division,
    calculator
}
