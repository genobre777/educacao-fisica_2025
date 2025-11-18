// LISTA DE MÓDULOS
const modulos = [
    "Introdução à Educação Física",
    "Cinesiologia e Biomecânica",
    "Fisiologia do Exercício",
    "Aprendizagem e Controle Motor",
    "Avaliação Física"
];

// DADOS DOS MÓDULOS (AQUI VOCÊ EDITA)
const dadosModulos = {
    "Introdução à Educação Física": {
        descricao: "Estudo histórico, conceitual e científico da Educação Física.",
        texto: "A Educação Física é a área que estuda o movimento humano sob perspectivas biológicas, sociais e pedagógicas...",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        links: [
            "https://brasilescola.uol.com.br/educacao/educacao-fisica.htm",
            "https://pt.wikipedia.org/wiki/Educa%C3%A7%C3%A3o_f%C3%ADsica"
        ],
        ebooks: [
            "https://portal.utfpr.edu.br/biblioteca/ebooks/educacao-fisica"
        ],
        exercicio: "Escreva um resumo explicando a importância da Educação Física para a saúde."
    },

    "Cinesiologia e Biomecânica": {
        descricao: "Estudo científico do movimento humano.",
        texto: "A Biomecânica analisa forças internas e externas aplicadas ao corpo humano…",
        video: "https://www.youtube.com/embed/VIDEOAQUI",
        links: ["https://link1.com"],
        ebooks: ["https://ebook-biomecanica.com"],
        exercicio: "Faça um mapa mental sobre planos e eixos do movimento."
    },

    "Fisiologia do Exercício": {
        descricao: "Funcionamento do organismo durante o esforço físico.",
        texto: "A fisiologia do exercício investiga adaptações cardíacas, musculares e respiratórias…",
        video: "https://www.youtube.com/embed/VIDEOAQUI",
        links: ["https://link-fisiologia.com"],
        ebooks: ["https://ebook-fisio.com"],
        exercicio: "Explique o que é VO2 máximo."
    },

    "Aprendizagem e Controle Motor": {
        descricao: "Como o corpo aprende e controla movimentos.",
        texto: "A aprendizagem motora estuda processos neurológicos, prática e feedback…",
        video: "https://www.youtube.com/embed/VIDEOAQUI",
        links: ["https://link-aprendizagem.com"],
        ebooks: ["https://ebook-motor.com"],
        exercicio: "Defina prática distribuída e prática massificada."
    },

    "Avaliação Física": {
        descricao: "Métodos de mensuração corporal e de desempenho.",
        texto: "A avaliação física fornece dados essenciais sobre saúde e performance…",
        video: "https://www.youtube.com/embed/VIDEOAQUI",
        links: ["https://link-avaliacao.com"],
        ebooks: ["https://ebook-avaliacao.com"],
        exercicio: "Meça e registre IMC, RCQ e Flexibilidade."
    }
};

// Renderiza cards
const container = document.getElementById("modulesContainer");
modulos.forEach(modulo => {
    const div = document.createElement("div");
    div.classList.add("module-card");
    div.textContent = modulo;
    div.onclick = () => abrirModulo(modulo);
    container.appendChild(div);
});

// Abre módulo
function abrirModulo(nome) {
    const dados = dadosModulos[nome];

    document.getElementById("modulesContainer").classList.add("hidden");
    document.getElementById("conteudoModulo").classList.remove("hidden");

    document.getElementById("tituloModulo").textContent = nome;
    document.getElementById("descricaoModulo").textContent = dados.descricao;
    document.getElementById("textoModulo").textContent = dados.texto;

    // video
    document.getElementById("videoModulo").innerHTML =
        `<iframe width="100%" height="315" src="${dados.video}" allowfullscreen></iframe>`;

    // links
    let links = document.getElementById("linksModulo");
    links.innerHTML = "";
    dados.links.forEach(l => links.innerHTML += `<li><a href="${l}" target="_blank">${l}</a></li>`);

    // ebooks
    let ebooks = document.getElementById("ebooksModulo");
    ebooks.innerHTML = "";
    dados.ebooks.forEach(e => ebooks.innerHTML += `<li><a href="${e}" target="_blank">${e}</a></li>`);

    // exercício
    document.getElementById("exercicioModulo").textContent = dados.exercicio;
}

// voltar
document.getElementById("voltarBtn").onclick = () => {
    document.getElementById("conteudoModulo").classList.add("hidden");
    document.getElementById("modulesContainer").classList.remove("hidden");
};
