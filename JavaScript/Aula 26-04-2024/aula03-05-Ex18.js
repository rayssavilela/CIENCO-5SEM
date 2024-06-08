var frutas = new Array;


function adiciona(){
    frutas.push(prompt("Digite uma fruta"));
    document.getElementById("demo1").innerHTML = frutas;
}

function adicionaInicio(){
    frutas.unshift(prompt("Digite uma fruta"));
    document.getElementById("demo1").innerHTML = frutas;
}

function ordena(){
    frutas.sort();
    document.getElementById("demo1").innerHTML = frutas;
}

function inverte(){
    frutas.reverse();
    document.getElementById("demo1 ").innerHTML = frutas;
}