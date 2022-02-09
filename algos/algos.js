// assessment #2 - React.js

// You must complete both sections by Monday December 20th 
// Handed in via github classroom: https://classroom.github.com/a/uxPbbmLq
// Once finished book your code review with me via the following link: https://calendly.com/patrick-morgan-bkny/c165-assessment-2-react

// Section One: Prototypes & Equivalence in JS
// Refresh: https://www.youtube.com/watch?v=2rkEbcptR64
// Part A: Equivalence
// Write a function called strictEquals(a, b) that returns the same value as a === b. 
// Your implementation must not use the === or !== operators.

const strictEquals = (a,b) => {
    if((Number.isNaN(a) && Number.isNaN(b))){
        return false
    }else if(Number.isInteger(a) && Number.isInteger(b)){
        let c = (a).toString();
        let d = (b).toString();

        return Object.is(c,d)
    }

    return Object.is(a,b)
}

// Part B: Prototypal Inheritance
// You are given a function, Square, that takes four parameters, A, B, C, and D, denoting the length of the square's edges.
// Using prototype properties, add a method to Square named isSquare that prints true if a Square object has equal edges and false if they are unequal.
function Square(A, B, C, D){
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;
  }


  Square.prototype.isSquare = function() {
        if(this.A === this.B && this.B === this.C && this.C === this.D){
            return true
        }else{
            return false
        }
  }

  module.exports = {
      strictEquals,
      Square
  }