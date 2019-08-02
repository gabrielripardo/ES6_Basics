// Functions

/* Named Function | Função com nome*/
function soma1(numero1, numero2) {
    return x + y;
}

/* Anonymous function | Função anônima*/
var soma2 = function (x, y) {
    return x + y;
}
console.log(soma1(10, 5));

/* ************ ES6 **************/
/* Arrow Function */
const soma3 = (x, y) => {
    return x + y;
}

const soma4 = (x, y) => x + y;

const array = [1, 2, 3, 4, 5].map(function(x){
    return x * 10;
})

console.log(array);

console.log(soma4)
