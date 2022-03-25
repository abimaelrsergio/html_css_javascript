function esconderElemento(){
    var elemento = document.getElementById('paragrafo1');
    if (elemento.style.display == 'none') {
        elemento.style.display = '';
    } else {
        elemento.style.display = 'none';
    }
}