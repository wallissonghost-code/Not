export const games = [
  { id: '01', title: 'Night Protocol', genre: 'Ação / Estratégia', tag: 'PREMIUM', symbol: 'NP', accent: '#b8ff3d' },
  { id: '02', title: 'Zero District', genre: 'Sobrevivência', tag: 'NOVO', symbol: 'ZD', accent: '#74f2ce' },
  { id: '03', title: 'After Grid', genre: 'RPG / Exploração', tag: 'VAULT', symbol: 'AG', accent: '#7678ff' }
];

export const benefits = [
  { number: '01', title: 'Conteúdo organizado', description: 'Cada jogo, atualização e material premium fica separado para o usuário encontrar o que precisa sem navegar por páginas confusas.' },
  { number: '02', title: 'Acesso protegido', description: 'A estrutura está preparada para que o conteúdo restrito seja liberado somente após autenticação via Firebase.' },
  { number: '03', title: 'Experiência responsiva', description: 'O layout se adapta de celular a desktop sem depender de uma versão duplicada do site.' }
];

export const launchEndsAt = '2026-11-01T00:00:00-03:00';

export const plans = [
  {
    name: 'NORMAL',
    launchPrice: '9,99',
    regularPrice: '19,90',
    suffix: '/ mês',
    description: 'Para começar.',
    features: ['Acesso a uma seleção de jogos', 'Conector NOT', 'Benefícios básicos'],
    featured: false
  },
  {
    name: 'PLUS',
    launchPrice: '20,00',
    regularPrice: '34,90',
    suffix: '/ mês',
    description: 'Melhor custo-benefício para aproveitar a NOT completa.',
    features: ['Todos os jogos', 'Conector Plus', 'Benefícios exclusivos', 'Melhor custo-benefício'],
    featured: true,
    badge: 'MAIS POPULAR'
  },
  {
    name: 'PREMIUM',
    launchPrice: '39,99',
    regularPrice: '54,90',
    suffix: '/ mês',
    description: 'Para quem quer tudo.',
    features: ['Todos os jogos', 'Conector Plus', 'Acesso antecipado', 'Conteúdos e benefícios exclusivos', 'Prioridade em novidades'],
    featured: false
  },
  {
    name: 'CREATOR',
    priceLabel: 'Valor a combinar',
    description: 'Traga seu jogo para o ecossistema NOT.',
    features: ['Tudo do Premium', 'Adaptação do jogo para a plataforma', 'Publicação realizada pela equipe NOT', 'Suporte técnico para integração', 'Configuração e testes', 'Condições personalizadas'],
    featured: false,
    commercial: true,
    badge: 'PARA CRIADORES'
  }
];