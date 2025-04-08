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

    console.log({ anos });

    return anos;
}

crescimentoPopulacaoPaises();