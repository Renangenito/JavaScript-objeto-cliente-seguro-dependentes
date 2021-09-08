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

const renan = new Cliente("Renan", "34567834567", "renan@email.com", 100);
renan.deposita(10)
console.log(renan.saldo)
renan.sacar(50);
console.log(renan.saldo)