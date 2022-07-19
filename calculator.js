
module.exports = class calculator{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    sum() {
        return this.a + this.b;
    }

    substract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    divise() {
        return this.a / this.b;
    }
}

// const calculator = new calculator()