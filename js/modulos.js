// =========================
// LISTA DE MÓDULOS + DESCRIÇÕES
// =========================
const modulos = {
  "Administração Escolar": {
    descricao: "Estuda a organização, gestão e funcionamento das instituições escolares, abordando planejamento, coordenação e administração pedagógica.",
  },
  "Anatomia do Sistema Musculoesquelético": {
    descricao: "Explora a estrutura e funcionamento de ossos, músculos, articulações e tecidos relacionados ao movimento humano.",
  },
  "Anatomia dos Sistemas Orgânicos": {
    descricao: "Aborda os sistemas do corpo humano — respiratório, circulatório, digestório, entre outros — e suas funções integradas.",
  },
  "Anatomia e Fisiologia Humana": {
    descricao: "Estudo completo da estrutura e funcionamento do corpo humano, relacionando anatomia e fisiologia aos movimentos e ao exercício.",
  },
  "Antropologia e Sociologia da Educação Física": {
    descricao: "Analisa aspectos sociais e culturais do corpo, movimento e esporte dentro da sociedade.",
  },
  "Aprendizagem e Controle Motor": {
    descricao: "Estuda como aprendemos movimentos, mecanismos neurológicos e como melhorar a performance motora.",
  },
  "Atividades Rítmicas e Dança": {
    descricao: "Compreensão do movimento expressivo, ritmo e dança aplicada ao contexto escolar e artístico.",
  },
  "Atividades Rítmicas na Escola": {
    descricao: "Trabalha atividades musicais, expressivas e rítmicas com foco pedagógico.",
  },
  "Bases de Biologia Celular e Genética": {
    descricao: "Estudo da célula, divisão celular, hereditariedade e fundamentos biológicos aplicados ao corpo humano.",
  },
  "Biomecânica": {
    descricao: "Analisa forças, movimentos e mecânica do corpo humano para entender e otimizar o desempenho físico.",
  },
  "Biomecânica do Esporte": {
    descricao: "Aplica princípios biomecânicos para melhorar técnicas esportivas e prevenir lesões.",
  },
  "Cineantropometria": {
    descricao: "Avalia medidas corporais, composição corporal e somatotipos para fins de saúde e desempenho.",
  },
  "Cinesiologia e Biomecânica": {
    descricao: "Estuda os movimentos corporais e as forças que os produzem.",
  },
  "Corporeidade e Psicomotricidade": {
    descricao: "Explora a relação entre corpo, mente, movimento e aprendizagem.",
  },
  "Currículo e Planejamento da Educação Básica": {
    descricao: "Foca na organização curricular e na construção de planos educacionais.",
  },
  "Desenvolvimento Motor": {
    descricao: "Analisa como habilidades motoras evoluem ao longo da vida.",
  },
  "Didática e Prática de Ensino": {
    descricao: "Estuda métodos de ensino, estratégias pedagógicas e prática docente.",
  },
  "Direitos Educacionais de Crianças e Adolescentes": {
    descricao: "Aborda legislação que protege estudantes e estrutura a educação básica.",
  },
  "Direitos Humanos e Relações Étnico-raciais": {
    descricao: "Discute igualdade, diversidade e combate ao preconceito no ambiente escolar.",
  },
  "Educação Ambiental e Cidadania": {
    descricao: "Promove consciência ambiental e responsabilidade social.",
  },
  "Educação e Ludicidade": {
    descricao: "Explora o uso do lúdico, jogos e brincadeiras como ferramentas pedagógicas.",
  },
  "Educação Física Adaptada": {
    descricao: "Estudo de práticas inclusivas para pessoas com deficiência.",
  },
  "Educação Física Inclusiva": {
    descricao: "Garante acesso de todos às práticas corporais e esportivas.",
  },
  "Educação Física: Áreas de Atuação": {
    descricao: "Apresenta campos de trabalho como escolas, academias, saúde, esporte e lazer.",
  },
  "Epistemologia": {
    descricao: "Estuda a construção do conhecimento científico, especialmente na Educação Física.",
  },
  "Escola e Sociedade": {
    descricao: "Relaciona educação, cultura, política e sociedade.",
  },
  "Esportes Individuais": {
    descricao: "Estudo técnico e pedagógico de esportes individualizados.",
  },
  "Estrutura e Funcionamento da Educação Básica": {
    descricao: "Analisa como a educação é organizada no Brasil.",
  },
  "Filosofia da Educação": {
    descricao: "Discute correntes filosóficas e sua influência na educação.",
  },
  "Fisiologia do Exercício": {
    descricao: "Estuda as respostas do corpo ao exercício físico.",
  },
  "Fisiologia do Exercício e Prescrição de Exercícios": {
    descricao: "Ensina a montar treinos com base em respostas fisiológicas.",
  },
  "Formação Docente para a Diversidade": {
    descricao: "Trabalha práticas inclusivas e valorização da diversidade.",
  },
  "Fundamentos da Epidemiologia e Estatística": {
    descricao: "Aplica estatística na saúde e análise de dados.",
  },
  "Fundamentos da Ginástica": {
    descricao: "Aborda tipos e fundamentos pedagógicos da ginástica.",
  },
  "Fundamentos de Bioquímica": {
    descricao: "Estuda reações químicas do corpo, energia e metabolismo.",
  },
  "Fundamentos de Citologia e Histologia": {
    descricao: "Aborda células e tecidos do corpo humano.",
  },
  "Fundamentos Teóricos da Educação Especial e Inclusiva": {
    descricao: "Estuda práticas pedagógicas para inclusão.",
  },
  "Gestão de Pessoas, Negócios e Organização Desportiva": {
    descricao: "Aborda gestão esportiva e administração de equipes.",
  },
  "Gestão Educacional": {
    descricao: "Trata de organização administrativa da educação.",
  },
  "História da Educação": {
    descricao: "Analisa evolução histórica da educação.",
  },
  "História e Fund. Socioantropológicos da Educação Física": {
    descricao: "Estuda origem e evolução da área.",
  },
  "Iniciação Esportiva": {
    descricao: "Aborda métodos para introdução ao esporte.",
  },
  "Introdução à Educação Física": {
    descricao: "Visão geral da área, fundamentos e campos de atuação.",
  },
  "Jogos, Brinquedos e Brincadeiras": {
    descricao: "Trabalha ludicidade e jogos como instrumentos pedagógicos.",
  },
  "Legislação Educacional": {
    descricao: "Estuda leis que regem o ensino no Brasil.",
  },
  "Libras - Língua Brasileira de Sinais": {
    descricao: "Introdução à comunicação com pessoas surdas.",
  },
  "Metodologia da Educação Física Escolar": {
    descricao: "Aborda práticas pedagógicas específicas da área.",
  },
  "Metodologia da Pesquisa e Trabalho Científico": {
    descricao: "Ensina produção de artigos, projetos e metodologia de pesquisa.",
  },
  "Metodologia do Ensino da Dança": {
    descricao: "Aplica dança no contexto pedagógico.",
  },
  "Metodologia do Ensino de Atletismo": {
    descricao: "Técnicas de corrida, salto e arremesso na escola.",
  },
  "Metodologia do Ensino de Futebol e Futsal": {
    descricao: "Ensina fundamentos e didática dessas modalidades.",
  },
  "Metodologia do Ensino de Voleibol": {
    descricao: "Aplicação pedagógica do voleibol.",
  },
  "Metodologia do Ensino de Handebol": {
    descricao: "Técnicas e práticas pedagógicas do handebol.",
  },
  "Modalidades Esportivas Coletivas": {
    descricao: "Estuda esportes coletivos e suas táticas.",
  },
  "Promoção da Saúde na Escola": {
    descricao: "Trabalha hábitos saudáveis no ambiente escolar.",
  },
  "Psicologia do Esporte": {
    descricao: "Estuda motivação, foco, emoções e desempenho.",
  },
  "Recreação e Lazer": {
    descricao: "Organiza atividades recreativas, jogos e eventos.",
  },
  "Teoria e Prática dos Esportes de Lutas": {
    descricao: "Introdução pedagógica a esportes de combate.",
  },
  "Trabalho de Conclusão de Curso": {
    descricao: "Etapa final de elaboração do TCC.",
  },
  "Treinamento Neuromuscular e Academias": {
    descricao: "Ensina prescrição de treino e otimização muscular.",
  },
  "Ética e Deontologia da Educação Física": {
    descricao: "Código profissional, ética e responsabilidades da área.",
  }
};


