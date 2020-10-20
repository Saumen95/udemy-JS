const syml = Symbol('apple');
console.log(syml);
const syml2 = Symbol('apple');
console.log(syml === syml2); //false

const bowl = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.151 },
    'orange': { color: 'orange', weight: 170.097 },
    'banana': { color: 'yellow', weight: 176.845 }
};
console.log(bowl);

//iterator
const digits = [0, 1, 2, 3, 4, 5, 6, 7, , 8, 9]
const arrItarator = digits[Symbol.iterator]();
console.log(arrItarator.next());

//Sets
const games = new Set([['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']]);
console.log(games);
gamesIPlay = new Set(['HOD2', 'Prince of Persia']);
unionSet = function (games) {
    for (game in games) {
        gamesIPlay.add(games);
    }
    return gamesIPlay;
}

unionSet();

//maps
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));
console.log(members.get('Evelyn')); //gets a value from maps

for (const member of members) {
    console.log(member); //iterating
}

members.forEach((value, key) => console.log(key, value));
