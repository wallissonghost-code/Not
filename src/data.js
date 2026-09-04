export const games = [
  { id: '01', title: 'Night Protocol', genre: 'Ação / Estratégia', tag: 'PREMIUM', symbol: 'NP', accent: '#b8ff3d' },
  { id: '02', title: 'Zero District', genre: 'Sobrevivência', tag: 'NOVO', symbol: 'ZD', accent: '#74f2ce' },
  { id: '03', title: 'After Grid', genre: 'RPG / Exploração', tag: 'VAULT', symbol: 'AG', accent: '#7678ff' }
];

export const benefits = [
  { number: '01', title: 'Tudo no lugar', description: 'Jogos, atualizações e benefícios organizados para você encontrar o que precisa sem perder tempo.' },
  { number: '02', title: 'Acesso protegido', description: 'Conteúdos e benefícios ficam disponíveis apenas para contas com acesso autorizado.' },
  { number: '03', title: 'Mobile + PC', description: 'Uma experiência pensada para funcionar bem no celular e no computador, sem versões separadas.' }
];

export const launchEndsAt = '2026-11-01T00:00:00-03:00';

export const plans = [
  {
    name: 'NORMAL', launchPrice: '9,99', regularPrice: '19,90', suffix: '/ mês', description: 'Para começar.', featured: false,
    features: [
      { label: 'Acesso a uma seleção de jogos', included: true },
      { label: 'Conector NOT', included: true },
      { label: 'Benefícios básicos', included: true },
      { label: 'Catálogo completo de jogos', included: false },
      { label: 'Conector AutoPlay', included: false },
      { label: 'Acesso antecipado', included: false },
      { label: 'Prioridade em novidades', included: false }
    ]
  },
  {
    name: 'PLUS', launchPrice: '20,00', regularPrice: '34,90', suffix: '/ mês', description: 'Melhor custo-benefício para aproveitar a NOT completa.', featured: true, badge: 'MAIS POPULAR',
    features: [
      { label: 'Acesso a uma seleção de jogos', included: true },
      { label: 'Conector NOT', included: true },
      { label: 'Benefícios básicos', included: true },
      { label: 'Catálogo completo de jogos', included: true },
      { label: 'Conector AutoPlay', included: true },
      { label: 'Acesso antecipado', included: false },
      { label: 'Prioridade em novidades', included: false }
    ]
  },
  {
    name: 'PREMIUM', launchPrice: '39,99', regularPrice: '54,90', suffix: '/ mês', description: 'Para quem quer tudo.', featured: false,
    features: [
      { label: 'Acesso a uma seleção de jogos', included: true },
      { label: 'Conector NOT', included: true },
      { label: 'Benefícios básicos', included: true },
      { label: 'Catálogo completo de jogos', included: true },
      { label: 'Conector AutoPlay', included: true },
      { label: 'Acesso antecipado', included: true },
      { label: 'Prioridade em novidades', included: true }
    ]
  },
  {
    name: 'NOT CREATOR', priceLabel: 'Orçamento por projeto', headline: 'Seu jogo. Do seu jeito.',
    description: 'Conte sua ideia e a equipe NOT desenvolve uma experiência web personalizada e pronta para sua live.',
    features: ['Jogo web personalizado', 'Mecânicas definidas com o criador', 'Integração com o Conector NOT', 'Configuração para transmissão', 'Testes e ajustes'],
    featured: false, commercial: true, badge: 'PARA CRIADORES'
  }
];