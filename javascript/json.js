const pessoas = [];

function cadastrarpessoa() {
   let pessoa = {};
   
   pessoa.nome = document.querySelector("#txtname").value;
   pessoa.sobrenome = document.querySelector("#txtsobrenome").value;
   pessoa.cpf = document.querySelector("#txtCPF").value;
   pessoa.datanascimento = document.querySelector("#txtdatanascimento").value;
    // após quardar os dados, os campos são apagados
   document.querySelector("#txtname").value = "";
   document.querySelector("#txtsobrenome").value = "";
   document.querySelector("#txtCPF").value = "";
   document.querySelector("#txtdatanascimento").value = "";

   pessoas.push(pessoa);
}

function gravarstorage() {
    let listapessoas = JSON.stringify(pessoas);
    localStorage.setItem("listaspessoas",listapessoas);
}

let btncadastrar = document.querySelector("#btncadastrar");
btncadastrar.addEventListener("click", cadastrarpessoa);

let btnpersistir = document.querySelector("#btnpersistir");
btnpersistir.addEventListener("click", gravarstorage);