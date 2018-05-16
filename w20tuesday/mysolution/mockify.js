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


//  Modify the function, so that it uses this as input-parameter, if nothing else is supplied (i.e. a default parameter)
// In the console, write: String.prototype.mockify = mockify;
// Now you will be able to mockify any string - try "This is a test".mockify() for instance.
// You can also try document.querySelector('h1').textContent = document.querySelector('h1').textContent.mockify()

String.prototype.mockifyThis = function mockifyThis() {
    let str = Array.from(this);

    for(let i = 0; i < str.length; i++) {
     let randomNumber = Math.round( Math.random() );   
     
     if( randomNumber == 0) {
         str[i] = str[i].toUpperCase();
     }
     else {
         str[i] = str[i].toLowerCase();
     }
    }
   return str = str.join('');
}

document.querySelector('h1').textContent = document.querySelector('h1').textContent.mockifyThis()