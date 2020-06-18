class Page {
    constructor(text) { this.text = text; }

    print() { console.log(this.text); }
}

class Notebook {
    constructor() { this.pages = []; }

    addPage(text) {
        var page = new Page(text);
        this.pages.push(page);
    }

    print() {
        for (let page of this.pages) {
            page.print();
        }
    }
}