const modulos = [
    "Administração Escolar",
    "Anatomia do Sistema Musculoesquelético",
    "Anatomia dos Sistemas Orgânicos",
    "Anatomia e Fisiologia Humana",
    "Antropologia e Sociologia da Educação Física",
    "Aprendizagem e Controle Motor",
    "Atividade Formativa I",
    "Atividade Formativa II",
    "Atividade Formativa III",
    "Atividade Formativa IV",
    "Atividade Formativa V",
    "Atividade Formativa VI",
    "Atividade Formativa VII",
    "Atividade Formativa VIII",
    "Atividades Rítmicas e Dança",
    "Atividades Rítmicas na Escola",
    "Avaliação da Aprendizagem",
    "Avaliação Física",
    "Bases de Biologia Celular e Genética",
    "Biomecânica",
    "Biomecânica do Esporte",
    "Cineantropometria",
    "Cinesiologia e Biomecânica",
    "Corporeidade e Psicomotricidade",
    "Currículo e Planejamento da Educação Básica",
    "Desenvolvimento Motor",
    "Didática e Prática de Ensino",
    "Direitos Educacionais de Crianças e Adolescentes",
    "Direitos Humanos e Relações Étnico-raciais",
    "Educação Ambiental e Cidadania",
    "Educação e Ludicidade",
    "Educação Física Adaptada",
    "Educação Física Inclusiva",
    "Educação Física: Áreas de Atuação",
    "Epistemologia",
    "Escola e Sociedade",
    "Esportes Individuais",
    "Estrutura e Funcionamento da Educação Básica",
    "Estágio Supervisionado I",
    "Estágio Supervisionado II",
    "Estágio Supervisionado III",
    "Estágio Supervisionado IV",
    "Filosofia da Educação",
    "Fisiologia do Exercício",
    "Fisiologia do Exercício e Prescrição de Exercícios",
    "Formação Docente para a Diversidade",
    "Fundamentos da Epidemiologia e Estatística",
    "Fundamentos da Ginástica",
    "Fundamentos de Bioquímica",
    "Fundamentos de Citologia e Histologia",
    "Fundamentos Teóricos e Metodológicos da Educação Especial e Inclusiva",
    "Gestão de Pessoas, Negócios e Organização Desportiva",
    "Gestão Educacional",
    "História da Educação",
    "História e Fund. Socioantropológicos da Educação Física",
    "Iniciação Esportiva",
    "Introdução à Educação Física",
    "Jogos, Brinquedos e Brincadeiras",
    "Legislação Educacional",
    "Libras - Língua Brasileira de Sinais",
    "Metodologia da Educação Física Escolar",
    "Metodologia da Pesquisa e do Trabalho Científico",
    "Metodologia do Ensino da Dança",
    "Metodologia do Ensino da Ginástica Artística Escolar",
    "Metodologia do Ensino das Atividades Aquáticas",
    "Metodologia do Ensino de Atividades Aquáticas",
    "Metodologia do Ensino de Atletismo",
    "Metodologia do Ensino de Basquetebol",
    "Metodologia do Ensino de Futebol e Futsal",
    "Metodologia do Ensino de Ginástica",
    "Metodologia do Ensino de Handebol",
    "Metodologia do Ensino de Lutas Esportivas",
    "Metodologia do Ensino de Voleibol",
    "Metodologia do Ensino do Futebol",
    "Modalidades Esportivas Coletivas",
    "Novos Caminhos para Profissionais da Educação",
    "Organização e Administração de Eventos Escolares",
    "Políticas Públicas em Educação Física",
    "Prescrição de Exercícios para Idosos e Doentes Crônicos",
    "Prevenção de Acidentes e Socorros de Urgência",
    "Promoção da Saúde na Escola",
    "Prática Profissional em EF: Cultura e Lazer",
    "Prática Profissional em EF: Esportes",
    "Prática Textual em Língua Portuguesa",
    "Psicologia da Educação",
    "Psicologia do Desenvolvimento Humano",
    "Psicologia do Esporte",
    "Psicologia no Esporte",
    "Psicomotricidade no Contexto Escolar",
    "Recreação e Lazer",
    "Sociologia da Educação",
    "Teoria e Prática da Ginástica Artística",
    "Teoria e Prática dos Esportes de Lutas",
    "Trabalho de Conclusão de Curso",
    "Transversalidade na Educação",
    "Treinamento Neuromuscular e Atividades em Academias",
    "Tópicos Especiais",
    "Ética e Deontologia da Educação Física"
];

// Dados padrão
const dadosModulos = {};
modulos.forEach(nome => {
    dadosModulos[nome] = {
        descricao: `Conteúdo introdutório sobre ${nome}. Aqui você colocará explicações reais depois.`,
        links: ["https://google.com"],
        ebooks: ["Nenhum ebook cadastrado"],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        exercicio: "Exercício recomendado para este módulo."
    };
});

// Renderiza os cards
const container = document.getElementById("modulesContainer");
modulos.forEach(modulo => {
    const div = document.createElement("div");
    div.classList.add("module-card");
    div.textContent = modulo;
    div.onclick = () => abrirModulo(modulo);
    container.appendChild(div);
});

// Abre o conteúdo do módulo
function abrirModulo(nome) {
    document.getElementById("modulesContainer").classList.add("hidden");
    document.getElementById("conteudoModulo").classList.remove("hidden");

    const dados = dadosModulos[nome];

    document.getElementById("tituloModulo").textContent = nome;
    document.getElementById("descricaoModulo").textContent = dados.descricao;

    // Links
    const links = document.getElementById("linksModulo");
    links.innerHTML = "";
    dados.links.forEach(l => {
        const li = document.createElement("li");
        li.innerHTML = `<a href='${l}' target='_blank'>${l}</a>`;
        links.appendChild(li);
    });

    // Ebooks
    const ebooks = document.getElementById("ebooksModulo");
    ebooks.innerHTML = "";
    dados.ebooks.forEach(e => {
        const li = document.createElement("li");
        li.textContent = e;
        ebooks.appendChild(li);
    });

    // Vídeo
    document.getElementById("videoModulo").innerHTML =
        `<iframe width='100%' height='315' src='${dados.video}' frameborder='0' allowfullscreen></iframe>`;

    // Exercício
    document.getElementById("exercicioModulo").textContent = dados.exercicio;
}

// Botão voltar
document.getElementById("voltarBtn").onclick = () => {
    document.getElementById("conteudoModulo").classList.add("hidden");
    document.getElementById("modulesContainer").classList.remove("hidden");
};
