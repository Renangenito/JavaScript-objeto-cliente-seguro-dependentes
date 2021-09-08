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
    transfere(valor, conta){
        const valorSacado =  this.saldo -= valor;
        conta.deposita(valorSacado);
   
    }
    
}

class ClientePoupanca extends Cliente{
    constructor(nome, cpf, email, saldo, saldoPoup){
       super(nome, cpf, email, saldo)
       this.saldoPoup = saldoPoup;
    }
    depositaPoupanca(valor){
        this.saldoPoup += valor;
    }
    
}
const nanda = new Cliente("Fernanda", "23454345676", "nanda@email.com", 1000)
const renan = new Cliente("Renan Bezerra de Lima", "22233344456", "renan@email.com", 0);

console.log(`saldo da nanda ${nanda.saldo}`)
console.log(`Saldo do Renan ${renan.saldo}`)
nanda.transfere(500, renan)
console.log(`saldo atual da nanda ${nanda.saldo}`)
console.log(`Saldo atual do Renan ${renan.saldo}`)