document.getElementById('form-texto').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const texto = document.getElementById('texto').value;

    document.getElementById('texto-capturado').textContent = texto;

    document.getElementById('form-texto').reset();
});
