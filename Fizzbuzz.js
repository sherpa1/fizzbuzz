class Fizzbuzz {
    fizz(number) {
        return number % 3 === 0;
    }

    buzz(number) {
        return number % 5 === 0;
    }

    buzzfizz(number) {
        return number % 15 === 0;
    }

    check(number) {
        if (this.buzzfizz(number)) return "BuzzFizz";
        else if (this.buzz(number)) return "Buzz";
        else if (this.fizz(number)) return "Fizz";
        else return number;
    }
}

module.exports = Fizzbuzz;