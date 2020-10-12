function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* "
    }
    return line + "\n";
}

function buildTriangle(num) {
    var buildtriangle = "";
    for (var i = 1; i <= num; i++) {
        var make = makeLine(i);
        buildtriangle += make;
    }
    return buildtriangle;
}
// console.log(buildTriangle(10)); no output
console.log(buildTriangle(10)); // OK