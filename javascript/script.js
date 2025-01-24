//fazer com que o boão funciona quando obsevar que uma vez foi clicado é para fazer tal ação
let botao= document.querySelector("#btnMostrar");
botao.addEventListener("click",mostrarValores); 

function mostrarValores(){
    let pessoa = {};
    pessoa.nome = 
        document.querySelector('#txtNome').value;
    pessoa.altura = 
    parseFloat(document.querySelector('#txtAltura').value);
    pessoa.idade = 
    parseInt(document.querySelector('#txtIdade').value);
    pessoa.nascimento = 
        document.querySelector('#txtNascimento').value;

        let mensagem =`O nome digitado é <strong>${pessoa.nome}</strong> <br>
            A idade digitado é <strong>${pessoa.idade}</strong> <br>
            A altura digitado é <strong>${pessoa.altura.toFixed(2)}</strong> <br>
            O nascimento digitado é <strong>${pessoa.nascimento}</strong>`;

            let div = document.querySelector("#resultado"); // pegar o div do html para js
            div.innerHTML= mensagem; // levar mensagem no js para html
            
        }
        // let pessoa = {}; //objeto {}
        // pessoa.nome = prompt ("Informe nome ");
        // pessoa.idade = parseInt(prompt("Informe idade."))
        // pessoa.altura = parseFloat(prompt("Informe altura."))
        // pessoa.nascimento = prompt("Informe data de nascimento. (dd/mm/yyyy)")