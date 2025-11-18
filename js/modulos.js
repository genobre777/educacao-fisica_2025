/* =========================
   LISTA COMPLETA DE MÓDULOS
========================= */

const modulos = [
  { titulo: "Administração Escolar",
    descricao: "Estuda a organização, gestão e funcionamento das instituições escolares, abordando liderança, políticas educacionais e processos administrativos."
  },
  { titulo: "Anatomia do Sistema Musculoesquelético",
    descricao: "Estuda músculos, ossos, articulações, movimentos e biomecânica básica."
  },
  { titulo: "Anatomia dos Sistemas Orgânicos",
    descricao: "Explora os sistemas do corpo humano, como respiratório, digestório, circulatório e nervoso."
  },
  { titulo: "Anatomia e Fisiologia Humana",
    descricao: "Analisa estruturas corporais e o funcionamento dos órgãos, essencial para a compreensão do movimento humano."
  },
  { titulo: "Antropologia e Sociologia da Educação Física",
    descricao: "Estuda o comportamento humano, cultura, sociedade e como influenciam práticas corporais e esportivas."
  },
  { titulo: "Aprendizagem e Controle Motor",
    descricao: "Analisa como o corpo aprende novos movimentos, coordenação e habilidades motoras."
  },
  { titulo: "Avaliação Física",
    descricao: "Estuda métodos para avaliar composição corporal, capacidades físicas e saúde."
  },
  { titulo: "Biomecânica",
    descricao: "Estuda forças, movimentos e mecânica aplicada ao corpo humano durante o exercício."
  },
  { titulo: "Bioquímica",
    descricao: "Aborda processos químicos do corpo humano, como energia, metabolismo e nutrientes."
  },
  { titulo: "Didática",
    descricao: "Estuda métodos de ensino e aprendizagem, estratégias pedagógicas e planejamento."
  },
  { titulo: "Educação Física Adaptada",
    descricao: "Trata do ensino de atividades físicas adaptadas para pessoas com deficiências."
  },
  { titulo: "Fisiologia do Exercício",
    descricao: "Explora as respostas do corpo à prática de exercícios físicos."
  },
  { titulo: "Fundamentos da Educação",
    descricao: "Analisa conceitos básicos de pedagogia, escola, ensino e aprendizagem."
  },
  { titulo: "Fundamentos do Esporte",
    descricao: "Estuda regras, história e características de diversas modalidades esportivas."
  },
  { titulo: "Fundamentos e Práticas do Treinamento",
    descricao: "Aborda métodos de treinamento físico, periodização e práticas esportivas."
  },
  { titulo: "Ginástica e Dança",
    descricao: "Explora movimentos corporais, expressão, ritmo e modalidades de ginástica."
  },
  { titulo: "História da Educação Física",
    descricao: "Estuda a evolução da Educação Física no Brasil e no mundo."
  },
  { titulo: "Libras",
    descricao: "Introdução à Língua Brasileira de Sinais e comunicação inclusiva."
  },
  { titulo: "Metodologia do Trabalho Científico",
    descricao: "Ensina como produzir trabalhos acadêmicos e pesquisas científicas."
  },
  { titulo: "Metodologias de Ensino na Educação Básica I",
    descricao: "Estratégias de ensino voltadas para séries iniciais."
  },
  { titulo: "Metodologias de Ensino na Educação Básica II",
    descricao: "Técnicas pedagógicas e aplicação prática em turmas escolares."
  },
  { titulo: "Metodologias de Ensino na Educação Infantil",
    descricao: "Metodologias específicas para crianças em fase inicial."
  },
  { titulo: "Neurociência da Aprendizagem",
    descricao: "Explora o funcionamento do cérebro no processo de aprender."
  },
  { titulo: "Nutrição",
    descricao: "Estuda nutrientes, dietas, metabolismo e alimentação saudável."
  },
  { titulo: "Organização e Funcionamento da Educação Básica",
    descricao: "Explora estrutura, leis e funcionamento da educação no Brasil."
  },
  { titulo: "Políticas Públicas da Educação Básica",
    descricao: "Análise das leis e políticas que regem a educação no país."
  },
  { titulo: "Práticas Pedagógicas Integradoras",
    descricao: "Integra conteúdos com práticas reais no ambiente escolar."
  },
  { titulo: "Primeiros Socorros",
    descricao: "Técnicas básicas para atendimento emergencial."
  },
  { titulo: "Projeto Integrador I",
    descricao: "Projeto prático interdisciplinar com base nos módulos iniciais."
  },
  { titulo: "Projeto Integrador II",
    descricao: "Projeto focado em análise prática e pesquisa."
  },
  { titulo: "Projeto Integrador III",
    descricao: "Projeto aplicado com desenvolvimento de soluções reais."
  },
  { titulo: "Projeto Integrador IV",
    descricao: "Projeto final integrando todo o aprendizado do curso."
  },
  { titulo: "Psicologia da Aprendizagem",
    descricao: "Analisa comportamentos e fatores que influenciam o aprendizado."
  },
  { titulo: "Psicologia do Desenvolvimento",
    descricao: "Estuda como o ser humano se desenvolve ao longo da vida."
  },
  { titulo: "Recreação e Lazer",
    descricao: "Explora atividades recreativas e o papel do lazer na saúde."
  },
  { titulo: "Saúde Coletiva",
    descricao: "Estuda políticas, estratégias e práticas voltadas à saúde pública."
  },
  { titulo: "Segurança no Ambiente Escolar",
    descricao: "Estuda prevenção de acidentes e riscos no ambiente escolar."
  },
  { titulo: "Seminários Integradores",
    descricao: "Apresentações e estudos interdisciplinares."
  },
  { titulo: "Socorros Imediatos",
    descricao: "Aborda ações emergenciais rápidas em acidentes."
  },
  { titulo: "Sociologia",
    descricao: "Estuda relações sociais, cultura e comportamento humano."
  },
  {
    titulo: "Tecnologia Assistiva",
    descricao: "Estuda ferramentas e recursos que auxiliam pessoas com deficiência no aprendizado e nas práticas corporais."
  },
  {
    titulo: "Tecnologias da Educação Básica",
    descricao: "Explora tecnologias educacionais aplicadas ao ensino."
  },
  {
    titulo: "Teoria e Prática da Avaliação I",
    descricao: "Estuda ferramentas e critérios de avaliação escolar."
  },
  {
    titulo: "Teoria e Prática da Avaliação II",
    descricao: "Aprofunda métodos avaliativos e análise de desempenho."
  },
  {
    titulo: "Treinamento Resistido",
    descricao: "Estuda musculação, força, adaptações e métodos de treino."
  }
];


