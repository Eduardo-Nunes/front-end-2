function calcularToral(precoUnitario, quantidade){
  
    if (precoUnitario < 0 || quantidade < 0) {
        return "Os valores não podem ser negativos";
    }
    
   
    return precoUnitario * quantidade;
}

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9; 
    }
    return valorTotal;
}

function exibirResumo(precoUnitario, quantidade) {
    const valorTotal = calcularTotal(precoUnitario, quantidade);
    const valorComDesconto = aplicarDesconto(valorTotal);
    
    console.log(`Valor total antes do desconto: R$ ${valorTotal.toFixed(2)}`);
    console.log(`Valor final com desconto: R$ ${valorComDesconto.toFixed(2)}`);
}


exibirResumo(10.5, 3);