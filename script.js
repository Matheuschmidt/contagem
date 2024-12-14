function contar(){
    var inicio = document.querySelector('#txtinicio');
    var fim = document.querySelector('#txtfim');
    var passo = document.querySelector('#txtpasso');
    var res = document.querySelector('#txtres');

    var inicioValue = Number(inicio.value);
    var fimValue = Number(fim.value);
    var passoValue = Number(passo.value);
    
    

    if(inicio.value.length == 0 || fim.value.length == 0){
        res.innerHTML = "Impossivel contar.";  
       // window.alert("[Erro] Faltam Dados.");
        }else{
        res.innerHTML = "Resultado: <br>";
        if(passoValue <= 0){
            alert("Passo Invalido. Considerando Passo igual a 1.");
            passoValue = 1;
        }
        if(inicioValue < fimValue){ //CONTAGEM CRESCENTE
            for(var i = inicioValue; i <= fimValue; i+= passoValue){
                res.innerHTML += ` ${i}`;
            }
        }else{ // CONTAGEM REGRESSIVA
            for(var i = inicioValue; i >= fimValue; i-= passoValue){
                res.innerHTML += ` ${i}`;
    
            }
        } 
    }
}
