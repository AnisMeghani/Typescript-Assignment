"use strict";
// Enhanced Laptop object: Construct an object for a laptop including properties make, model, year
// and a method describe() that logs a sentence about laptop.
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    make: 'Accer',
    model: 'Aspire 5750',
    year: 2013,
    describe: function () {
        console.log(`This laptop has ${this.make} ${this.model} ${this.year}`);
    }
};
laptop.describe();
