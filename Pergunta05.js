// 5) Escreva um programa que inverta os caracteres de um string.

function stringReversa(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        // console.log(i)
        newString += str[i]
        // console.log(newString)
    }
    return newString;
}
console.log(stringReversa('hello world!'))