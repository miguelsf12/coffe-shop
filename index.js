function pesquisar() {

    let input = document.getElementById("idpesquisa");

    if (input.style.display == "block") {
        input.style.display = "none";
    } else {
        input.style.display = "block";
    }
}

function menu() {
    let itens = document.getElementById("itens");

    if (itens.style.display == "flex") {
        itens.style.display = "none";
    } else {
        itens.style.display = "flex";
    }
}

function mudouTamanho() {
    let itens = document.getElementById("itens");

    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}