function Verificar() {

    var placa = parseInt(document.getElementById('placa').value);

    switch (placa) {
        case 1:
        case 2:
            alert("Rodízio na Segunda-Feira");
            break;
        case 3:
        case 4:
            alert("Rodízio na Terça-Feira");
            break;
        case 5:
        case 6:
            alert("Rodízio na Quarta-Feira");
            break;
        case 7:
        case 8:
            alert("Rodízio na Quinta-Feira");
            break;
        case 9:
        case 0:
            alert("Rodízio na Sexta-Feira");
            break;
        default:
            alert("Valor Inválido");
    }
}