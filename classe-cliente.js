class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }
    deposita(valor) {
        this.saldo += valor;
    }
    saca(valor) {
        this.saldo -= valor;
    }
    exibeSaldo(){
        console.log(this.saldo);
    }
}

const nanda = new Cliente("Fernanda Ribeiro", "11122233345", "nanda@email.com", 0);
nanda.deposita(600);
console.log(nanda);
nanda.exibeSaldo();