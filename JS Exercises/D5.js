/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
let i=0;
while (i<pets.length){
  console.log (pets[i]);
  i++
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort ();
console.log (pets) 

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

i=pets.length -1;
while (i>=0){
  console.log (pets[i]);
  i--
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

n1=pets[0];
n2=pets[pets.length -1];
pets [0] = n2;
pets[pets.length -1] = n1;

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
i=0;
while(i<cars.length)
{
  cars[i].licensePlate='AAZZ345'
  i++
}
console.log (cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push ({})
console.log (cars);
i=0;
while(i<cars.length - 1)
{
  cars[i].trims.pop ()
  i++
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = []
i=0;
while(i<cars.length - 1)
{
  justTrims[i] = cars[i].trims.splice (0,1);
  i++
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/* i=0
while (i<cars.length - 1){
  let c = [];
  c= cars[i].color.split("");
  for(let x=0; x<c.length - 1; x++) {
    if(c[x] === ("b")){
      console.log ("Fizz")
    }
    else if(){
      console.log ("Buzz")
    }
  }
  i++
}
 */


///////////////////////////////////////////////////////////NON ANCORA RIUSCITO/////////////////////////////////////////////////////////////////

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

i=0;
while (i <= numericArray.length-1){
    console.log (numericArray[i]);
  if (numericArray[i]===32){
    break
  }
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const arr = [];
i=0;
while (i<charactersArray.length -1){
  switch (charactersArray[i]){
    case 'a': arr.push (1); break;
    case 'b': arr.push (2); break;
    case 'c': arr.push (3); break;
    case 'd': arr.push (4); break;
    case 'e': arr.push (5); break;
    case 'f': arr.push (6); break;
    case 'g': arr.push (7); break;
    case 'h': arr.push (8); break;
    case 'i': arr.push (9); break;
    case 'j': arr.push (10); break;
    case 'k': arr.push (11); break;
    case 'l': arr.push (12); break;
    case 'm': arr.push (13); break;
    case 'n': arr.push (14); break;
    case 'o': arr.push (15); break;
    case 'p': arr.push (16); break;
    case 'q': arr.push (17); break;
    case 'r': arr.push (18); break;
    case 's': arr.push (19); break;
    case 't': arr.push (20); break;
    case 'u': arr.push (21); break;
    case 'v': arr.push (22); break;
    case 'w': arr.push (23); break;
    case 'x': arr.push (24); break;
    case 'y': arr.push (25); break;
    case 'z': arr.push (26); break;
  }
  i++;
}
console.log (arr)

