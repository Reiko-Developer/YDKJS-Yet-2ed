// given two DOM elements, `btnOk` and `btnCancel`
var buttonNames = new Map();

let btnOk = document.querySelector("#btnOk");
let btnCancel = document.querySelector('#btnCancel')

buttonNames.set(btnOk,"Button 1");
buttonNames.set(btnCancel,"Button 2");

//Only Works on the browser
//btn refere-se ao nome da "propriedade"
//btnName refere-se ao valor da propriedade
for (let [btn,btnName] of buttonNames) {
    btn.addEventListener("click",function onClick(){
        console.log(`Clicked ${ btnName }`);
        console.log(`Botão name (property of DOM): ${btn.name}`);
        
    });
}

buttonNames = new Map();
buttonNames.set('id',btnOk.id)
buttonNames.set('name',btnCancel.name)

console.log("Keys only")
//if we want to consume only the keys of the above buttonNames map, 
//we can call keys() to get a keys-only iterator:
for (let btnKey of buttonNames.keys()) {
    console.log(btnKey);
}

console.log("Values only");

//if we want to consume only the values of the above buttonNames map, 
//we can call values() to get a values-only iterator:
for (let btnName of buttonNames.values()) {
    console.log(btnName);
}

console.log("Entries (both) :D");
buttonNames.set('saudacao',"Olá amigo!")
//Or if we want the index and value in an array iteration, 
//we can make an entries iterator with the entries() method:

for (let [idx,val] of buttonNames.entries()) {
    console.log(`[${ idx }]: ${ val }`);
}