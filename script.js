function contar(){
    var inicio = document.querySelector('#txtinicio');
    var fim = document.querySelector('#txtfim');
    var passo = document.querySelector('#txtpasso');
    var res = document.querySelector('#res');

    var inicioValue = inicio.value;
    var fimValue = fim.value;
    var passoValue = passo.value;

    while( inicioValue == "" || fimValue == "" || passoValue == ""){
        window.alert('Error');
        res.innerHTML = "ERROR";
        return;
    }

    window.alert("OK");

  
}