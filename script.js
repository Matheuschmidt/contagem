function contar(){
    var inicio = document.querySelector('#txtinicio');
    var fim = document.querySelector('#txtfim');
    var passo = document.querySelector('#txtpasso');
    var res = document.querySelector('#res');

    var inicioValue = inicio.value;
    var fimValue = fim.value;
    var passoValue = passo.value;

       while( inicioValue == "" || fimValue == "" || passoValue == "" || inicioValue >= fimValue){
        window.alert('Error');
    }

    res.innerHTML = "Resultado: ";
    if(inicioValue <= fimValue){
        for(var i = inicioValue; inicioValue <= fimValue; i+= passoValue){
            res.innerHTML += `${i}`;
           }
    }else{
        for(var i = inicioValue; inicioValue >= fimValue; i-= passoValue){
            res.innerHTML += `${i}`;
        }
    }
   
  
}