const cliente = {
    nome: "Leandro Lima",
    cpf: "65476587689",
    idade: 29,
    email: "leandro@email.com",
    telefones: [987567453, 124352678]
}

cliente.dependentes = {
    nome: "Lorenna",
    parentesco: "filha",
    dataNasc: "31/08/2017"
}
cliente.dependentes.sexo = "Feminino";
console.log(cliente);