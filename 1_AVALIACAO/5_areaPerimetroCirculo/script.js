function areaPerimetroCirculo() {
    const raio = prompt("Insira o raio do circulo:");

    if (!raio) {
        alert("Insira o raio do circulo!");
        return areaPerimetroCirculo();
    }

    const pi = 3.14;
    const area = pi * (raio ** 2);
    const perimetro = 2 * pi * raio;

    return alert(`Area: ${area} | Perimetro: ${perimetro}`);
}


areaPerimetroCirculo();