
function mostrarValores(){
    
    let pessoa = {};
    pessoa.nome = document.querySelector('#txtNome').Value;
    pessoa.altura = parseFloat(document.querySelector('#txtAltura').Value);
    pessoa.peso =  parseFloat(document.querySelector('#txtPeso').Value)
    
    let resultado = (pessoa.peso)/Math.pow(pessoa.altura,2)
    
    
    let div = document.querySelector("#resultado");
    div.innerHTML = `O imc do  ${pessoa.nome} é de ${resultado.toFixed(2)}` 
}
let botao = document.querySelector("#calcular")
botao.addEventListener("click",mostrarValores)
