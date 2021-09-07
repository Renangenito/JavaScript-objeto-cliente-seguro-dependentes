const cliente = {
    nome: "Renan Bezerra de Lima",
    cpf: "12332134565",
    idade: 27,
    email: "renan@email.com"
}

const chaves = ["nome", "cpf", "idade", "email"];

console.log(cliente[chaves[0]]); // imprime o nome


// imprime todos os dados através do forEach
chaves.forEach(chave => {
    console.log(cliente[chave])
}) 

