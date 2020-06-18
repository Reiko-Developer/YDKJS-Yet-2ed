class SomethingKindaGreat {
    // class methods
    coolMethod() { }   // no commas!
    boringMethod() { }
}

var EntirelyDifferent = {
    // object methods
    coolMethod() { },   // commas!
    boringMethod() { },

    // (anonymous) function expression property
    oldSchool: function () { },

    //arrow function as a property
    property: x => { return x * 2; }

};

let a = new SomethingKindaGreat();
console.log('Class:',a)

console.log('Object',EntirelyDifferent);