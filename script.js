function calcularElectrico() {
    // Capturar los valores de los inputs
    const p = parseFloat(document.getElementById('potencia').value);
    const v = parseFloat(document.getElementById('voltaje').value);

    // Validar que los campos no estén vacíos o sean cero
    if (!p || !v) {
        alert("Por favor, ingresa valores válidos para Potencia y Voltaje.");
        return;
    }

    // Aplicar la fórmula: ((P / V) / 1.73)
    let paso1 = (p / v) / 1.73;

    // Sumar el 25% (equivale a multiplicar por 1.25)
    let resultadoFinal = paso1 * 1.25;

    // Mostrar el resultado con 2 decimales
    document.getElementById('resultado').innerHTML = `
        <strong>Resultado:</strong> ${resultadoFinal.toFixed(2)} Amperios
    `;
}