/* =========================
   EXIBE OS CARDS DOS MÓDULOS
========================= */

document.addEventListener("DOMContentLoaded", () => {
  exibirModulos();
});

function exibirModulos() {
  const container = document.getElementById("modulesContainer");
  container.innerHTML = "";

  modulos.forEach((modulo, index) => {
    const div = document.createElement("div");
    div.classList.add("modulo-card");

    div.innerHTML = `
      <h3>${modulo.titulo}</h3>
      <button class="btn-abrir" onclick="abrirModulo(${index})">Ver detalhes</button>
    `;

    container.appendChild(div);
  });
}


/* =========================
   ABRIR TELA DE DETALHES
========================= */

function abrirModulo(i) {
  const modulo = modulos[i];

  // Preenche conteúdo
  document.getElementById("tituloModulo").textContent = modulo.titulo;
  document.getElementById("descricaoModulo").textContent = modulo.descricao;

  // Links automáticos
  document.getElementById("videoModulo").href =
    `https://www.youtube.com/results?search_query=${encodeURIComponent(modulo.titulo)}`;

  document.getElementById("linksModulo").innerHTML = `
    <li><a target="_blank" href="https://www.google.com/search?q=${encodeURIComponent(modulo.titulo)}">
      Pesquisa no Google
    </a></li>
  `;

  document.getElementById("ebooksModulo").innerHTML = `
    <li><a target="_blank" href="https://www.google.com/search?q=${encodeURIComponent(modulo.titulo)}+PDF">
      Pesquisar PDF / Ebooks
    </a></li>
  `;

  document.getElementById("exercicioModulo").textContent =
    "Faça um resumo de 5 linhas sobre o que você entendeu deste módulo.";

  // Trocar telas (modo 1)
  document.getElementById("modulesContainer").style.display = "none";
  document.getElementById("conteudoModulo").classList.remove("hidden");
}


/* =========================
        BOTÃO VOLTAR
========================= */

document.getElementById("voltarBtn").addEventListener("click", () => {
  document.getElementById("conteudoModulo").classList.add("hidden");
  document.getElementById("modulesContainer").style.display = "grid";
});
