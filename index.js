// PAGINA PRINCIPAL HOME // APARECER INPUT NA TELA

function pesquisar() {
    let input = document.querySelector('.pesquisarCafes')

    if (input.style.display == "flex") {
        input.style.display = "none"
    } else {
        input.style.display = "flex"
    }
}

// DESCER O MENU EM MOBILES

function menu() {
    let itens = document.getElementById("itens");

    if (itens.style.display == "flex") {
        itens.style.display = "none";
    } else {
        itens.style.display = "flex";
    }
}

// FORÇAR O INPUT APARECER

function mudouTamanho() {
    let itens = document.getElementById("itens");

    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

// -------- BUSCA DOS CAFÉS

const cafePesquisado = document.getElementById("idpesquisa").value

const cafes = [
    {
        nome: ["3 Corações", "3 Coraçoes", "Três Corações", "Tres Coraçoes"],
        intensidade: ["tradicional", "forte", "Extra Forte"],
        peso: [100, 300, 500]
    },
    {
        nome: ["Barão", "Barao"],
        intensidade: ["tradicional", "forte", "Extra Forte"],
        peso: [100, 300, 500]
    },
    {
        nome: ["Pilão", "Pilao"],
        intensidade: ["tradicional", "forte", "Extra Forte"],
        peso: [100, 300, 500]
    }
]

const btnBuscarCafe = document.querySelector("#btnBuscarCafe")

function buscarCafes() {

}

console.log(cafes[0].intensidade[0] === "Tradicional")

console.log(cafes[0].nome[0] == "3 Corações") // true ou false usar for
