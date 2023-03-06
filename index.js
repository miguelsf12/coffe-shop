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
const cafePesquisado = document.getElementById("idpesquisa") // input onde pesquisa

const cafes = [
    {
        nome: ["3 corações", "3 coraçoes", "três corações", "tres coraçoes"],
        intensidade: ["tradicional", "forte", "extra forte"],
        peso: [100, 300, 500]
    },
    {
        nome: ["barão", "barao"],
        intensidade: ["tradicional", "forte", "extra forte"],
        peso: [100, 300, 500]
    },
    {
        nome: ["pilão", "pilao"],
        intensidade: ["tradicional", "forte", "extra forte"],
        peso: [100, 300, 500]
    }
]

const btnBuscarCafe = document.querySelector("#btnBuscarCafe")

function buscarCafes() {
    
    for (let i = 0; i < cafes.length; i++) {
        // CAFE 3 CORAÇÕES
        if (cafePesquisado.value === cafes[0].nome[i]) {
            location.href = "/purchase/purchaseCafe1.html"
        // CAFE BARAO
        } else if (cafePesquisado.value === cafes[1].nome[i]) {
            location.href = "/purchase/purchaseCafe2.html"
        // CAFE PILAO
        } else if (cafePesquisado.value === cafes[2].nome[i]) {
            location.href = "/purchase/purchaseCafe3.html"
        }
    }
}

const btnVoltar = document.querySelector(".backPage")

function voltarPagina() {
    location.href = "/index.html"
}

// console.log(cafes[0].nome[0])
// console.log(cafes[0].nome[0] == "3 Corações") // true ou false usar for
