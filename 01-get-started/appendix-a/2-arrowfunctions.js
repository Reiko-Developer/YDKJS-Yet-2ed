// arrow function expressions
var f;

f = () => 42;

f = x => x * 2;

f = (x) => x * 2;

f = (x, y) => x * y;

f = x => ({ x: x * 2 });

f = x => { return x * 2; };

f = async x => {
    var y = await doSomethingAsync(x);
    return y * 2;
};

//someOperation( x => x * 2 ); //não funfou
