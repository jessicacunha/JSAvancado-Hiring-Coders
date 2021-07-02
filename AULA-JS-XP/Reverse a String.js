let newStr = '';

function reverseAsString(str) {
    for (let i = str.legth - 1; i >= 0; i--) {
        newStr += str[i];
    }

    console.log(newStr)

}

let resultado = reverseAsString('Hello')