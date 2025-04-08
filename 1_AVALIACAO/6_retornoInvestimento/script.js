function retornoInvestimento() {
    const capital_inicial = prompt("Insira o capital inicial como no exemplo: 1000.00:");
    const tempo_em_meses = prompt("Insira o tempo em meses:");
    const taxa_juros_mensal = prompt("Insira a taxa de juros mensal como no exemplo: 1.5:");

    if (!capital_inicial) {
        alert("Insira o capital inicial!");
        return retornoInvestimento();
    }

    if (!tempo_em_meses) {
        alert("Insira o tempo em meses!");
        return retornoInvestimento();
    }

    if (!taxa_juros_mensal) {
        alert("Insira a taxa de juros mensal!");
        return retornoInvestimento();
    }

    const montante = parseFloat((Number(capital_inicial)) * ((1 + Number(taxa_juros_mensal / 100)) ** Number(tempo_em_meses)));

    return alert(`Montante: ${montante.toFixed(2)}`);
}


retornoInvestimento();