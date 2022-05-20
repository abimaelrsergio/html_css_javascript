var campoFiltro = document.querySelector('#filtrar-tabela');
campoFiltro.addEventListener('input', function() {
    var clientes = document.querySelectorAll('.paciente');
    for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i];
        var tdNome = cliente.querySelector('.info-nome');
        var nome = tdNome.textContent;
        if (this.value.length > 0) {
            if (nome != this.value) {
                cliente.classList.add('invisivel');
            } else {
                cliente.classList.remove('invisivel');
            }
        } else {
            for (var i = 0; i < clientes.length; i++) {
                var cliente = clientes[i];
                cliente.classList.remove('invisivel');
            }
        }
    }
});

