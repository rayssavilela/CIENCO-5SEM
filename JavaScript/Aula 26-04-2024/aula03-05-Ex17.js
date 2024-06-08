var pessoa = ["Rayssa", " Ferreira Vilela", 22];
document.getElementById("demo").innerHTML = pessoa;

var pessoa2 = {primeiroNome: "Rayssa", ultimoNome: "Ferreira Vilela", idade: 22};
document.getElementById("demo2").innerHTML = "Nome: " + pessoa2["primeiroNome"] + ", Idade " +  pessoa2["idade"];

document.getElementById("demo3").innerHTML = pessoa.length;

var frutas, texto, qtdEl, i;

frutas = ["Banana", "Laranja", "Maça", "Manga"];

qtdEl = frutas.length;

texto = "<ul>";

for(i = 0; i < qtdEl; i++){
    texto += "<li>" + frutas[i] + "</li>";
}

texto += "</ul>";

document.getElementById("demo4").innerHTML = texto;


