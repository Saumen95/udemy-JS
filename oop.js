const cat = {
    age: 2,
    name: 'Bailey',
    meow: function () {
        console.log('Meow!');
    },
    greet: function (name) {
        console.log(`Hello ${name}`);
    }
};
cat.age += 1;

cat.age;
// 3
cat.name = 'Bambi';

function sayHi() {
    console.log('its me' + ' ' + cat.name);
}

sayHi();

console.log(cat.name);
// 'Bambi'

cat.greet(cat.name);


let house = {
    color: 'green',
    numRooms: 4,
    numWindows: 8,
    forSale: false
};

console.log(house.numRooms);
