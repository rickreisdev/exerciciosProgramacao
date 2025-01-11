function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
        console.log(stringInvertida);
    }
    return stringInvertida;
}

const stringNormal = "String";
const stringInvertida = inverterString(stringNormal);
console.log(stringInvertida);