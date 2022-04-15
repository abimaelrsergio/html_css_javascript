var pacientes = document.querySelectorAll('.paciente');
for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector('.inf-peso');
    var tdAltura = paciente.querySelector('.inf-altura');
    var tdImc = paciente.querySelector('.inf-imc');
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var pesoEhValido = true;
    var alturaEhValida = true;
    if (peso <= 0 || peso >= 1000){
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido';
        paciente.classList.add('cliente-invalido');
    }
    if (altura <= 0 || altura >= 3.0) {
        alturaEhValida = false;
        tdImc.textContent = 'Altura inválida';
        paciente.classList.add('cliente-invalido');
    }
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var botao = document.querySelector('#salvar-cliente');
botao.addEventListener('click', (event) => { 
    event.preventDefault();
    
    var form = document.querySelector('#form-adicionar');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

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

    console.log(clienteTr);
    console.log(nomeTd, pesoTd, alturaTd, gorduraTd);
} );

