/* var vs let vs const

var => function scope
let => block scope
const => constant
*/

function funcaoQualquerVar() {
    var a = 123;
    console.log(a);
}

funcaoQualquer();


function funcaoQualquerLet() {
    let a = 123;
    console.log(a);
}

funcaoQualquerLet();

function funcaoQualquerLet2() {
    if (true) {
        let a = 123;
    }
    {
        var b = 555;
    }
    console.log(b);
}

function funcacaoQualquerConst() {
    const name = "Renam Pallin"; //nunca vai mudar!

    /* ... */
    name = "Fulano";
    console.log(name);
}

function funcaoQualquer(){
    var name = "Renan Pallin";

    /* ... */
    var name = "Fulano";
    console.log(name);
}

