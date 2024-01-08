
/** Ejercicio para esta sesion
 * 
 * EJERCICIO 1
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean 
 */

//SOLUCIÓN 

var nombreCompleto = "Ana Paula";
var age = 27;
var apellidoPaterno = "Garfias"
var apellidoMaterno = "Rios"
let postreFavorito = "Helado";
let vivo = true;
let hombre = false;
const NUMERO_TELEFONICO = 4431697064;
const NUMERO_CASA = 514;
const NUMERO_EMPLEADO = 3092809;

 /* EJERCICIO 2 
 * Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 */

//SOLUCIÓN

console.log("EJERCICIO 2")

var num1 = 59;
var num2 = 93;
var num3 = 48;
var num4 = 20;

var operation1 = num3 + num2;
console.log(operation1);
var operation2 = num1 - num4;
console.log(operation2);
var operation3 = num4 * num2;
console.log(operation3);
var operation4 = num3 / num4;
console.log(operation4);

 /* EJERCICIO 3
 * Declarar variables que concatenen cadenas de texto
 * -5 mensajes diferentes en pantalla, sin limite de palabras.
 */

 //SOLUCIÓN

 console.log("EJERCICIO 3")

const STR1 = "Ana Paula"
const STR2 = "Hello"
const STR3 = "welcome back"
const STR4 = "!"

const STR5 = (STR2 + " " + STR1 + ", " + STR3 + STR4);
console.log(STR5);

const NOMBRE = "Elizabeth" 
const APELLIDO_PATERNO = "Rios" 
const APELLIDO_MATERNO = "Trinidad"

const NOMBRE_COMPLETO = (STR2 + " " + NOMBRE + " " + APELLIDO_PATERNO + " " + APELLIDO_MATERNO + STR4)
console.log(NOMBRE_COMPLETO);

const COMIDA_FAVO = "pizza";
const POSTRE_FAVO = "helado";
const EJERCICIO_FAVO = "gym";

const PLAN = ("Vamos a comer " + COMIDA_FAVO + " " + "y luego por un " + POSTRE_FAVO + " " + "después de ir al " + EJERCICIO_FAVO + STR4)
console.log(PLAN);

const STR6 =(STR2 + " " + STR1 + " and " + NOMBRE + ", " + STR3 + " to the " + EJERCICIO_FAVO + STR4);
console.log(STR6);

const NUMERO_CELULAR = 4431655884;
const CORREO_PERSONAL = "paulagarfias4@gmail.com";

const STR7 = ("Los datos de " + STR1 + " son " + NUMERO_CELULAR + " y " + CORREO_PERSONAL + ", comunicate")
console.log(STR7);

 /* EJERCICIO 4
 Declarar 5 variables y convertirlas a otro tipo de dato
 */

 //SOLUCIÓN

 let nombre = "Heriberto";
 let edad = 45;
 let condicional = true;
 let id = 874225;
 let datoCondicional = false;

 let nombreNumerico = Number(nombre);
 let edadString = String(edad);
 let condicionalNumerico = Number(condicional);
 let idString = String(id);
 let datoCondicionalNumerico = Number(datoCondicional);

 /*  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */


