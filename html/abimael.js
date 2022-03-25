function somar(){
    var numero = 5;
    var outroNumero = 6;
    document.getElementById('bomdia').innerHTML = numero + outroNumero;
}

function esconderElemento(){
    var elemento = document.getElementById('paragrafo1');
    if (elemento.style.display == 'none') {
        elemento.style.display = '';
    } else {
        elemento.style.display = 'none';
    }
}