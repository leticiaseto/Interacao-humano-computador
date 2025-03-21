function calcularIMC(peso, altura) {
    return peso / ((altura / 100) ** 2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 24.9) {
        return 'Peso normal';
    } else if (imc < 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidade';
    }
}

document.getElementById('form-imc').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const imc = calcularIMC(peso, altura);

    document.getElementById('valor-imc').textContent = imc.toFixed(2);
    document.getElementById('classificacao').textContent = classificarIMC(imc);
});
