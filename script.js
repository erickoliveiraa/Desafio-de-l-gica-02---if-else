//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 27

if(idade >= 18){
    console.log("Você é maior de idade")
}else{
    console.log("Você é menor de idade")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade e a condição humana seja true

let humano = true 

if(idade > 18 && humano == true){
    console.log("Você é maior de idade e é humano")
}
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro ou Dezembro

let mes = "fevereiro"

if(mes =="janeiro" || mes == "Dezembro"){
    console.log("Você faz aniversáio em janeiro ou dezembro")
}else{
    console.log("Você não faz aniversáio agora")
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let nome = "Rodolfo"

if(nome[0] == "R"){
    console.log("Seu nome começa com R")
}else{
    console.log("Não começa com R")
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras ou seu nome começar com a letra E

 let sobrenome = "Oliveira" 

 if(sobrenome.length == 6 || nome == "E"){
     console.log("Você tem o sobrenome maior que 6 letras ou seu nome começa coma letra E")

 }else{
     console.log("Você não tem nenhum dos dois requisitos")
 }