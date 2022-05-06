var pacientes = document.querySelectorAll('.paciente');
for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector('.inf-peso');
    var tdAltura = paciente.querySelector('.inf-altura');
    var tdImc = paciente.querySelector('.inf-imc');
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    if (!pesoEhValido){
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido';
        paciente.classList.add('cliente-invalido');
    }
    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = 'Altura inválida';
        paciente.classList.add('cliente-invalido');
    }
    if (alturaEhValida && pesoEhValido) {
        tdImc.textContent = calcularImc(peso, altura);
    }
}

function validaPeso(peso) {
    if (peso >=0 && peso <= 100) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}