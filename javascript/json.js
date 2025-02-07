// const pessoas = [];

// function cadastrarpessoa() {
//    let pessoa = {};
   
//    pessoa.nome = document.querySelector("#txtname").value;
//    pessoa.sobrenome = document.querySelector("#txtsobrenome").value;
//    pessoa.cpf = document.querySelector("#txtCPF").value;
//    pessoa.datanascimento = document.querySelector("#txtdatanascimento").value;
//     // após quardar os dados, os campos são apagados
//    document.querySelector("#txtname").value = "";
//    document.querySelector("#txtsobrenome").value = "";
//    document.querySelector("#txtCPF").value = "";
//    document.querySelector("#txtdatanascimento").value = "";

//    pessoas.push(pessoa);
//    gravarstorage()

// }

// function gravarstorage() {
//     let listapessoas = JSON.stringify(pessoas);
//     localStorage.setItem("listaspessoas",listapessoas);
    
// }

// let btncadastrar = document.querySelector("#btncadastrar");
// btncadastrar.addEventListener("click", cadastrarpessoa);

// Função para adicionar dados na tabela
document.getElementById("btncadastrar").addEventListener("click", function() {
    // Captura os valores dos campos de entrada
    var nome = document.getElementById("txtname").value;
    var sobrenome = document.getElementById("txtsobrenome").value;
    var cpf = document.getElementById("txtCPF").value;
    var dataNascimento = document.getElementById("txtdatanascimento").value;

    // Verifica se todos os campos estão preenchidos
    if(nome && sobrenome && cpf && dataNascimento) {
        // Cria uma nova linha na tabela
        var table = document.getElementById("tabpessoas");
        var row = table.insertRow(-1); // Insere uma nova linha no final da tabela

        // Cria as células e preenche com os dados
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.textContent = nome;
        cell2.textContent = sobrenome;
        cell3.textContent = cpf;
        cell4.textContent = dataNascimento;

        // Limpa os campos após a inserção
        document.getElementById("txtname").value = "";
        document.getElementById("txtsobrenome").value = "";
        document.getElementById("txtCPF").value = "";
        document.getElementById("txtdatanascimento").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
