import { createPub } from "./publication.js";

function printDetails(pub,URL) {
    pub.print();
    console.log(URL);
}

export function createBlogPost(title,author,pubDate,URL) {
    var pub = createPub(title,author,pubDate);

    var publicAPI = {
        print() {
            printDetails(pub,URL);
        }
    };

    return publicAPI;
}