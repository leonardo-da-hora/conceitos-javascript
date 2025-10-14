
let nomeCompleto = "Leonardo"
let idade = 26
let temHabilitacao = true

let peso = null

const altura = 1.68

let carroCor = "vermelho"
let carroAno = 2018
let carroModelo = "onix"
let carroMotor = 1.6



let carro = {
    cor: "vermelho",
    ano: 2018,
    modelo: "onix",
    motor: 1.6 
}


let cliente = {
    nome: "Marcelo",
    idade: 24,
    altura: 1.93,
    sabeProgramar: true
}

// Vetor

let amigos = ["Maria", "João", "Winny", "Julia", "Santiago", "Castiel"];
amigos[1] = "Marinho";


// Funções

function validaVenda(status, valor){
    console.log("Sua venda foi: " + status + " o valor foi: ", + valor);
}

// validaVenda("Aprovada", 200);

function desconto(valor){
    let valorDesconto = valor - (valor * 0.20);
    return valorDesconto;
}

let venda = 300;
let vendaComDesconto = desconto(venda);
console.log(vendaComDesconto);

// Operador ternário

let velocidade = 90;
let limite = velocidade > 100 ? "Alta" : "Baixa";
console.log(limite);

// FOR 

for(i = 9; i <= 10; i++){
    console.log("Número: " + i);
}