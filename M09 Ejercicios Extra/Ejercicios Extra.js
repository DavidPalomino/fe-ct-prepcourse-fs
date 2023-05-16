/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código
   const llaves = Object.keys(objeto)
   const valores = Object.values(objeto)
   let container = []

   for (let i = 0; i < llaves.length; i++) {
    container.push([llaves[i],valores[i]])
   }
   return container
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let letters = string.split('');
   letters.sort();
   let counter = {};
   for (let i = 0; i < letters.length; i++) {
     if (counter[letters[i]]) {
       counter[letters[i]]++;
     } else {
       counter[letters[i]] = 1;
     }
   }
   return counter;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var letras = string.split('')
   var nuevoOrden = [ ]
   var nuevoOrden2 = [ ]
   
   for (let i = 0; i < letras.length; i++) {
      if(letras[i] === letras[i].toUpperCase()){
         nuevoOrden.push(letras[i])
      }else{
         nuevoOrden2.push(letras[i])
      }
   }
   
   var ordenFinal = nuevoOrden.concat(nuevoOrden2)
   var union = ordenFinal.join('')
   
   return union
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let containerOne = []
   let containerTwo = []
   let containerThree = []
   let finalOrder 
   
   let words = frase.split(' ')
   
   for(let i = 0 ; i < words.length; i++ ){
      containerOne.push(words[i].split(''))
   }
   
   for(let i = 0; i < containerOne.length; i++){
   containerTwo.push(containerOne[i].reverse())
   }
   
   for(let i = 0 ; i < containerTwo.length; i++){
   containerThree.push(containerTwo[i].join(''))
   }
   
   finalOrder = containerThree.join(' ')
   
   return finalOrder
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numberToString = String(numero)
   let numbers = numberToString.split('')
   let size = numbers.length

   for (let i = 0; i < size/2; i++) {
      if (numbers[i] !== numbers[size - 1 - i]) {
         return "No es capicua"
      }else{
         return "Es capicua"
      }
   }  
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let letters = string.split("")
   let containerOne = []
   let newString

   for (let i = 0; i < letters.length; i++) {
      if(letters[i].toLowerCase() !== "a" && letters[i].toLowerCase() !== "b" && letters[i].toLowerCase() !== "c" ){
      containerOne.push(letters[i])
      }
   }
   newString = containerOne.join('')
   return newString
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let numerosIguales = []

   for(let i = 0 ; i < array1.length; i++){
      for (let j = 0; j < array2.length; j++) {
         if (array1[i] === array2[j]) {
            numerosIguales.push(array1[i])
            break
         }
      }
   }
   return numerosIguales
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
