const Fizzbuzz = require("../Fizzbuzz");

let fb = new Fizzbuzz();

test('fizz(3) == true', () => {
    expect(fb.fizz(3)).toBeTruthy();
});

test('buzz(5) == true', () => {
    expect(fb.buzz(5)).toBeTruthy();
});

test('buzzfizz(15) == true', () => {
    expect(fb.buzzfizz(15)).toBeTruthy();
});

test('fizz(15) == true', () => {
    expect(fb.fizz(15)).toBeTruthy();
});

test('buzz(15) == true', () => {
    expect(fb.buzz(15)).toBeTruthy();
});

test('buzz(15) && fizz(15) == true', () => {
    expect(fb.buzz(15) && fb.fizz(15)).toBeTruthy();
});

test('check(15) == "buzzfizz"', () => {
    expect(fb.check(15)).toBe("BuzzFizz");
});

test('check(3) == "Fizz"', () => {
    expect(fb.check(3)).toBe("Fizz");
});

test('check(5) == "Buzz"', () => {
    expect(fb.check(5)).toBe("Buzz");
});

test('check(1) == 1', () => {
    expect(fb.check(1)).toBe(1);
});