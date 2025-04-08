function crescimentoPopulacaoPaises() {
    let populacaoA = 80000;
    const taxaA = 3;

    let populacaoB = 200000;
    const taxaB = 1.5;

    let anos = 0;

    while (populacaoA < populacaoB) {
        populacaoA *= (1 + taxaA / 100);
        populacaoB *= (1 + taxaB / 100);
        anos++;
    }

    return anos;
}

const anosNecessarios = crescimentoPopulacaoPaises();

console.log(`Serão necessários ${anosNecessarios} anos para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.`);