/* Spread operator (...) 
 Uni/junta elementos de arrays diferentes
 Também junta objetos 
*/
const unidades = [1, 2, 3];
const dezenas = [10, 20, 30];

const numeros = [...unidades, ...dezenas];
console.log(numeros)

const obj1 = {
    a: 123
};

const obj2 = {
    b: "Olá"
};

const obj3 = { ...obj1, ...obj2 }; //Une os objetos dos dois array no array obj3
console.log(obj3);
