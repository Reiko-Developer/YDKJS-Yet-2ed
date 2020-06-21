
let script = document.createElement("script");
script.setAttribute('src', 'https://code.jquery.com/jquery-latest.min.js');
script.addEventListener('load', function () {

    let script = document.createElement('script');
    document.body.appendChild(script);
}, false);

document.body.appendChild(script);

const Widget = {
    init(width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    },
    insert($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    }
};

const Button = {
    setup(width, height, label) {
        // delegated call
        this.init(width, height);
        this.label = label || "Default";
        this.$elem = $("<button>").text(this.label);
    },
    build($where) {
        // delegated call
        this.insert($where);
        this.$elem.click(this.onClick.bind(this));
    },
    onClick(evt) {
        console.log("Button '" + this.label + "' clicked!");
    }
};

Object.setPrototypeOf(Button, Widget);

console.log(document.body.children);

$(document).ready(function () {
    const $body = $(document.body);
    const btn1 = Object.create(Button);
    btn1.setup(120, 30, "A");
    const btn2 = Object.create(Button);
    btn2.setup(150, 50, "B");
    btn1.build($body);
    btn2.build($body);
});