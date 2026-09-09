import { games, benefits, plans, launchEndsAt } from './data.js?v=18';

const gameGrid = document.querySelector('[data-game-grid]');
const benefitList = document.querySelector('[data-benefit-list]');
const planGrid = document.querySelector('[data-plan-grid]');
const faqList = document.querySelector('[data-faq-list]');
const toast = document.querySelector('[data-toast]');
const year = document.querySelector('[data-year]');

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

if (year) year.textContent = new Date().getFullYear();

let lastTouchEnd = 0;
document.addEventListener('gesturestart', (event) => event.preventDefault(), { passive: false });
document.addEventListener('gesturechange', (event) => event.preventDefault(), { passive: false });
document.addEventListener('gestureend', (event) => event.preventDefault(), { passive: false });
document.addEventListener('touchmove', (event) => { if (event.touches.length > 1) event.preventDefault(); }, { passive: false });
document.addEventListener('touchend', (event) => { const now = Date.now(); if (now - lastTouchEnd <= 300) event.preventDefault(); lastTouchEnd = now; }, { passive: false });
document.addEventListener('dblclick', (event) => event.preventDefault());

const launchDeadline = new Date(launchEndsAt).getTime();
const isLaunchActive = () => Date.now() < launchDeadline;
let offerRevealed = false;

function demoMarkup(game, index) {
  const labels = ['INTERAÇÃO', 'PRESENTE', 'EVENTO'];
  return `<div class="game-demo" data-demo="${index}" style="--game-accent:${game.accent}">
    <div class="demo-top"><span><i></i> DEMO AO VIVO</span><small>toque para testar</small></div>
    <div class="demo-stage" aria-label="Prévia interativa de ${game.title}">
      <div class="demo-grid"></div><div class="demo-orb orb-a"></div><div class="demo-orb orb-b"></div>
      <div class="demo-player"><span>NOT</span></div><div class="demo-target target-a"></div><div class="demo-target target-b"></div>
      <div class="demo-event">Pronto para interagir</div>
    </div>
    <div class="demo-controls">${labels.map((label, i) => `<button type="button" data-demo-action="${i}" aria-label="Simular ${label.toLowerCase()}">${label}</button>`).join('')}</div>
  </div>`;
}

function renderGames() {
  if (!gameGrid) return;
  gameGrid.innerHTML = games.map((game, index) => `<article class="game-card" style="--game-accent:${game.accent}"><span class="game-card-index">${game.id}</span><div class="game-card-symbol">${game.symbol}</div><footer><div><h3>${game.title}</h3><p>${game.genre}</p></div><span class="tag">${game.tag}</span></footer><button class="demo-launch" type="button" data-demo-launch="${index}"><span>Testar experiência</span><b>▶</b></button>${demoMarkup(game, index)}</article>`).join('');
}

function renderBenefits() {
  if (!benefitList) return;
  benefitList.innerHTML = benefits.map((item) => `<article class="benefit-item"><span class="benefit-number">${item.number}</span><div><h3>${item.title}</h3><p>${item.description}</p></div></article>`).join('');
}

function renderFaqs() {
  if (!faqList) return;
  faqList.innerHTML = faqs.map((item, index) => `<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index}"><span>${item.q}</span><span class="faq-icon" aria-hidden="true"></span></button><div class="faq-answer" id="faq-answer-${index}"><div><p>${item.a}</p></div></div></article>`).join('');
}

function discountPercent(regularPrice, launchPrice) { const regular = Number(regularPrice.replace(',', '.')); const launch = Number(launchPrice.replace(',', '.')); return Math.round((1 - launch / regular) * 100); }
function countdownMarkup() { const remaining = Math.max(0, launchDeadline - Date.now()); const totalSeconds = Math.floor(remaining / 1000); const days = Math.floor(totalSeconds / 86400); const hours = Math.floor((totalSeconds % 86400) / 3600); const minutes = Math.floor((totalSeconds % 3600) / 60); const seconds = totalSeconds % 60; return `<div class="card-offer-timer"><span class="timer-label"><i></i> oferta por tempo limitado</span><div class="timer-values"><b>${days}</b><small>dias</small><b>${hours}</b><small>h</small><b>${minutes}</b><small>min</small><b>${seconds}</b><small>seg</small></div></div>`; }
function renderPlanFeatures(plan) { if (plan.commercial) return plan.features.map((feature) => `<span class="feature-item included">${feature}</span>`).join(''); return plan.features.map((feature) => `<span class="feature-item ${feature.included ? 'included' : 'unavailable'}">${feature.label}</span>`).join(''); }

