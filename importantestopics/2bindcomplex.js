var btn = function (content) {
    this.content = content;
};

btn.prototype.click = function () {
    console.log(this.content + ' clicked');
}

var myButton = new btn('OK');
myButton.click();

var looseClick = myButton.click;
looseClick();

var boundClick = myButton.click.bind(myButton);
boundClick();

// Example showing binding some parameters
var sum = function (a, b, c) {
    return (a ** b) + c;
};

var add5 = sum.bind(null, 2, 3);
console.log(add5(5));
