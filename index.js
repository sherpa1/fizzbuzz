/*
- Ecrire un programme qui retourne les entiers de 1 à 100
- Remplacer les multiples de 3 par "Fizz"
- Remplacer les multiples de 5 par "Buzz"
- Remplacer les multiples de 15 par "BuzzFizz"
*/

const Fizzbuzz = require("./Fizzbuzz");

let fb = new Fizzbuzz();


let index = 1;

while (index < 101) {

    if (fb.buzzfizz(index)) {
        console.log("BuzzFizz");
    } else if (fb.buzz(index)) {
        console.log("Buzz");
    } else if (fb.fizz(index)) {
        console.log("Fizz");
    } else {
        console.log(index);
    }

    index++;
}