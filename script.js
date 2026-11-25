    // 1. MENU HAMBÚRGUER
const btnMenu = document.getElementById("btn-menu");
const navLinks = document.getElementById("nav-links");

btnMenu.addEventListener("click", () => {
    // Mostra ou esconde o menu no celular
    navLinks.classList.toggle("ativo"); //funciona como um interruptor 

    // Muda o ícone entre ☰ (fechado) e X (aberto) usando operador ternário
    const estaAberto = navLinks.classList.contains("ativo");
    btnMenu.innerHTML = estaAberto ? "X" : "☰"; //se for veradadeiro, volta para X
});

    // 2. BOTÃO "VER MAIS" NA HISTÓRIA DO HERÓI

const btnVerMais = document.getElementById("btn-ver-mais");
const historiaExtra = document.getElementById("historia-extra");

btnVerMais.addEventListener("click", () => {
    // Verifica se o texto está escondido
    const estaEscondido = historiaExtra.style.display === "none"; //retorna booleano

    // Mostra ou esconde o parágrafo
    historiaExtra.style.display = estaEscondido ? "block" : "none";

    // Troca o texto do botão usando operador ternário
    btnVerMais.textContent = estaEscondido ? "Ver menos" : "Ver história completa";
});

    // 3. BARRA DE EXPERIÊNCIA (XP) E DE NÍVEL

const btnGanharXp = document.getElementById("btn-ganhar-xp");
const barraXp = document.getElementById("barra-xp");
const textoXp = document.getElementById("texto-xp");
const nivelHeroi = document.getElementById("nivel-heroi");
const msgNivel = document.getElementById("msg-nivel");

let xpAtual = 0;
let nivelAtual = 1;
const xpMaximo = 200;

btnGanharXp.addEventListener("click", () => {
    xpAtual = xpAtual + 25; 

    // Subir de nível
    if (xpAtual >= xpMaximo) {
        nivelAtual = nivelAtual + 1;
        xpAtual = 0; 
        nivelHeroi.textContent = nivelAtual;
        msgNivel.textContent = "Nível Up! Bronkyu alcançou o nível " + nivelAtual + "!";
    } else {
        msgNivel.textContent = "Missão concluída! +25 XP ganhos.";
    }

    // Calcula a porcentagem proporcional a 200 XP 
    const porcentagem = (xpAtual / xpMaximo) * 100;

    textoXp.textContent = `${xpAtual} / ${xpMaximo} XP`;
    barraXp.style.width = porcentagem + "%";
});


    // 4. INVENTÁRIO DINÂMICO (ARRAY DE OBJETOS + FOREACH + FILTER)

const inventario = [ //array de objetos com os itens do inventário
    {
        nome: "Lâmina do Vazio",
        tipo: "Arma",
        raridade: "Lendária",
        descricao: "Espada curva ancestral com gravuras rúnicas que drenam força vital.",
        imagem: "Imagens/LâminadoVazio.jpg"
    },
    {
        nome: "Armadura do Reino Esquecido",
        tipo: "Armadura",
        raridade: "Épica",
        descricao: "Placas de aço temperado com o brasão do grifo gravado no peito.",
        imagem: "Imagens/ArmaduradoReinoEsquecido.jpg"
    },
    {
        nome: "Manto de Linho Terroso",
        tipo: "Armadura",
        raridade: "Comum",
        descricao: "Capa pesada usada para esconder o brilho das runas à noite.",
        imagem: "Imagens/MantodeLinhoTerroso.jpg"
    },
    {
        nome: "Pingente do Brasão Fragmentado",
        tipo: "Relíquia",
        raridade: "Rara",
        descricao: "Fragmento de metal da antiga cidade natal de Bronkyu.",
        imagem: "Imagens/PingentedoBrasãoFragmentado.jpg"
    },
    {
        nome: "Elixir de Sangue Rúnico",
        tipo: "Relíquia",
        raridade: "Rara",
        descricao: "Frasco que acalma a fome da espada quando não há inimigos por perto.",
        imagem: "Imagens/ElixirdeSangueRúnico.jpg"
    }
];

const listaInventario = document.getElementById("lista-inventario");
const contadorItens = document.getElementById("contador-itens");

