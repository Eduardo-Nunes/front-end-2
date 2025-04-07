function menorValorMaiorValorSomaValores() {
    const input = prompt("Insira quantos números desejar separados por virgula:");

    const numeros = input?.split(",");

    if (!input || !numeros.length) {
        alert("Insira quantos números desejar separados por virgula!");

        return menorValorMaiorValorSomaValores();
    }

    const numeros_ordenados = numeros.sort((a, b) => a - b);

    const menor_valor = numeros_ordenados[0];
    const maior_valor = numeros_ordenados[numeros_ordenados.length - 1];

    let soma_valores = 0;

    for (let index = 0; index < numeros_ordenados.length; index++) {
        soma_valores = soma_valores + Number(numeros_ordenados[index]);
    }

    return alert(`Maior valor: ${maior_valor} | Menor valor: ${menor_valor} | Soma dos valores: ${soma_valores}`);
};


menorValorMaiorValorSomaValores();