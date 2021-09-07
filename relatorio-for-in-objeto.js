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

let relatorio = "";

for(let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
      
        continue
    }else{
        relatorio += `
        ${info} = ${cliente[info]}`
    }
}

console.log(relatorio);







