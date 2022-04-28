var botao = document.querySelector('#salvar-cliente');
botao.addEventListener('click', (event) => { 
    event.preventDefault();
    
    var form = document.querySelector('#form-adicionar');
    obterInformacoesClientes(form);

    // Criando a linha (tr) e as colunas (td)
    var clienteTr = document.createElement('tr');
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularImc(peso, altura); // DRY - reaproveitamento de código

    clienteTr.appendChild(nomeTd)
    clienteTr.appendChild(pesoTd)
    clienteTr.appendChild(alturaTd)
    clienteTr.appendChild(gorduraTd)
    clienteTr.appendChild(imcTd)

    // Adicinar nova linha na tabela
    var tabela = document.querySelector('#tabela-clientes')
    tabela.appendChild(clienteTr);
} );

function obterInformacoesClientes(form) {
    var cliente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    };
    return cliente;
}
