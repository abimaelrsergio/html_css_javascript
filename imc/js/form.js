var botao = document.querySelector('#salvar-cliente');
botao.addEventListener('click', (event) => { 
    event.preventDefault();
    var form = document.querySelector('#form-adicionar');
    var cliente = obterInformacoesClientes(form);
    var linha = criarLinha(cliente);
    var tabela = document.querySelector('#tabela-clientes')
    tabela.appendChild(linha);
} );

function obterInformacoesClientes(form) {
    var cliente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    };
    return cliente;
}

function criarColuna(dado, classe) {
    var coluna = document.createElement('td');
    coluna.classList.add(classe);
    coluna.textContent = dado;
    return coluna;
}

function criarLinha(cliente) {
    var clienteTr = document.createElement('tr');
    clienteTr.classList.add('paciente');
    clienteTr.appendChild(criarColuna(cliente.nome, 'info-nome'));
    clienteTr.appendChild(criarColuna(cliente.peso, 'inf-peso'));
    clienteTr.appendChild(criarColuna(cliente.altura, 'info-altura'));
    clienteTr.appendChild(criarColuna(cliente.gordura, 'info-gordura'));
    clienteTr.appendChild(criarColuna(cliente.imc, 'infor-imc'));
    return clienteTr;
}
