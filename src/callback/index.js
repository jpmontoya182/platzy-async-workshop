// realiza el calculo
function sum(num1, num2) {
    return num1 + num2;
}

// recibe los parametros y la funcion callback y se encarga de ejecutarla
function calc(num1, num2, callback ) {
    return callback(num1, num2);
}

// llamamos la funcion del calculo.
console.log(calc(8, 2, sum));


// ---------------------
// realiza el calculo
function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date)
    }, 3000);
}
// funcion imprimir
function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);