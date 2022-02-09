const { expect } = require('@jest/globals')
const {strictEquals: strictEquals, Square: Square} = require('./algos')

//Square test
test('check if all sides are equal and is a square', () => {
    expect(new Square(2,2,2,2).isSquare()).toBe(true);
});

test('check if all sides are equal and is a square', () => {
    expect(new Square(2,3,2,2).isSquare()).toBe(false);
});

test('check if all sides are equal and is a square', () => {
    expect(new Square(2,2,3,2).isSquare()).toBe(false);
});

test('check if all sides are equal and is a square', () => {
    expect(new Square(2,2,2,3).isSquare()).toBe(false);
});

test('check if all sides are equal and is a square', () => {
    expect(new Square(2,3,3,3).isSquare()).toBe(false);
});

//strictEquals test
test('check for strict equality -0 and +0', () => {
    expect(strictEquals(-0,+0)).toBe(true);
});
test('check for strict equality of -4 and 4', () => {
    expect(strictEquals(-4,4)).toBe(false);
});
test('check for strict equality of NaN and NaN', () => {
    expect(strictEquals(NaN,NaN)).toBe(false);
});
test('check for strict equality of {} and {}', () => {
    expect(strictEquals({},{})).toBe(false);
});
test('check for strict equality for two strings', () => {
    expect(strictEquals('str','str')).toBe(true);
});

test('check for strict equality for two booleans', () => {
    expect(strictEquals(true,true)).toBe(true);
});
test('check for strict equality for true and false', () => {
    expect(strictEquals(true,false)).toBe(false);
});

let x = {foo: "bar"}
let y = x

test('check for strict equality for true and false', () => {
    expect(strictEquals(y,x)).toBe(true);
});


