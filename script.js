function calculararea(base, altura) {
    let areatriangulo = base * altura / 2;
    return areatriangulo;
}

function mostrararea(area) {
    alert("El área del triángulo es: " + area);
}

let base = parseInt(prompt("Ingrese la base del triangulo"));
let altura = parseInt(prompt("Ingrese la altura del triangulo"));

mostrararea(calculararea(base, altura));