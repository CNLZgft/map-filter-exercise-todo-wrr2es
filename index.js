const players = [
  {
    name: 'jordan',
    rating: 10,
  },
  {
    name: 'lebron',
    rating: 7,
  },
  {
    name: 'magic',
    rating: 9,
  },
  {
    name: 'kobe bryant',
    rating: 9,
  },
  {
    name: 'bird',
    rating: 9,
  },
  {
    name: 'doncic',
    rating: 8,
  },
];

//TODO using players

const namesUppercaseOver8 = players
  .filter((player) => player.rating > 8)
  .map((player) => player.name.toUpperCase());

const namnamesUppercaseOverReduce = players.reduce((nombres, player) => {
  if (player.rating > 8) {
    nombres.push(player.name.toUpperCase());
    // console.log(nombres);
  }
  return nombres;
}, []);

////////////////////////////

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>${namesUppercaseOver8.join(
  ', '
)}</h1> <br> ${namnamesUppercaseOverReduce}`;

//////////////////////

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

const fruitCount = fruitBasket.reduce((recuento, fruit) => {
  recuento[fruit] = (recuento[fruit] || 0) + 1;

  return recuento;
}, {});

console.log(fruitCount); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

appDiv.innerHTML = `${fruitCount}`;

/*function getOccurrence(array, recuento2) {
  return array.filter((fruit2) => fruit2 === recuento2).length;
}

fruitCount2;

appDiv.innerHTML = `${fruitCount2}`;*/

const arrayEjemplo = [1, 2, 3, 4, 5];

const timeoutEjemplo = setTimeout(() => console.log('hello, hello'), 2000);

clearTimeout(timeoutEjemplo);

console.log('this is the end');
