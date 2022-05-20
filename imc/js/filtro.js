var campoFiltro = document.querySelector('#filtrar-tabela');
campoFiltro.addEventListener('input', function() {
    console.log('Digitaram no campo', this.value);
    var clientes = document.querySelectorAll('.paciente');
    for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i];
    }
});

