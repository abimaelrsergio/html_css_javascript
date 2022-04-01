var paciente = document.querySelector('#primeiro-paciente');
var tdPeso = paciente.querySelector('.inf-peso');
var tdAltura = paciente.querySelector('.inf-altura');
var tdImc = paciente.querySelector('.inf-imc');
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
var imc = peso / (altura * altura);
tdImc.textContent = imc;
