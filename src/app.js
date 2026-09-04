import { games, benefits, plans } from './data.js';

const gameGrid = document.querySelector('[data-game-grid]');
const benefitList = document.querySelector('[data-benefit-list]');
const planGrid = document.querySelector('[data-plan-grid]');
const toast = document.querySelector('[data-toast]');
const year = document.querySelector('[data-year]');

if (year) year.textContent = new Date().getFullYear();

function renderGames() {
  if (!gameGrid) return;
  gameGrid.innerHTML = games.map((game) => `
    <article class="game-card" style="--game-accent:${game.accent}">
      <span class="game-card-index">${game.id}</span>
      <div class="game-card-symbol">${game.symbol}</div>
      <footer>
        <div>
          <h3>${game.title}</h3>
          <p>${game.genre}</p>
        </div>
        <span class="tag">${game.tag}</span>
      </footer>
    </article>
  `).join('');
}

function renderBenefits() {
  if (!benefitList) return;
  benefitList.innerHTML = benefits.map((item) => `
    <article class="benefit-item">
      <span class="benefit-number">${item.number}</span>
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `).join('');
}

function renderPlans() {
  if (!planGrid) return;
  planGrid.innerHTML = plans.map((plan) => `
    <article class="plan-card ${plan.featured ? 'featured' : ''}">
      <div class="plan-label">
        ${plan.name}
        ${plan.badge ? `<span>${plan.badge}</span>` : ''}
      </div>
      <div class="plan-price">R$ ${plan.price} <small>${plan.suffix}</small></div>
      <p class="plan-description">${plan.description}</p>
      <div class="plan-features">
        ${plan.features.map((feature) => `<span>${feature}</span>`).join('')}
      </div>
      <button class="primary-button" type="button" data-action="subscribe" data-plan="${plan.name}">
        Escolher ${plan.name} <span>↗</span>
      </button>
    </article>
  `).join('');
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

  if (target.dataset.action === 'login') {
    showToast('Login Firebase será conectado na próxima etapa.');
  }

  if (target.dataset.action === 'subscribe') {
    showToast(`Plano ${target.dataset.plan} selecionado. Checkout entra na próxima etapa.`);
  }
});

renderGames();
renderBenefits();
renderPlans();