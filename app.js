let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora Do Desafio'

function validarChute() {
    console.log ("O Botão Foi Clicado!");
}

function EuAmoJS(){
    alert ("Eu amo o JS!!");
}

function QualCidade(){
    let cidade = prompt ("Digite a sua cidade");
    alert (`estive em ${cidade} e lembrei de você!`);
}

function Conta() {
    let numero1 = parseInt(prompt ("Digite um número"));
    let numero2 = parseInt(prompt ("Digite um número"));
    let resultado = numero1 + numero2;
    alert (`O resultado é: ${numero1} + ${numero2} = ${resultado}`);
}