// Função que desenha os cards dos itens na tela
function mostrarInventario(listaParaExibir) {
    listaInventario.innerHTML = ""; // limpa a lista antes de desenhar
    contadorItens.textContent = listaParaExibir.length; // atualiza o contador (usa o tamanho do array recebido)

    listaParaExibir.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("item-card"); // Classe CSS para estilizar o card com imagem ao lado

        li.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="item-img">
            <div class="item-info">
                <h4>${item.nome} <span class="item-tag">(${item.tipo} - ${item.raridade})</span></h4>
                <p class="texto-geral">${item.descricao}</p>
            </div>
        `;
        listaInventario.appendChild(li);
    });
}

// Mostra todos os itens assim que a página abre
mostrarInventario(inventario);

// Configura os botões de filtro
const botoesFiltro = document.querySelectorAll(".btn-filtro");

botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
        botoesFiltro.forEach((btn) => btn.classList.remove("filtro-ativo"));
        botao.classList.add("filtro-ativo");
        const tipoEscolhido = botao.getAttribute("data-tipo");

        if (tipoEscolhido === "todos") {
            mostrarInventario(inventario);
        } else {
            const itensFiltrados = inventario.filter((item) => item.tipo === tipoEscolhido);
            mostrarInventario(itensFiltrados);
        }
    });
});


    // 5. MODO NOTURNO / CLARO DA GUILDA

const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
    // Adiciona ou remove a classe "modo-claro" na tag <body>
    document.body.classList.toggle("modo-claro");

    // Verifica se o modo claro está ativo para mudar o texto do botão
    const estaClaro = document.body.classList.contains("modo-claro");
    btnTema.textContent = estaClaro ? "🌙 Modo Noturno" : "☀️ Modo Claro";
});

    // 6. VALIDAÇÃO DO FORMULÁRIO DE CONTATO COM A GUILDA
const formGuilda = document.getElementById("form-guilda");
const inputNome = document.getElementById("nome-contato");
const inputEmail = document.getElementById("email-contato");
const inputMsg = document.getElementById("msg-contato");
const feedbackForm = document.getElementById("feedback-form");

formGuilda.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Impede o recarregamento da página

    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const mensagem = inputMsg.value.trim(); //remove espaços (evitar "burlar" respostas)

    // Validação de campos vazios
    if (nome === "" || email === "" || mensagem === "") {
        feedbackForm.textContent = "Erro: Preencha todos os campos obrigatórios antes de enviar.";
        feedbackForm.style.color = "#f87171"; // Vermelho claro
        return;
    }

    // Validação básica de formato de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); //garante texto antes do @
    if (!emailValido) {
        feedbackForm.textContent = "Erro: Digite um endereço de e-mail válido (ex: nome@dominio.com).";
        feedbackForm.style.color = "#f87171";
        return;
    }

    // Sucesso no envio
    feedbackForm.textContent = `Mensagem enviada à Guilda com sucesso, ${nome}!`;
    feedbackForm.style.color = "#4ade80"; // Verde claro
    formGuilda.reset(); // Limpa os campos após o envio
});


    // 7. PESQUISA COMPLEMENTAR: PERSISTÊNCIA DE DADOS COM LOCALSTORAGE
// Carrega o progresso de XP, Nível e Tema salvos
window.addEventListener("DOMContentLoaded", () => {
    const xpSalvo = localStorage.getItem("bronkyu_xp");
    const nivelSalvo = localStorage.getItem("bronkyu_nivel");
    const temaSalvo = localStorage.getItem("bronkyu_tema");
    //localStorage é uma API que amazena valores


    if (xpSalvo !== null && nivelSalvo !== null) {
        xpAtual = Number(xpSalvo);
        nivelAtual = Number(nivelSalvo);
        nivelHeroi.textContent = nivelAtual;
        textoXp.textContent = `${xpAtual} / ${xpMaximo} XP`;
        barraXp.style.width = ((xpAtual / xpMaximo) * 100) + "%";
    }

    if (temaSalvo === "claro") {
        document.body.classList.add("modo-claro");
        btnTema.textContent = "🌙 Modo Noturno";
    }

    // Deixa o botão "Todos" marcado como ativo ao iniciar
    if (botoesFiltro.length > 0) {
        botoesFiltro[0].classList.add("filtro-ativo");
    }
});

// Salva XP e Nível sempre que clicar em Completar Missão
btnGanharXp.addEventListener("click", () => {
    localStorage.setItem("bronkyu_xp", xpAtual);
    localStorage.setItem("bronkyu_nivel", nivelAtual);
});

// Salva a preferência de tema sempre que alternar
btnTema.addEventListener("click", () => {
    const temaAtual = document.body.classList.contains("modo-claro") ? "claro" : "noturno";
    localStorage.setItem("bronkyu_tema", temaAtual);
});

