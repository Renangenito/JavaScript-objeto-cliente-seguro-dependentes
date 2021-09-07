const cliente = {
    nome: "Leandro Lima",
    cpf: "65476587689",
    idade: 29,
    email: "leandro@email.com",
    telefones: [987567453, 124352678],
    dependentes: [{
        nome: "Lorenna",
        parentesco: "filho",
        dataNasc: "31/08/2017"
    }]
}

cliente.dependentes.push({
   nome: "Theo",
   parentesco: "filho",
   dataNasc: "21/08/2020"
})

function oferecerSeguro(obj){
    const propsCliente = Object.keys(obj);
    if(propsCliente.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome} que possui dependentes `);
    }
}
oferecerSeguro(cliente);

