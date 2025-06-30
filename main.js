const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha_botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if(tamanhoSenha >1) {
        tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha > 20){
        tamanhoSenha = tamanhoSenha + 1 ;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox'); 


const letraMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letraMinuscula = 'abcdefghijlmnopqrstuvwxyz';
const numeros = '0123456789'
const simbolos = '!@$%*?'

geraSenha();

function geraSenha () {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letraMaiuscula;
    }

     if (checkbox[1].checked) {
        alfabeto = alfabeto + letraMinuscula;
    }

     if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }

    if (checkbox[1].checked) {
        alfabeto = alfabeto + simbolos;
    }


    let senha = '';
    for(let i=0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto [numeroAleatorio];
    }
    campoSenha.value = senha;    
}