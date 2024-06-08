function Concluir(){
    var idade = document.getElementById('idade').value;
    

    if((idade >= 5) && (idade <= 7)) {
        document.write("<h1>Sua idade é " + idade + " , você está na classe Infantil A!</h1>");
    }
    else if((idade >= 8) && (idade <= 10)) {
        document.write("<h1>Sua idade é " + idade + " , você está na classe Infantil B!</h1>");
    }
    else if((idade >= 11) && (idade <= 13)) {
        document.write("<h1>Sua idade é " + idade + " , você está na classe Juvenil A!</h1>");
    }
    else if((idade >= 14) && (idade <= 17)) {
        document.write("<h1>Sua idade é " + idade + " , você está na classe Juvenil B!</h1>");
    }
    else if(idade > 17) {
        document.write("<h1>Sua idade é " + idade + " , você está na classe Sênior!</h1>");
    }
    else {
        document.write("<h1>Sua idade é " + idade + " , você não poderá participar das aulas por enquanto!</h1>");
    }

}