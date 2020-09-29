console.log('%cGame array ', 'color: white; font-size: 2em; -webkit-text-stroke: 1px black;');

let games = ['minecraft', 'R6G', 'Dying Light'];

console.table(games);

games.push('csgo');
console.log('Method pop: %c' + games.pop(), 'color:green; ');

games.push('the last of us');
console.log('Method shift: %c' + games.shift(), 'color:green;');

console.log('Method join: %c' + games.join(', '), 'color:green; ');

console.log('Index of csgo: %c' + games.indexOf('minecraft'), 'color: blue');

console.log('Method forEach: {');
games.forEach(function (item, index, array) {
  console.log("  Item name: %c" + item + ";%c index of item: %c" + index, 'color: green', 'color:black', 'color: blue');
});
console.log('}');

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
console.log('%cRandom array ', 'color: white; font-size: 2em; -webkit-text-stroke: 1px black;');

let random = [1, 6, 8, 2, 9, 4, 13, 5, 7, 3, 15, 11, 10, 18, 12, 17, 14, 16, 20, 19];
console.log('Lenght of array: %c' + random.length, 'color:blue;');
console.log('Max: %c' + Math.max(...random), 'color: blue');
console.log('Min: %c' + Math.min(...random), 'color: blue');

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log('Average value: %c' + random.reduce(reducer) / random.length, 'color: blue');

console.log('Method indexOf: %c' + random.indexOf(1), 'color: blue');

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
console.log('%cGame array + random ', 'color: white; font-size: 2em; -webkit-text-stroke: 1px black;');

let addedArray = games.concat(random);
console.log(addedArray);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
