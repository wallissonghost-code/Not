const categories = [
  { id: 'geral', label: 'Geral' },
  { id: 'live', label: 'Jogos e Live' },
  { id: 'conector', label: 'Conector' },
  { id: 'planos', label: 'Planos e Acessos' },
  { id: 'pagamentos', label: 'Pagamentos' },
  { id: 'suporte', label: 'Suporte' }
];

const faqs = [
  {
    category: 'geral',
    q: 'O que é a NOT?',
    a: 'A NOT é uma plataforma de jogos e experiências interativas voltada para criadores de conteúdo e jogadores. A assinatura dá acesso ao catálogo disponível no seu plano e a recursos que ajudam a transformar a gameplay em conteúdo para live. A plataforma foi pensada para uso em celular e computador, com planos que variam por catálogo, recursos e quantidade de acessos simultâneos. Para projetos exclusivos, o NOT Creator atende ideias personalizadas por orçamento.'
  },
  {
    category: 'geral',
    q: 'Para quem a NOT foi criada?',
    a: 'A NOT foi criada principalmente para quem produz conteúdo ao vivo e quer tornar a audiência parte da experiência. Também pode ser usada por jogadores que querem acessar o catálogo e os recursos previstos em sua assinatura, mesmo fora de uma live.'
  },
  {
    category: 'geral',
    q: 'O que é o NOT Creator?',
    a: 'O NOT Creator é a área para projetos personalizados. O criador apresenta a ideia, a NOT avalia escopo, mecânicas, integração, prazo e complexidade, e então envia um orçamento. O desenvolvimento só começa após a definição e aprovação das condições do projeto.'
  },
  {
    category: 'live',
    q: 'Como funcionam os jogos interativos da NOT?',
    a: 'Cada jogo pode ter suas próprias regras de interação. Em experiências compatíveis, ações da audiência podem ser convertidas em eventos dentro do jogo, como ativar habilidades, gerar inimigos, alterar condições da partida ou disparar outros efeitos definidos para aquela experiência.'
  },
  {
    category: 'live',
    q: 'Funciona no celular e no PC?',
    a: 'A NOT foi estruturada para experiências em PC, Android e iOS. A compatibilidade exata depende de cada jogo e recurso, por isso o catálogo informa o formato, as plataformas compatíveis e eventuais requisitos antes de você abrir a experiência.'
  },
  {
    category: 'live',
    q: 'Preciso instalar alguma coisa?',
    a: 'O acesso à NOT é feito pela web. Alguns jogos ou integrações podem funcionar diretamente no navegador, enquanto outros recursos podem exigir uma etapa adicional. Quando houver instalação, configuração ou aplicativo complementar, isso será informado claramente antes do uso.'
  },
  {
    category: 'live',
    q: 'Preciso de OBS, TikTok LIVE Studio ou placa de captura?',
    a: 'Isso depende do seu formato de transmissão e do jogo escolhido. A NOT não parte do princípio de que todo usuário precisa de placa de captura. Quando uma experiência exigir software de streaming, fonte de navegador, captura de janela ou configuração específica, o requisito será indicado no próprio jogo.'
  },
  {
    category: 'live',
    q: 'Preciso de um PC potente?',
    a: 'Não existe um requisito único para toda a NOT. Jogos mais leves podem rodar em máquinas simples, enquanto experiências mais pesadas podem exigir mais desempenho. Cada jogo deve informar seus requisitos e plataformas compatíveis para evitar que você assine sem saber se o seu dispositivo atende à experiência desejada.'
  },
  {
    category: 'conector',
    q: 'O que é o Conector NOT?',
    a: 'O Conector NOT é a camada que liga uma experiência compatível aos eventos usados durante a live. Ele recebe os eventos permitidos pela integração e os transforma em comandos que o jogo entende. O tipo de evento e o efeito gerado dependem de cada experiência.'
  },
  {
    category: 'conector',
    q: 'Qual a diferença entre Conector NOT e Conector AutoPlay?',
    a: 'O Conector NOT é a base de integração entre live e jogo. O Conector AutoPlay acrescenta automações compatíveis com determinadas experiências, reduzindo a necessidade de intervenção manual durante a execução. A disponibilidade do AutoPlay depende do plano e do jogo.'
  },
  {
    category: 'conector',
    q: 'A NOT precisa da minha senha do TikTok?',
    a: 'A NOT não deve solicitar sua senha do TikTok para operar integrações que não exigem esse tipo de credencial. Sempre que uma conexão oficial exigir autorização, a tela deve deixar claro quais dados são solicitados e para qual finalidade. Nunca informe sua senha em páginas ou formulários que não sejam oficiais.'
  },
  {
    category: 'conector',
    q: 'Posso ser banido por usar jogos interativos?',
    a: 'A NOT não pode garantir que uma plataforma de terceiros nunca aplicará restrições, porque as regras e sistemas de moderação dessas plataformas são independentes. O uso deve respeitar as políticas da plataforma de live, e a NOT deve evitar métodos que exijam acesso indevido à conta ou violem deliberadamente essas regras.'
  },
  {
    category: 'planos',
    q: 'Qual a diferença entre Normal, Plus e Premium?',
    a: 'O Normal é a entrada da NOT, com 1 acesso simultâneo, seleção de jogos e Conector NOT. O Plus oferece 2 acessos simultâneos, catálogo completo e Conector AutoPlay, sendo o plano de melhor custo-benefício. O Premium amplia para 4 acessos simultâneos e inclui tudo do Plus, além de acesso antecipado e prioridade em novidades.'
  },
  {
    category: 'planos',
    q: 'O que significa 1, 2 ou 4 acessos simultâneos?',
    a: 'É a quantidade máxima de sessões da NOT que podem ficar ativas ao mesmo tempo na mesma assinatura. Isso permite, por exemplo, usar a assinatura em mais de um dispositivo simultaneamente nos planos compatíveis. Normal permite 1 acesso, Plus 2 e Premium 4.'
  },
  {
    category: 'planos',
    q: 'Posso usar a NOT em dois celulares ao mesmo tempo?',
    a: 'Sim, desde que o seu plano tenha pelo menos 2 acessos simultâneos disponíveis. O Plus permite até 2 sessões ativas ao mesmo tempo e o Premium até 4. O Normal permite apenas 1 sessão simultânea.'
  },
  {
    category: 'planos',
    q: 'Como vai funcionar o controle de Keys e dispositivos?',
    a: 'O acesso será vinculado à conta titular e ao limite de sessões do plano. A proposta do sistema de Keys é autorizar novos dispositivos sem transformar o código em uma senha permanente. O titular poderá acompanhar os acessos vinculados e revogar uma sessão ou dispositivo quando necessário.'
  },
  {
    category: 'planos',
    q: 'Troquei de celular ou meu PC quebrou. Perdi meu acesso?',
    a: 'Não. O acesso pertence à sua assinatura, não ao aparelho. Quando o gerenciamento de dispositivos estiver ativo, o titular poderá encerrar ou revogar o acesso do aparelho antigo e autorizar um novo, respeitando o limite simultâneo do plano.'
  },
  {
    category: 'pagamentos',
    q: 'Posso cancelar minha assinatura?',
    a: 'Sim. As condições de cancelamento, renovação e encerramento do acesso serão apresentadas no checkout e nos Termos de Uso antes da contratação. O objetivo é que o usuário saiba claramente quando a cobrança para e até quando o acesso permanece ativo.'
  },
  {
    category: 'pagamentos',
    q: 'A assinatura renova automaticamente?',
    a: 'A regra de renovação será informada de forma explícita antes do pagamento. Se a assinatura escolhida tiver renovação automática, o checkout deverá mostrar a periodicidade, o valor aplicável e como cancelar antes da próxima cobrança.'
  },
  {
    category: 'pagamentos',
    q: 'A NOT oferece reembolso?',
    a: 'A política definitiva de reembolso será publicada no checkout e nos Termos de Uso antes do início das cobranças. Ela deverá explicar os casos elegíveis, prazos, forma de solicitação e situações em que o reembolso não se aplica. A NOT não deve prometer reembolso fora das regras publicadas.'
  },
  {
    category: 'pagamentos',
    q: 'O que acontece se o pagamento falhar?',
    a: 'Quando os pagamentos estiverem ativos, falhas de cobrança deverão aparecer na área da conta com orientação para atualizar a forma de pagamento ou tentar novamente. O comportamento do acesso durante uma falha dependerá das regras de cobrança divulgadas no checkout.'
  },
  {
    category: 'pagamentos',
    q: 'O que acontece quando acabar o preço de lançamento?',
    a: 'A oferta atual termina em 01/11/2026. Depois dessa data, os preços regulares exibidos nos planos passam a ser a referência para novas contratações, salvo se a NOT publicar outra condição promocional.'
  },
  {
    category: 'suporte',
    q: 'Como entro em contato com o suporte da NOT?',
    a: 'Os canais oficiais de suporte serão publicados nesta página e na área da conta antes do lançamento comercial. Enquanto telefone, WhatsApp ou e-mail oficial ainda não estiverem definidos, a NOT não exibirá números ou contatos provisórios como se fossem canais definitivos.'
  },
  {
    category: 'suporte',
    q: 'O que faço se um jogo não abrir ou apresentar erro?',
    a: 'Primeiro verifique a compatibilidade e os requisitos exibidos no catálogo. Se o problema continuar, o suporte deverá solicitar informações como jogo, dispositivo, sistema operacional, navegador e mensagem de erro para reproduzir o problema e orientar a correção.'
  },
  {
    category: 'suporte',
    q: 'Qual será o prazo de atendimento?',
    a: 'O prazo oficial de atendimento ainda será definido. Quando o suporte comercial entrar em operação, a NOT deverá publicar o horário de atendimento e uma expectativa clara de resposta, com prioridade para usuários dos planos que incluam esse benefício.'
  }
];

