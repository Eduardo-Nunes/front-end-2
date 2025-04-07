function calcularParesImpares() {
    const input = prompt("Insira 10 números inteiros separados por virgula:");

    const numeros = input?.split(",");

    if (numeros.length !== 10) {
        alert("Insira 10 números inteiros separados por virgula!");

        return calcularParesImpares();
    }

    const qnt_par_impar = {
        par: 0,
        impar: 0
    }

    for (let index = 0; index < numeros.length; index++) {
        const isPar = numeros[index] % 2 === 0;

        if (isPar) {
            qnt_par_impar.par += 1
        } else {
            qnt_par_impar.impar += 1
        }
    }

    return alert(`Pares: ${qnt_par_impar.par} | Impares: ${qnt_par_impar.impar}`);
};


calcularParesImpares();