function pesquisar() {

    let input = document.getElementById("idpesquisa");

    if (input.style.display == "block") {
        input.style.display = "none";
    } else {
        input.style.display = "block";
    }
}