const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];
"My favourite " + director + " film is " + films[1];

console.log("films at index 0: " + films[0]);
console.log("films at index 1: " + films[1]);
console.log("films at index 2: " + films[2]);
console.log("films at index 3: " + films[3]);

films.push("E.T.");
console.log(director + " is the director of " + films.length + " films");