// =========================
// CRIAÇÃO DOS CARDS
// =========================
function exibirModulos() {
  const container = document.getElementById("modulesContainer");
  container.innerHTML = "";

  Object.keys(modulos).forEach((nome) => {
    const div = document.createElement("div");
    div.classList.add("modulo-card");
    div.textContent = nome;

    div.onclick = () => abrirModulo(nome);

    container.appendChild(div);
  });
}


// =========================
// ABRIR DETALHES DO MÓDULO
// =========================
function abrirModulo(nome) {
  const modulo = modulos[nome];

  document.getElementById("tituloModulo").textContent = nome;
  document.getElementById("descricaoModulo").textContent = modulo.descricao;

  // links automáticos
  document.getElementById("videoModulo").href =
    `https://www.youtube.com/results?search_query=${encodeURIComponent(nome + " Educação Física")}`;

  // eBooks automáticos
  document.getElementById("ebooksModulo").innerHTML =
    `<li><a href="https://www.google.com/search?q=${encodeURIComponent(nome + " PDF")}" target="_blank">Pesquisar PDF no Google</a></li>`;

  // link útil (exemplo)
  document.getElementById("linksModulo").innerHTML =
    `<li><a href="https://pt.wikipedia.org/wiki/${encodeURIComponent(nome)}" target="_blank">Wikipedia</a></li>`;

  // exercício sugerido
  document.getElementById("exercicioModulo").textContent =
    "Escreva um resumo de 5 linhas explicando a importância desse conteúdo para a prática profissional.";

  // alternar telas
  document.getElementById("modulesContainer").style.display = "none";
  document.getElementById("conteudoModulo").classList.remove("hidden");
}


// =========================
// BOTÃO VOLTAR
// =========================
document.getElementById("voltarBtn").onclick = () => {
  document.getElementById("conteudoModulo").classList.add("hidden");
  document.getElementById("modulesContainer").style.display = "grid";
};


// =========================
// INICIALIZAR
// =========================
document.addEventListener("DOMContentLoaded", exibirModulos);
