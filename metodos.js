// Metodo trim, se usa para cadenas de texto (strings)
const stringTrim = (string) => {
    let stringEspaciado = string;
    return stringEspaciado.trim()
}
console.log(stringTrim('             a'));

//Metodo join(''), se usa para unir elementos de un array
const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
let unirConGuiones = diasSemana.join('-')
let unirConAsteriscos = diasSemana.join('*')
console.log(unirConGuiones);
console.log(unirConAsteriscos);

//metodo .shift(), extrae el primer elemento del array
const listaDeCompras = ['tomate', 'lechuga', 'leche', 'pan'];
console.log('listaDeCompras antes: ' + listaDeCompras);
const eliminado = listaDeCompras.shift();
console.log('listaDeCompras después: ' + listaDeCompras);
console.log('Elemento eliminado: ' + eliminado);

//metodo toString(), convierte una propiedad a string
let number = 6;
let string = number.toString()
console.log(string);

//metodos .split(), retorna un array separado por una RegEx

const names = 'Sergio Mancuello] Martin Fiori] Leo Mosconi] Franco Navarro] Nahuel Jimenez'
console.log(names);
console.log(names.split(']'));

//metodo .splice(),
const numbers = [1, 2, 3, 5, 6, 7]
numbers.splice(3, 0, 4) //inserta el numero 4 en el indice 3
console.log(numbers);

//metodo .slice(),
const modules = ['M1', 'M2', 'M3', 'M4'];
const actualModule = modules.slice(0, 1) //toma el valor del indice  0 hasta antes del indice 1, no incluye el indice 1
const lastModule = modules.slice(3, 4)
console.log(actualModule);
console.log(lastModule);

