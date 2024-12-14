function contar(){
    var inicio = document.querySelector('#txtinicio');
    var fim = document.querySelector('#txtfim');
    var passo = document.querySelector('#txtpasso');
    var res = document.querySelector('#txtres');


   var inicioValue = Number(inicio.value);
    var fimValue = Number(fim.value);
    var passoValue = Number(passo.value);

      if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Erro");
    }else{
        res.innerHTML = "Resultado: ";
        for(var i = inicioValue; i <= fimValue; i+= passoValue){
        res.innerHTML += `${i}`;
        }
    }
}
