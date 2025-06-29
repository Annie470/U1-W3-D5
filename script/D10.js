/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
// const me = {
//   name: "Annarella",
//   surname: "De Lise",
//   age: 30, //ancora per poco :(
// };
//oppure l'esercizio intende di creare PRIMA e POI assegnargli delle proprietà?
const me = {};
Object.assign(me, { name: "Annarella", surname: "De Lise", age: 30 });
//oppure anche così
// me.name = "Annarella";
// me.surname = "De Lise";
// me.age = "30";
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["Java", "HTML", "CSS"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("JavaScript");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = () => {
  return Math.ceil(Math.random() * 6);
};
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = (n1, n2) => {
  // if (n1 > n2) {
  //   return n1;
  // } else {
  //   return n2;
  // }
  return Math.max(n1, n2); //molto bello l'oggetto Math, grazie Mentor
};
console.log(whoIsBigger(15, 97));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (stringa) => {
  return stringa.split(" ");
};
console.log(splitMe("Ho fatto schifo al bench"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (stringa, booleano) => {
  if (typeof booleano !== "boolean") {
    return "Assicurati di aver inserito i parametri corretti: una stringa come primo parametro e un booleano come secondo";
  }
  // if (booleano === true) {
  //   return stringa.slice(1, stringa.length);
  // } else {
  //   return stringa.slice(0, -1);
  // }
  //essendo solo due condizioni provo l operatore ternario per non fare due if orribili
  return booleano === true
    ? stringa.slice(1, stringa.length)
    : stringa.slice(0, -1);
};
console.log(deleteOne("Fa tanto caldo oggi", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = (stringaAlfanumerica) => {
  // converto stringa in array
  const arrStringa = stringaAlfanumerica.split(" ");
  //filtro array in base a condizione che i != da un num
  //ogni i deve essere passata a numero e se è NaN passa in array
  const arrFiltrato = arrStringa.filter((i) => isNaN(parseInt(i)));
  //ri-converto l'array in stringa
  const nuovaStringa = arrFiltrato.join(" ");
  //restituisco la stringa nuova
  return nuovaStringa;
};
console.log(onlyLetters("Oggi ho bevuto 8000 caffè"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = (stringa) => {
  //cerco la @ //se c'è ritorna true
  return stringa.includes("@") ? true : false; //madò che bello questo operatore ternario
};
console.log(isThisAnEmail("anna_delise@libero.it"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {
  // return (giorno = new Date().getDay()); mi restituisce un numero, il numero della settimaaaaanaaaaaaaa
  //creo un array di giorni
  const arrGiorni = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  //prendo il numero del giorno da Date()
  let giorno = new Date().getDay();
  //restituisco  l'elemento che come indice giorno
  return arrGiorni[giorno];
};
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().
  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = (n) => {
  //deve invocare dice() * n
  let i = 0;
  const obj = { sum: 0, values: [] };
  //deve tornare un {} che abbia .sum:value la somma di tutti i risultati di dice()
  while (i < n) {
    // deve salvare il risultato corrente di dice() e sommarlo e inserirlo nell array
    let resultDice = dice();
    obj.values.push(resultDice);
    // obj.sum += resultDice;
    // // con reduce che pavoneggiamento
    obj.sum = obj.values.reduce((acc, n) => acc + n, 0);
    i++;
  }
  return obj;
  // per ogni roll devo salvare il valore in un array {}.values[]
};
console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
// console.log(Date()) cosa mi ritorna?
const howManyDays = (data) => {
  // //oggi
  //   const oggi = new Date();
  //   // la data inserita
  //   const dataInserita = new Date(data);
  //   //la loro differnza mi restituisce millisecondi
  //   const millisecondi = oggi - dataInserita;
  const millisecondi = new Date() - new Date(data);
  //come si convertono i millisecondi in giorni -> grazie google :)
  return (giorni = Math.floor(millisecondi / (1000 * 60 * 60 * 24)));
};
console.log(howManyDays("2025-05-12"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = (data) => {
  //prendo il mese e il giorno di oggi
  const oggi = new Date().getDate(); // mi da il giorno esatto di oggi
  const mese = new Date().getMonth() + 1; //perchè giustamente funziona come i giorni
  //il mio complino 19/11
  if ((oggi === 19) & (mese === 11)) {
    return true;
  } else {
    return false;
  }
};
console.log(isTodayMyBirthday());

// Arrays & Oggetti
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const Igor = {
  specie: "cane",
  razza: "fantasia",
  anni: "10",
};
console.log(Igor);
const deleteProp = (oggetto, stringa) => {
  delete oggetto[stringa]; //elimino la proprietà oggetto.stringa era il valore
  return oggetto;
};
console.log(deleteProp(Igor, "anni"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
//ma non l'avevamo gia fatto?
const newestMovie = (arr) => {
  let newest = arr[0];
  arr.forEach((film) => {
    if (parseInt(film.Year) > parseInt(newest.Year)) {
      newest = film;
    }
  });
  return newest;
};
console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (arr) => arr.length;
console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = (arr) => {
  const soloAnni = [];
  arr.map((film) => {
    //tanto hanno stessa lunghezza
    soloAnni.push(film.Year);
  });
  return soloAnni;
};
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (arr) => {
  return arr.filter((film) => parseInt(film.Year) < 2000);
};
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (movies) => {
  return movies.reduce((acc, curr) => {
    return acc + parseInt(curr.Year);
  }, 0);
};
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (stringa) => {
  return movies.filter((film) =>
    film.Title.toLowerCase().includes(stringa.toLowerCase())
  );
};
console.log(searchByTitle("dogtown"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = (stringa) => {
  const obj2 = {
    match: [],
    unmatch: [],
  };
  movies.forEach((film) => {
    film.Title.toLowerCase().includes(stringa.toLowerCase())
      ? obj2.match.push(film)
      : obj2.unmatch.push(film); //ancora bellissimissimo
  });

  return obj2;
};
console.log(searchAndDivide("endgame"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = (n) => {
  return movies.filter((film, i) => i !== n);
};
console.log(removeIndex(4));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const trovaContainer = () => {
  const container = document.getElementById("container");
  return container;
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const tuttiITd = () => {
  const collectionTd = document.getElementsByTagName("td");
  return collectionTd;
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const testoTd = () => {
  const collectionTd = document.getElementsByTagName("td");
  for (let i = 0; i < collectionTd.length; i++) {
    console.log(collectionTd[i].textContent);
  }
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const aggBgColor = () => {
  const nodeListA = document.querySelectorAll("a");
  nodeListA.forEach((a) => {
    a.style.backgroundColor = "red";
  });
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const aggiungiLi = () => {
  //prendo la ul con id myList
  const ul = document.getElementById("myList");
  //creo li
  const li = document.createElement("li");
  //appnedo li al padre
  ul.appendChild(li);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const svuotaUl = () => {
  const ul = document.getElementById("myList");
  ul.innerHTML = ""; //non ho tempo per lavorare sui figli :( con removeChild() in ciclooooo
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const classeAiTr = () => {
  const nodeListTr = document.querySelectorAll("tr");
  nodeListTr.forEach((tr) => {
    tr.classList.add("test");
  });
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.
  Esempio:
  halfTree(3)
  *
  **
  ***
*/
const halfTree = (n) => {
  //n è l altezza
  for (let i = 1; i <= n; i++) {
    let ramo = "";
    //ma devo ciclare l'asterisco che ad ogni giro aumenta fino ad arrivare a i asterischi
    for (let b = 0; b < i; b++) {
      ramo = ramo + "*";
    }
    console.log(ramo);
  }
};
halfTree(4);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.
  Esempio:
  tree(3)
    *
   ***
  *****
*/
const tree = (n) => {
  // n è sempre l altezza
  for (let i = 1; i <= n; i++) {
    let ramo = "*"; //senno mi mangia la punta
    let spazio = "";
    //devo ridurre lo spazio a sinistra prima dell'asterisco fino a 0
    //l'asterisco però occupa sempre uno spazio
    //se sono tre righe e quindi l'altezza di 3, lo spazio del primo asterisco sarà n-1
    //n-i si aggiorna di uno ad ogni ciclo
    //per creare lo spazio che diminuisce ogni volta
    for (let c = 0; c < n - i; c++) {
      spazio = spazio + " ";
    }
    //ciclo gli asterischi come prima che mi restitiscono il ramo
    //solo che adesso aumentano di due ad ogni riga
    for (let b = 1; b < i; b++) {
      //parto da b=1 perche mi deve saltare la prima volta
      ramo = ramo + "**"; //ne aggiungo 2
    }
    //funzionerà? devo unire PRIMA spazio POI *
    console.log(spazio + ramo);
  }
};
tree(7);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = (n) => {
  //come faccio a capire se un numero è primo?
  //maggiore di 1
  if (n < 1) return false;
  //2 unico pari primo ma tutti gli altri no
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  //SE divisibile per i numeri compresi tra 3 e la sua radice quadrata ----> grazie Google :)
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    // i+=2 perche mi salta i pari
    if (n % i === 0) return false;
  }
  return true; // se esclude tutto il resto
};
console.log(isItPrime(11));

/* Questo array viene usato per gli esercizi. Non modificarlo. */
