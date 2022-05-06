var botao = document.querySelector('#salvar-cliente');
botao.addEventListener('click', (event) => { 
    event.preventDefault();
    var form = document.querySelector('#form-adicionar');
    var cliente = obterInformacoesClientes(form);
    var erros = validarCliente(cliente);
    if (erros.length > 0) {
        exibirMensagensDeErro(erros);
        return;
    }
    var linha = criarLinha(cliente);
    var tabela = document.querySelector('#tabela-clientes')
    tabela.appendChild(linha);
    form.reset();
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';
} );

function exibirMensagensDeErro(erros) {
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';
    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function validarCliente(cliente) {
    var erros = [];
    if (cliente.nome.length == 0) {
        erros.push('O nome nao pode ser em branco!');
    }

    if (cliente.gordura.length == 0) {
        erros.push('A gordura nao pode ser em branco');
    }
    
    if (cliente.peso.length == 0) {
        erros.push('O peso nao pode ser em branco');
    }
    
    if (cliente.altura.length == 0) {
        erros.push('A altura nao pode ser em branco');
    }

    if (!validaPeso(cliente.peso)){
        erros.push('Peso inválido');
    }

    if (!validaAltura(cliente.altura)) {
        erros.push('Altura inválida');
    }
    return erros;
}

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
