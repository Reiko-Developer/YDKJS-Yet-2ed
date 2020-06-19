//see:
//digitalfortress.tech/tricks/top-15-commonly-used-regex
let startTime = '3:1';
startTime = startTime.match(/^(\d{1,2}):(\d{1,2})$/) || [];

for (const tmp of startTime) {
    console.log(tmp);
}

let name = 'Vitor Lucas';

//letters and whitespace only from 3 to 11 digits
name = name.match(/^[a-zA-Z ]{3,11}$/) || 'Nonstandard Name.';

console.log(name);

let nick = 'Reiko=_~†•™¤¥«»®°º-'
nick = nick.match(/^[a-zA-Z0-9=_~†•™¤¥«»®°º-]{3,20}/) || 'Invalid nick.'

console.log(nick);

let email = 'lucas@test.com'
let regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\.[a-z]{2,4}){0,1})*$/;

email = email.match(regexEmail) || 'Invalid e-mail.';
console.log(email);



