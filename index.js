// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
    return this.sides.length
    }

    get perimeter() {
       return this.sides.reduce(function(accum, value) {
           return accum + value
       }, 0)
    }
}

class Triangle extends Polygon {

    get isValid() {
       let first = this.countSides === 3
       let second = this.countSides * this.sides[0] === this.perimeter

       if (first && second ) {
           return true 
       } else {
           return false
       }
    }
}

class Square extends Polygon {

    get area() {

        let first = this.sides[0]

        let second = this.sides[2] 

        return first * second
    }

    get isValid() {
        let first = this.countSides === 4
        let second = this.countSides * this.sides[0] === this.perimeter
        if (first && second) {
            return true
        } else {
            return false
        }
    }

}



// The sum of the lengths of any two sides of a triangle
//  is greater than the length of the third side. 
//  If you take the three sides of a triangle and add them 
//  in pairs, the sum is greater than (not equal to) the third side. 
//  If that is not true, then it is not possible to construct a 
//  triangle with the given side lengths.