let activeCategory = 'geral';

function categoryMarkup() {
  return `<div class="faq-categories" role="tablist" aria-label="Categorias de dúvidas">${categories.map(category => `<button class="faq-category ${category.id === activeCategory ? 'active' : ''}" type="button" data-faq-category="${category.id}" role="tab" aria-selected="${category.id === activeCategory}">${category.label}</button>`).join('')}</div>`;
}

function listMarkup() {
  return faqs.filter(item => item.category === activeCategory).map((item, index) => `<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${activeCategory}-${index}"><span>${item.q}</span><span class="faq-icon" aria-hidden="true"></span></button><div class="faq-answer" id="faq-answer-${activeCategory}-${index}"><div><p>${item.a}</p></div></div></article>`).join('');
}

export function renderFaqs(faqList) {
  if (!faqList) return;
  faqList.innerHTML = `${categoryMarkup()}<div class="faq-items" data-faq-items>${listMarkup()}</div>`;
}

export function selectFaqCategory(faqList, category) {
  if (!faqList || !categories.some(item => item.id === category)) return;
  activeCategory = category;
  faqList.querySelectorAll('[data-faq-category]').forEach(button => {
    const active = button.dataset.faqCategory === category;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  const items = faqList.querySelector('[data-faq-items]');
  if (items) items.innerHTML = listMarkup();
}

export function toggleFaq(button) {
  const item = button.closest('.faq-item');
  if (!item) return;
  const open = !item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(other => {
    other.classList.remove('open');
    other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
  });
  if (open) {
    item.classList.add('open');
    button.setAttribute('aria-expanded', 'true');
  }
}
