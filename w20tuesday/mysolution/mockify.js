`use strict`;

// create a function called `mockify` that receives a string, 
// and returns a mocified version of that string.

function mockify(str) {
    str = Array.from(str);

    for(let i = 0; i < str.length; i++) {
        let randomNumber = Math.round(Math.random());
        if(randomNumber == 0) {
            str[i] = str[i].toUpperCase();
        }
        else {
            str[i] = str[i].toLowerCase();
        }
    }
    return str = str.join(``);
}