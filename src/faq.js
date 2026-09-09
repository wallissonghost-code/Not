const faqs = [
  { q: 'O que é a NOT?', a: 'A NOT é uma plataforma de acesso premium a jogos e experiências interativas, com planos para jogadores e uma área Creator para projetos personalizados.' },
  { q: 'Como funciona o Conector NOT?', a: 'O Conector NOT é a camada que integra recursos e interações compatíveis com a experiência da plataforma. Os recursos disponíveis dependem do plano contratado.' },
  { q: 'Preciso instalar alguma coisa?', a: 'O acesso principal é feito pela web. Quando algum jogo ou recurso exigir uma etapa adicional, a NOT informa isso de forma clara antes do uso.' },
  { q: 'Funciona no celular e no PC?', a: 'Sim. A interface foi estruturada para funcionar em dispositivos móveis e computadores, com testes automatizados em Safari, Chrome e Android.' },
  { q: 'Qual a diferença entre Normal, Plus e Premium?', a: 'O Normal é a porta de entrada, o Plus amplia catálogo e benefícios, e o Premium libera a experiência mais completa, incluindo acesso antecipado e prioridade em novidades.' },
  { q: 'Como funciona o NOT Creator?', a: 'Você apresenta a ideia do jogo ou experiência para sua live, a equipe NOT define o escopo e entrega um projeto web personalizado, com integração e testes conforme o orçamento.' },
  { q: 'Posso cancelar minha assinatura?', a: 'Sim. As regras de cancelamento, renovação e cobrança serão exibidas de forma objetiva no checkout e na área da conta antes da contratação.' },
  { q: 'O que acontece quando acabar o preço de lançamento?', a: 'A condição promocional termina em 01/11/2026. Depois dessa data, passam a valer os preços regulares exibidos nos planos.' }
];

export function renderFaqs(faqList) {
  if (!faqList) return;
  faqList.innerHTML = faqs.map((item, index) => `<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index}"><span>${item.q}</span><span class="faq-icon" aria-hidden="true"></span></button><div class="faq-answer" id="faq-answer-${index}"><div><p>${item.a}</p></div></div></article>`).join('');
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
