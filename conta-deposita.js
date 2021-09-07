const cliente = {
    nome: "Renan",
    agencia: "1987",
    numero: "123445",
    cpf: "12343245676",
    saldo: 0,

    deposita: function (valor){
        if(valor > 0){
       
        this.saldo += valor;
    
    }else{
        console.log("Não há nada para depositar");
    }
        
    },
    sacar:function(valor){
        if(valor >= this.saldo){
            this.saldo - valor
        }else{console.log("Saldo insuficiente!")}
       
    }
}
cliente.deposita(2)
cliente.sacar(1);
console.log(cliente.nome);
console.log(`Seu saldo em conta é: ${cliente.saldo}`);