function renderPlans() {
  if (!planGrid) return; const launchActive = isLaunchActive();
  planGrid.innerHTML = plans.map((plan) => { let priceMarkup = '';
    if (plan.commercial) priceMarkup = `<div class="creator-symbol" aria-hidden="true">&lt;/&gt;</div><h3 class="creator-headline">${plan.headline}</h3><div class="commercial-price">${plan.priceLabel}</div>`;
    else if (launchActive && offerRevealed) { const discount = discountPercent(plan.regularPrice, plan.launchPrice); priceMarkup = `<div class="offer-activated"><i></i> OFERTA ATIVADA</div><div class="price-offer-row"><span class="regular-price">R$ ${plan.regularPrice}</span><span class="discount-pill">-${discount}%</span></div><div class="launch-price-row price-reveal"><span class="currency">R$</span><strong>${plan.launchPrice}</strong><small>${plan.suffix}</small></div>${countdownMarkup()}`; }
    else priceMarkup = `<div class="regular-entry-price"><span class="currency">R$</span><strong>${plan.regularPrice}</strong><small>${plan.suffix}</small></div><span class="regular-entry-caption">valor regular</span>`;
    return `<article class="plan-card ${plan.featured ? 'featured' : ''} ${plan.commercial ? 'commercial' : ''} ${offerRevealed && launchActive && !plan.commercial ? 'offer-active' : ''}"><div class="plan-label">${plan.name}${plan.badge ? `<span>${plan.badge}</span>` : ''}</div>${priceMarkup}<p class="plan-description">${plan.description}</p><div class="plan-features">${renderPlanFeatures(plan)}</div><button class="primary-button" type="button" data-action="${plan.commercial ? 'creator' : 'subscribe'}" data-plan="${plan.name}">${plan.commercial ? 'Solicitar projeto' : `Escolher ${plan.name}`} <span>↗</span></button></article>`;
  }).join('');
}

function revealOfferInCards() { if (!isLaunchActive()) return; window.setTimeout(() => { offerRevealed = true; renderPlans(); }, 1450); }
function updateCardCountdowns() { if (!offerRevealed || !isLaunchActive()) return; document.querySelectorAll('.card-offer-timer').forEach((timer) => { const remaining = Math.max(0, launchDeadline - Date.now()); const totalSeconds = Math.floor(remaining / 1000); const days = Math.floor(totalSeconds / 86400); const hours = Math.floor((totalSeconds % 86400) / 3600); const minutes = Math.floor((totalSeconds % 3600) / 60); const seconds = totalSeconds % 60; timer.querySelector('.timer-values').innerHTML = `<b>${days}</b><small>dias</small><b>${hours}</b><small>h</small><b>${minutes}</b><small>min</small><b>${seconds}</b><small>seg</small>`; }); }
function showToast(message) { if (!toast) return; toast.textContent = message; toast.classList.add('visible'); window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => toast.classList.remove('visible'), 2600); }

const demoMessages = [
  ['AUDIÊNCIA ENTROU', 'PRESENTE RECEBIDO', 'EVENTO ATIVADO'],
  ['NOVO PARTICIPANTE', 'AÇÃO DA LIVE', 'DESAFIO ATIVADO'],
  ['COMENTÁRIO DETECTADO', 'PRESENTE RECEBIDO', 'MODO ESPECIAL']
];

function triggerDemo(button) {
  const demo = button.closest('.game-demo'); if (!demo) return;
  const action = Number(button.dataset.demoAction || 0); const index = Number(demo.dataset.demo || 0);
  const stage = demo.querySelector('.demo-stage'); const event = demo.querySelector('.demo-event');
  event.textContent = demoMessages[action]?.[index % 3] || demoMessages[action]?.[0] || 'INTERAÇÃO ATIVADA';
  stage.classList.remove('pulse-0', 'pulse-1', 'pulse-2'); void stage.offsetWidth; stage.classList.add(`pulse-${action}`);
}

document.addEventListener('click', (event) => {
  const demoLaunch = event.target.closest('[data-demo-launch]');
  if (demoLaunch) { const card = demoLaunch.closest('.game-card'); const open = card.classList.toggle('demo-open'); demoLaunch.querySelector('span').textContent = open ? 'Fechar demonstração' : 'Testar experiência'; if (open) setTimeout(() => card.querySelector('.game-demo')?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' }), 180); return; }
  const demoAction = event.target.closest('[data-demo-action]'); if (demoAction) { triggerDemo(demoAction); return; }
  const faqButton = event.target.closest('.faq-question');
  if (faqButton) { const item = faqButton.closest('.faq-item'); const willOpen = !item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach((openItem) => { openItem.classList.remove('open'); openItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false'); }); if (willOpen) { item.classList.add('open'); faqButton.setAttribute('aria-expanded', 'true'); } return; }
  const footerToggle = event.target.closest('.footer-toggle'); if (footerToggle) { footerToggle.closest('.footer-group')?.classList.toggle('open'); return; }
  const target = event.target.closest('[data-action]'); if (!target) return;
  if (target.dataset.action === 'login') showToast('Login Firebase será conectado na próxima etapa.');
  if (target.dataset.action === 'subscribe') showToast(`Plano ${target.dataset.plan} selecionado. Checkout entra na próxima etapa.`);
  if (target.dataset.action === 'creator') showToast('Conte sua ideia para a NOT. O formulário de orçamento entra na próxima etapa.');
});

renderGames(); renderBenefits(); renderPlans(); renderFaqs(); revealOfferInCards(); setInterval(updateCardCountdowns, 1000);