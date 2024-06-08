function altera() {
    document.querySelector(".teste").style.backgroundColor = "blue";
}

function alteraTudo(){
    var x, i;
    x = document.querySelectorAll(".teste");
    for( i = 0; i < x.length; i++){
        x[i].style.backgroundColor = "yellow";
    }
}