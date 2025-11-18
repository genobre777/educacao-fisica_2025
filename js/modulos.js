// Lista completa (use as suas entradas originais)
const modulos = [
"Administração Escolar",
"Anatomia do Sistema Musculoesquelético",
"Anatomia dos Sistemas Orgânicos",
"Anatomia e Fisiologia Humana",
"Antropologia e Sociologia da Educação Física",
"Aprendizagem e Controle Motor",
"Atividades Rítmicas e Dança",
"Atividades Rítmicas na Escola",
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

// Função auxiliar para criar URLs de busca
function googleSearchQuery(q) {
  return 'https://www.google.com/search?q=' + encodeURIComponent(q);
}
function googleBooksQuery(q) {
  return 'https://www.google.com/search?tbm=bks&q=' + encodeURIComponent(q);
}
function scieloQuery(q) {
  return 'https://search.scielo.org/?q=' + encodeURIComponent(q);
}
function youtubeSearchQuery(q) {
  return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
}

// Gera dados padrão dinamicamente (descrição curta + links de busca + ebooks + vídeo pesquisa + exercício padrão)
const dadosModulos = {};
modulos.forEach(nome => {
  dadosModulos[nome] = {
    descricao: `Breve introdução ao tema "${nome}". Aborda conceitos fundamentais, objetivos de aprendizagem e aplicações práticas.`,
    texto: `${nome}: leitura introdutória que contextualiza histórico, conceitos e aplicações na prática pedagógica. Recomendado leitura crítica e observação em campo.`,
    videoSearch: youtubeSearchQuery(nome + ' aula explicativa'),
    links: [
      'https://pt.wikipedia.org/wiki/' + encodeURIComponent(nome.replace(/ /g,'_')),
      googleSearchQuery(nome + ' artigo educação física')
    ],
    ebooks: [
      googleBooksQuery(nome + ' pdf'),
      scieloQuery(nome)
    ],
    exercicio: `Escreva um resumo (5-10 linhas) sobre os pontos principais de ${nome} e cite uma aplicação prática.`
  };
});

// Renderiza os cards na página
const container = document.getElementById('modulesContainer');
modulos.forEach(mod => {
  const el = document.createElement('div');
  el.className = 'module-card';
  el.textContent = mod;
  el.onclick = () => abrirModulo(mod);
  container.appendChild(el);
});

// Abre o painel do módulo com os conteúdos automáticos
function abrirModulo(nome) {
  const dados = dadosModulos[nome];

  document.getElementById('tituloModulo').textContent = nome;
  document.getElementById('descricaoModulo').textContent = dados.descricao;
  document.getElementById('textoModulo').textContent = dados.texto;

  // vídeo (link para busca no YouTube)
  const videoLink = document.getElementById('videoModulo');
  videoLink.href = dados.videoSearch;
  videoLink.textContent = 'Pesquisar vídeos no YouTube: ' + nome;

  // links úteis
  const linksEl = document.getElementById('linksModulo');
  linksEl.innerHTML = '';
  dados.links.forEach(l => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${l}" target="_blank" rel="noopener">${l}</a>`;
    linksEl.appendChild(li);
  });

  // ebooks
  const ebooksEl = document.getElementById('ebooksModulo');
  ebooksEl.innerHTML = '';
  dados.ebooks.forEach(e => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${e}" target="_blank" rel="noopener">${e}</a>`;
    ebooksEl.appendChild(li);
  });

  // exercício
  document.getElementById('exercicioModulo').textContent = dados.exercicio;

  // mostra painel e esconde grid
  container.classList.add('hidden');
  document.getElementById('conteudoModulo').classList.remove('hidden');
}

// voltar
document.getElementById('voltarBtn').onclick = () => {
  document.getElementById('conteudoModulo').classList.add('hidden');
  container.classList.remove('hidden');
};
