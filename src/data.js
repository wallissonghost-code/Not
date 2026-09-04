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

export const plans = [
  { name: 'START', price: '19,90', suffix: '/ mês', description: 'Entrada simples para acessar a seleção principal.', features: ['Acesso à biblioteca Start', 'Conteúdo exclusivo', 'Perfil de membro'], featured: false },
  { name: 'CORE', price: '39,90', suffix: '/ mês', description: 'O plano principal para quem quer acesso completo.', features: ['Biblioteca completa', 'Novos conteúdos', 'Acesso prioritário'], featured: true, badge: 'RECOMENDADO' },
  { name: 'VAULT', price: '69,90', suffix: '/ mês', description: 'Camada premium preparada para benefícios especiais.', features: ['Tudo do plano Core', 'Conteúdo Vault', 'Benefícios exclusivos'], featured: false }
];