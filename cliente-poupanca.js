function Cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo

    this.deposita = function(valor){
        this.saldo += valor;
    }
    this.sacar = function(valor){
        this.saldo -= valor;
    }

}
function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoupanca = saldoPoupanca
}
ClientePoupanca.prototype.depositarPoup = function(valor){
        this.saldoPoupanca += valor;
}
const nanda = new ClientePoupanca("Fernanda", "11122233345", "nanda@email.com", 200, 300)
nanda.deposita(800)
nanda.depositarPoup(200)
console.log(`Seu saldo em conta corrente é: ${nanda.saldo}`)
console.log(`Seu saldo em conta poupança é: ${nanda.saldoPoupanca}`)