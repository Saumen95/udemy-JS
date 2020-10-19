let a, b;
[a, b] = ['Male', 'famale'];
console.log(a);

const obj = { cname: 'BMW', model: 'i8', year: 2015 };
console.log(obj.cname);

//Arrow Function
let avgOfThree = (a, b, c) => {
    console.log((a + b + c) / 3);
}

avgOfThree(2, 5, 7);

function multiply(x, y, z) {
    console.log(x * y * z);
}

multiply(1, 2, 3);

//An array of Marvel Movies with the title & year of release
const marvelMovies = [
    {
        title: "Iron Man",
        year: 2008,
    },
    {
        title: "The Avengers",
        year: 2012,
    },
    {
        title: "Doctor Strange",
        year: 2016,
    },
    {
        title: "Avengers: Infinity War",
        year: 2018,
    },
    {
        title: "Avengers: End Game",
        year: 2019,
    },
];

//forEach loops through each movie & prints the name of the title & year it was released on the console
//The anonymous function accepts 'movie' as an argument which matches with the current element
marvelMovies.forEach((movie) => {
    console.log(`The title of the movie is ${movie.title}`);
    console.log(`${movie.year} is the year the movie was released.`);
});
