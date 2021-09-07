const cliente = {
    nome: "Fernanda Ribeiro",
    cpf: "43265456778",
    idade: 24,
    email: "nanda@email.com",
    telefones: [123321126, 987789789]
}

console.log(cliente);

cliente.telefones.forEach(fone => {
    console.log(fone);
})