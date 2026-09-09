import { benefits, plans, launchEndsAt } from './data.js?v=18';
import { renderCatalog, selectCatalogGame } from './catalog.js?v=1';
import { renderBenefits } from './benefits.js?v=1';
import { renderFaqs, toggleFaq } from './faq.js?v=1';
import { createPlansController } from './plans.js?v=1';
import { installTouchGuards, createToast } from './ui.js?v=1';

const gameGrid = document.querySelector('[data-game-grid]');
const benefitList = document.querySelector('[data-benefit-list]');
const planGrid = document.querySelector('[data-plan-grid]');
const faqList = document.querySelector('[data-faq-list]');
const toast = document.querySelector('[data-toast]');
const year = document.querySelector('[data-year]');

if (year) year.textContent = new Date().getFullYear();
const showToast = createToast(toast);
const plansController = createPlansController({ planGrid, plans, launchEndsAt, showToast });

function handleClick(event) {
  const gameButton = event.target.closest('[data-select-game]');
  if (gameButton) {
    selectCatalogGame(gameGrid, Number(gameButton.dataset.selectGame));
    return;
  }

  const faqButton = event.target.closest('.faq-question');
  if (faqButton) {
    toggleFaq(faqButton);
    return;
  }

  const footerToggle = event.target.closest('.footer-toggle');
  if (footerToggle) {
    footerToggle.closest('.footer-group')?.classList.toggle('open');
    return;
  }

  const action = event.target.closest('[data-action]');
  if (!action) return;

  if (action.dataset.action === 'login') {
    showToast('Login Firebase será conectado na próxima etapa.');
    return;
  }

  plansController.handleAction(action);
}

installTouchGuards();
renderCatalog(gameGrid);
renderBenefits(benefitList, benefits);
renderFaqs(faqList);
plansController.start();
document.addEventListener('click', handleClick);
