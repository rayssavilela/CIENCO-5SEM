function Calcular(){
    var Altura = parseFloat(document.getElementById('Altura').value);
    var Peso = parseFloat(document.getElementById('Peso').value);

    var IMC = (Peso / (Altura * Altura));

    if(IMC < 20){
        document.write("<h1>Seu MMC é " + IMC + " , você está abaixo do peso Ideal!</h1>");
    }
    else if((IMC >= 20) && (IMC < 25)){
        document.write("<h1>Seu MMC é " + IMC + " , você está no peso Ideal!</h1>");
    }
    else{
        document.write("<h1>Seu MMC é " + IMC + " , você está acima do peso Ideal!</h1>");
    }
}