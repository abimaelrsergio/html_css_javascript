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
        console.log('Peso inválido');
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido';
    }
    if (altura <= 0 || altura >= 3.0) {
        console.log('Altura inválida');
        alturaEhValida = false;
        tdImc.textContent = 'Altura inválida';
    }
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc;
    }        
}
