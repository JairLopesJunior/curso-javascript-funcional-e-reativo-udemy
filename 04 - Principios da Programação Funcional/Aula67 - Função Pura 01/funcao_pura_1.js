const PI = 3.14;

// Impura - PI é um valor externo!
function areaCirc(raio) {
    return raio * raio * PI;
}

console.log(areaCirc(10));

// Pura
function areaCircPura(raio, pi) {
    return raio * raio * pi;
}

console.log(areaCircPura(10, 3.14));