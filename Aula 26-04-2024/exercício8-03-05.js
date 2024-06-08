
var voto = 0
var voto1 = 0;
var voto2 = 0;
var voto3 = 0;
var voto4 = 0;
var cont = 0;
var perc1 = 0.0;
var perc2 = 0.0;
var perc3 = 0.0;
var perc4 = 0.0;


function confirmar(){  
    voto = document.getElementById('voto').value;
    cont++;

        if (voto == 1){
            
            voto1 = voto1 + 1;
            alert("Você votou no candidato 1");
           
        }
        else if (voto == 2){
            
            voto2 = voto2 + 1;
            alert("Você votou no candidato 2");
           
        }
        else if (voto == 3){
            
            voto3 = voto3 + 1;
            alert("Você votou no candidato 3");
        }
        else if (voto == 4){
            
            voto4 = voto4 + 1;
            alert("Você votou no candidato 4");
            
        }
        else{
            document.write("<H1> Numero Inválido, tente novamente </H1>")
        }
    
    }
    

function total(){
    perc1 = (voto1 / cont) * 100;
    perc2 = (voto2 / cont) * 100;
    perc3 = (voto3 / cont) * 100;
    perc4 = (voto4 / cont) * 100;


    document.getElementById('cand1').innerHTML=("<h4>Candidato 1 = " + voto1 + " /Percentual = " + perc1 + "</h4>");
    document.getElementById('cand2').innerHTML=("<h4>Candidato 2 = " + voto2 + " /Percentual = " + perc2 + "</h4>");
    document.getElementById('cand3').innerHTML=("<h4>Votos Nulos = " + voto3 + " /Percentual = " + perc3 + "</h4>");
    document.getElementById('cand4').innerHTML=("<h4>Votos em Branco = " + voto4 + " /Percentual = " + perc4 + "</h4>");
}
