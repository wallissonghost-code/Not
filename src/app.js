import { games, benefits, plans, launchEndsAt } from './data.js?v=4';

const gameGrid = document.querySelector('[data-game-grid]');
const benefitList = document.querySelector('[data-benefit-list]');
const planGrid = document.querySelector('[data-plan-grid]');
const toast = document.querySelector('[data-toast]');
const year = document.querySelector('[data-year]');
const countdown = document.querySelector('[data-countdown]');
const launchCampaign = document.querySelector('[data-launch-campaign]');

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

function renderGames() {
  if (!gameGrid) return;
  gameGrid.innerHTML = games.map((game) => `
    <article class="game-card" style="--game-accent:${game.accent}">
      <span class="game-card-index">${game.id}</span>
      <div class="game-card-symbol">${game.symbol}</div>
      <footer><div><h3>${game.title}</h3><p>${game.genre}</p></div><span class="tag">${game.tag}</span></footer>
    </article>
  `).join('');
}

function renderBenefits() {
  if (!benefitList) return;
  benefitList.innerHTML = benefits.map((item) => `
    <article class="benefit-item"><span class="benefit-number">${item.number}</span><div><h3>${item.title}</h3><p>${item.description}</p></div></article>
  `).join('');
}

function discountPercent(regularPrice, launchPrice) {
  const regular = Number(regularPrice.replace(',', '.'));
  const launch = Number(launchPrice.replace(',', '.'));
  return Math.round((1 - launch / regular) * 100);
}

function renderPlans() {
  if (!planGrid) return;
  const launchActive = isLaunchActive();

  planGrid.innerHTML = plans.map((plan) => {
    let priceMarkup = '';

    if (plan.commercial) {
      priceMarkup = `<div class="commercial-price">${plan.priceLabel}</div>`;
    } else if (launchActive) {
      const discount = discountPercent(plan.regularPrice, plan.launchPrice);
      priceMarkup = `
        <div class="price-offer-row">
          <span class="regular-price">de R$ ${plan.regularPrice}</span>
          <span class="discount-pill">-${discount}%</span>
        </div>
        <div class="launch-price-row">
          <span class="currency">R$</span>
          <strong>${plan.launchPrice}</strong>
          <small>${plan.suffix}</small>
        </div>
        <span class="launch-price-caption">preço de lançamento</span>
      `;
    } else {
      priceMarkup = `<div class="launch-price-row"><span class="currency">R$</span><strong>${plan.regularPrice}</strong><small>${plan.suffix}</small></div>`;
    }

    return `
      <article class="plan-card ${plan.featured ? 'featured' : ''} ${plan.commercial ? 'commercial' : ''}">
        <div class="plan-label">${plan.name}${plan.badge ? `<span>${plan.badge}</span>` : ''}</div>
        ${priceMarkup}
        <p class="plan-description">${plan.description}</p>
        <div class="plan-features">${plan.features.map((feature) => `<span>${feature}</span>`).join('')}</div>
        <button class="primary-button" type="button" data-action="${plan.commercial ? 'creator' : 'subscribe'}" data-plan="${plan.name}">${plan.commercial ? 'Falar com a NOT' : `Escolher ${plan.name}`} <span>↗</span></button>
      </article>
    `;
  }).join('');
}

function pad(value) { return String(value).padStart(2, '0'); }

function updateCountdown() {
  if (!countdown) return;
  const remaining = launchDeadline - Date.now();

  if (remaining <= 0) {
    countdown.innerHTML = '<div class="campaign-ended">Condição encerrada</div>';
    launchCampaign?.classList.add('ended');
    renderPlans();
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdown.innerHTML = `
    <div class="time-unit"><strong>${pad(days)}</strong><span>dias</span></div><i>:</i>
    <div class="time-unit"><strong>${pad(hours)}</strong><span>h</span></div><i>:</i>
    <div class="time-unit"><strong>${pad(minutes)}</strong><span>min</span></div><i>:</i>
    <div class="time-unit"><strong>${pad(seconds)}</strong><span>seg</span></div>
  `;
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('visible'), 2600);
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target) return;
  if (target.dataset.action === 'login') showToast('Login Firebase será conectado na próxima etapa.');
  if (target.dataset.action === 'subscribe') showToast(`Plano ${target.dataset.plan} selecionado. Checkout entra na próxima etapa.`);
  if (target.dataset.action === 'creator') showToast('Plano Creator selecionado. O contato comercial entra na próxima etapa.');
});

renderGames();
renderBenefits();
renderPlans();
updateCountdown();
setInterval(updateCountdown, 1000);