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

function criarLinha(cliente) {
    
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');
    
    nomeTd.textContent = cliente.nome;
    pesoTd.textContent = cliente.peso;
    alturaTd.textContent = cliente.altura;
    gorduraTd.textContent = cliente.gordura;
    imcTd.textContent = calcularImc(cliente.peso, cliente.altura);
    
    var clienteTr = document.createElement('tr');
    clienteTr.appendChild(nomeTd);
    clienteTr.appendChild(pesoTd);
    clienteTr.appendChild(alturaTd);
    clienteTr.appendChild(gorduraTd);
    clienteTr.appendChild(imcTd);

    return clienteTr;
}
