function sum(n1, n2) {
    return n1 + n2;
  }
function res(n1, n2) {
    return n1 - n2;
  }
function mul(n1, n2) {
    return n1 * n2;
  }
function div(n1, n2) {
    return n1 / n2;
  }

function modul(n1, n2) {
    return n1 % n2;
}

var result1 = sum(10, 25);
console.log("La suma entre 10 y 25 es:"+ + result1);
var result2 = res(10, 25);
console.log("La suma entre 10 y 25 es:"+ + result2);
var result3 = mul(10, 25);
console.log("La multiplicación entre 10 y 25 es:"+ + result3);
var result4 = div(10, 25);
console.log("La división entre 10 y 25 es:"+ + result4);
var result = modul(10, 25);
console.log("El modulo es: " + result);