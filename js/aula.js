let nome = "Fernando"

/* Alert(nome); */

const x = 10;
const list = ["A", "B", "C"];
const objeto = { name: "Fernando", age:51 };

console.log(x)
console.log(list)
console.log(objeto)
console.log("--------------------")
console.log(typeof x)
console.log(typeof list)
console.log(typeof objeto)
console.log("-------------------")
console.log(objeto.name)
console.log(list[0])

if (x >= 10){
    console.log("Esse numero é igual ou maior que 10")
}
else {
    console.log("O numero é menor que 10")
}

const arr = ["amora", "banana", "caju", "morango", "laranja", "framboesa"];

for (let i = 0; i < arr.length; i++){
    console.log("A fruta é: " + arr[i])
}

console.log("Com craze na concatenação")

for (let i = 0; i < arr.length; i++){
    console.log(`O valor é ${arr[i]}`)
}

function soma(){
    console.log(32+50)
}

soma()

function calculate(a, b) {
    const som = (a*b) / b

    console.log(som)
}

calculate(10, 6)