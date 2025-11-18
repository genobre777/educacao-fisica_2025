const modulos = [
    {
        titulo: "Módulo 1 — Introdução",
        texto: "Este módulo explica os fundamentos iniciais da Educação Física...",
        links: [
            { nome: "Material de apoio", url: "https://google.com" },
            { nome: "Artigo relacionado", url: "https://youtube.com" }
        ],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        ebook: "pdfs/modulo1.pdf",
        exercicio: "Realize uma análise simples sobre a importância da atividade física."
    },
    {
        titulo: "Módulo 2 — Anatomia",
        texto: "Aqui você aprenderá os músculos, sistemas e partes do corpo...",
        links: [
            { nome: "Site sobre anatomia", url: "https://google.com" }
        ],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        ebook: "pdfs/modulo2.pdf",
        exercicio: "Identifique 5 músculos e suas funções."
    }
];

const container = document.getElementById("modulesContainer");
const detalhes = document.getElementById("detalhesModulo");
const btnVoltar = document.getElementById("btnVoltar");

function carregarModulos() {
    modulos.forEach((m, index) => {
        const card = document.createElement("div");
        card.classList.add("mod-card");
        card.innerHTML = `<h3>${m.titulo}</h3>`;
        card.onclick = () => abrirModulo(index);
        container.appendChild(card);
    });
}

function abrirModulo(i) {
    const m = modulos[i];
    
    document.getElementById("tituloModulo").textContent = m.titulo;
    document.getElementById("textoModulo").textContent = m.texto;

    // Links
    const lista = document.getElementById("linksModulo");
    lista.innerHTML = "";
    m.links.forEach(l => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${l.url}" target="_blank">${l.nome}</a>`;
        lista.appendChild(li);
    });

    // Vídeo
    document.getElementById("videoModulo").innerHTML =
        `<iframe src="${m.video}" frameborder="0" allowfullscreen></iframe>`;

    // Ebook
    const ebook = document.getElementById("ebookModulo");
    ebook.href = m.ebook;
    ebook.textContent = "Baixar E-book do Módulo";

    // Exercício
    document.getElementById("exercicioModulo").textContent = m.exercicio;

    container.style.display = "none";
    detalhes.classList.remove("hidden");
}

btnVoltar.onclick = () => {
    detalhes.classList.add("hidden");
    container.style.display = "grid";
};

document.addEventListener("DOMContentLoaded", carregarModulos);
