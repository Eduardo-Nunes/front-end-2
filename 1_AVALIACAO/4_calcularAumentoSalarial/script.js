function calcularAumentoSalarial() {
    const salario_inicial = prompt("Insira seu salario inicial com os centavos separados por '.'. Ex.: 1000.80 :");
    const anos_na_empresa = prompt("Insira a quantidade de anos na empresa:");

    if (!salario_inicial) {
        alert("Insira seu salario inicial!");
        return calcularAumentoSalarial();
    }

    if (!anos_na_empresa) {
        alert("Insira a quantidade de anos na empresa!");
        return calcularAumentoSalarial();
    }

    const salario_inicial_formatado = parseFloat(Number(salario_inicial));
    let salario_atual = salario_inicial_formatado

    if (Number(anos_na_empresa) <= 1) {
        return alert(`Salario atual: R$ ${salario_atual.toFixed(2)}`);
    };

    let percentual_aumento_ano_corrente = 0.15;

    for (let index = 2; index <= anos_na_empresa; index++) {
        if (index > 2) {
            percentual_aumento_ano_corrente = percentual_aumento_ano_corrente * 2;
        }

        salario_atual = salario_atual + (salario_atual * percentual_aumento_ano_corrente);
    }

    return alert(`Salario atual: R$ ${salario_atual.toFixed(2)}`);
}





calcularAumentoSalarial();