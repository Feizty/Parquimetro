function calcular_tempo(troco) {
    const valor = parseFloat(document.getElementById("valor").value); //pega o valor do input
    let tempo = 0;

    if (valor>=1.00 && valor <1.75){
        troco = valor - 1;
        tempo = tempo + 30;
    }
    else if(valor>=1.75 && valor <3.00){
        troco = valor - 1.75;
        tempo = tempo + 60;
    }
    else if (valor>=3.00){
        troco = valor - 3;
        tempo = tempo + 120;
    }

    const resultado = document.getElementById("resultado").textContent = "Tempo de Estacionamento: " + tempo + " minutos. Troco R$" + troco.toFixed(2);

    alert(`Tempo de estacionamento: ${tempo} minutos. Troco: R$${troco.toFixed(2)}`);
    
}

