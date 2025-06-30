const numeroSenha = document.querySelector('.parametro-senha_texto');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox'); 
const forcaSenha = document.querySelector('.forca');
const botoes = document.querySelectorAll('.parametro-senha_botao');
const letraMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letraMinuscula = 'abcdefghijlmnopqrstuvwxyz';
const numeros = '0123456789'
const simbolos = '!@$%*?'

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

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

    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }


    let senha = '';
    for(let i=0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto [numeroAleatorio];
    }
    campoSenha.value = senha;
    
    function classificaSenha() {
        forcaSenha.classList.remove( 'fraca', 'media', 'forte');
    }    if (tamanhoSenha>11) {
            forcaSenha.classList.add('forte');
        } else if (tamanhoSenha>5 && tamanhoSenha<12) {
           forcaSenha.classList.add('media'); 
        }
        
}