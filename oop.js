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

cat.age += 1;

cat.age;
// 3


cat.name = 'Bambi';

cat.name;
// 'Bambi'

const printer = {

    on = true,
    mode = 'black & white',
    remsheet = 168,
    print: function () {
        console.log('The printer is printing!');
    }

};

delete printer.mode;


let house = {
    color: 'green',
    numRooms: 4,
    numWindows: 8,
    forSale: false
};

console.log(house.numRooms);



