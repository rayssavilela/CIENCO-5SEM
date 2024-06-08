var carros = ["Onix", " Polo", " Argos"];

document.getElementById("demo").innerHTML = carros;

var carros2 = ["Fusca", " Brasília", " Passat"];

document.getElementById("demo1").innerHTML = carros2;

var carros3 = new Array("Belina", " Corcel", " Del Rey");

document.getElementById("demo2").innerHTML = carros3;

document.getElementById("demo3").innerHTML = "Carro na posição 0: " + carros3[0];

carros3[0] = "Parati";

document.getElementById("demo4").innerHTML = "Carro alterado na posição 0: " + carros3[0];

