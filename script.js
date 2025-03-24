/*
    Diferencias entre var-let y const en javascript
    -var: Se puede reasignar y redeclarar en cualquier parte del código.
    -let: Se puede reasignar, pero NO redeclarar.
    -const: No se puede readsignar, ni redeclarar.

*/

//VAR

var nombre = "Axel" //Declaramos la variable
nombre = "Axel2" // Reasignamos el valor
var nombre = "Axel3" // Redeclarar - PROBLEMA por eso no se recomienda utilizar
console.log(nombre);

//LET

let apellido = "Quintana" //Declarar la variable
apellido = "Mora" // Reasignar
// let apellido = "X" ESTO DARÍA ERROR
console.log(apellido)

//CONST

const g = "9.81 m/s^2"
console.log(g)

//OPERADORES

let suma = 3 + 9
let resta = 3 - 9
let multiplicacion = 3 * 9
let division = 3 / 9
let modulo = 11 % 3
let exponente = 2 ** 3

console.log(suma, resta, multiplicacion, division, modulo, exponente)

//Ejemplos de jerarquía

let operacion1 = 10 + 5 * 2
let operacion2 = (10 + 5) * 2 
console.log(operacion1, operacion2)

//Operadores de comparación

let mayor = 7 > 5 
let menor = 3 < 1
let dif = 1 != 0 
let igual = 1 == "1"
let difest = 1 !== "1"
let igualest = 1 === "1"
console.log(mayor, menor, dif, igual, difest, igualest)

//Operadores lógicos

let and = (5 > 3) && (10 == "10")
let or = (5 != 5) || (10 === 0)
let not  = !(10 < 5)
let logico1 = (true && true) || false
console.log(and, or, not, logico1)


//ESTRUCTURAS DE CONTROL

/*
    if
    -Permite ejecutar código si se cumple una condición
    - Puede usarse con operadores lógicos y de comparación
*/

let edad = 22
let tieneINE = false

if (edad >= 18 && tieneINE){
    console.log("Puedes votar :)")
}
    else { console.log("Chamaco miado");}

if (edad < 18){
    console.log("Espera, aún no eres mayor de edad");
} else if(edad >= 18){
    console.log("Tramite su INE");
}


