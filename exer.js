//atividades 11/04/2024

//atividade 2
let altura = parseFloat(prompt("Digite a sua altura em metros:"));
let peso = parseFloat(prompt("Digite o seu peso em quilogramas:"));
let Imc;

function verificarImc (parAltura, parPeso) {
    return parPeso/(parAltura*parAltura)
}

Imc = verificarImc (altura,peso)
alert (`O  seu Imc é ${Imc.toFixed(2)}`);



//atividade 3
let numero = prompt ("Digite um número:");

function verificarFatorial (num) {
    let result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
 result = verificarFatorial(numero);
 alert (`O fatorial de ${numero} é ${result}`);


 
 //ativade 4
 let numero = parseFloat(prompt("Digite um valor em real"));
let dolar;
function converterDolar(parNumero) {
    return parNumero*4.80
}

dolar = converterDolar(numero) 
alert(${numero} reais em dólar é ${dolar.toFixed(2)});


//ativade 5
let altura = parseFloat(prompt("Digite a altura da sua sala:"));
let largura = parseFloat(prompt("Digite a largura da sua sala:"));

function verificarCalculos(parAltura, parLargura) {
    return parAltura*parLargura
}
let area = verificarCalculos (altura,largura)

function verificarCalculos2(parAltura, parLargura) {
     return parAltura*2 + (parLargura*2)
}
let perimetro = verificarCalculos2(altura,largura)
alert (` A sua área é equivalente á ${area} \n O seu perímetro é equivalente á ${perimetro}`);



//ativade 5
let raio = parseFloat(prompt("Digite o raio da sua sala circular:"));

function verificararea(parRaio) {
    return (parRaio*parRaio)*3.14
}
let area = verificararea(raio)

function verificarperimetro(parRaio) {
    return 3.14 + 3.14*(parRaio)
}
let perimetro = verificarperimetro(raio)
alert (` O valor da area é ${area} \n O valor do perimetro ${perimetro}`);



//ativade 6
let numero = parseInt(prompt("Digite um número para descobrir a tabuada dele:"));
let i;

function verificarTabuada(parNumero) {
    for(i=1; i<=10 ; i++){
    alert (`${parNumero} X ${i} = ${numero*i}`);
       
    }  
}
verificarTabuada(numero);
