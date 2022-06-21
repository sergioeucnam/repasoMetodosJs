// Metodo trim, se usa para cadenas de texto (strings)
console.log('#####################################');
console.log('Metodo trim, se usa para cadenas de texto (strings)');
console.log('Recibe un string y retorna el string sin espacios iniciales o finales');
console.log('#####################################');

const stringTrim = (string) => {
    let stringEspaciado = string;
    return stringEspaciado.trim()
}
console.log(stringTrim('             a'));
console.log('#####################################');
console.log('#####################################');
console.log('#####################################');

//Metodo join(''), se usa para unir elementos de un array
console.log('**************************************');
console.log('**************************************');
console.log("Metodo join(''), se usa para unir elementos de un array");
const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
console.log(diasSemana);
let unirConGuiones = diasSemana.join('-')
let unirConAsteriscos = diasSemana.join('*')
console.log('Dias de la semana unidos por guiones: ', unirConGuiones);
console.log('Dias de la semana unidos por asteriscos: ', unirConAsteriscos);
console.log('**************************************');
console.log('**************************************');

//metodo .shift(), extrae el primer elemento del array
console.log('-------------------------------');
console.log('-------------------------------');
console.log('metodo .shift(), extrae el primer elemento del array');
const listaDeCompras = ['tomate', 'lechuga', 'leche', 'pan'];
console.log('listaDeCompras antes: ' + listaDeCompras);
const eliminado = listaDeCompras.shift();
console.log('Elemento eliminado: ' + eliminado);
console.log('listaDeCompras después: ' + listaDeCompras);
console.log('-------------------------------');
console.log('-------------------------------');
//metodo toString(), convierte una propiedad a string
console.log('+++++++++++++');
console.log('metodo toString(), convierte una propiedad a string');
let number = 6;
console.log('Se ingreso un valor del tipo:', typeof (number));
let string = number.toString()
console.log('convertimos el numero a string');
console.log('Se retorna un tipo de dato: ', typeof (string));

//metodos .split(), retorna un array separado por una RegEx
console.log('///////////////////');
console.log('///////////////////');
console.log('metodos .split(), retorna un array separado por una RegEx');
const names = 'Sergio Mancuello] Martin Fiori] Leo Mosconi] Franco Navarro] Nahuel Jimenez'
console.log('Nombres originales ', names);
console.log('**reemplazamos corchete con coma**', names.split(']'));

//metodo .splice(),
console.log('********');
console.log('metodo splice()');
const numbers = [1, 2, 3, 5, 6, 7]
console.log("arreglo de numeros incompleto: ", numbers);
console.log('inserta el numero 4 en el indice 3');
numbers.splice(3, 0, 4) //inserta el numero 4 en el indice 3
console.log('arreglo de numeros terminado: ', numbers);

//metodo .slice(),
console.log('--------');
console.log('metodo slice');
const modules = ['M1', 'M2', 'M3', 'M4'];
console.log('queremos seleccionar nuestro modulo actual: ', modules);
const actualModule = modules.slice(0, 1) //toma el valor del indice  0 hasta antes del indice 1, no incluye el indice 1
console.log('toma el valor del indice  0 hasta antes del indice 1, no incluye el indice 1');
const lastModule = modules.slice(3, 4)
console.log(actualModule);
console.log('queremos seleccionar el ultimo modulo : ', modules);
console.log('toma el valor del indice  3 hasta antes del indice 4, no incluye el indice 4');
console.log(lastModule);

