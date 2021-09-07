const clientes = [
    {
        nome: "Abgail",
        cpf: "234432345543",
        dependentes:[{
            nome: "Fernanda Ribeiro",
            parentesco: "filho",
            dataNasc: "18/04/1997"
        }]
    },
    {
        nome: "Silvia",
        cpf: "32453464576",
        dependentes:[{
            nome: "Renan Lima",
            parentesco: "filho",
            dataNasc: "26/05/1994"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.log(listaDependentes);



