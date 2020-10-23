/* eslint-disable no-unused-vars */
function sayHello() {
    console.log('Hi there!');
}

const developer = {
    name: 'Andrew',
    sayHello: function () {
        console.log('Hi there');
    },
    favouriteLanguage: function (language) {
        console.log(`my fav language is ${language}`);

    }

};

developer.sayHello();
developer.favouriteLanguage('JavaScript');
