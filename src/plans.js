export function createPlansController({ planGrid, plans, launchEndsAt, showToast }) {
  const launchDeadline = new Date(launchEndsAt).getTime();
  let offerRevealed = false;

  const isLaunchActive = () => Date.now() < launchDeadline;
  const discountPercent = (regularPrice, launchPrice) => Math.round((1 - Number(launchPrice.replace(',', '.')) / Number(regularPrice.replace(',', '.'))) * 100);

  function countdownMarkup() {
    const remaining = Math.max(0, launchDeadline - Date.now());
    const total = Math.floor(remaining / 1000);
    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    return `<div class="card-offer-timer"><span class="timer-label"><i></i> oferta por tempo limitado</span><div class="timer-values"><b>${days}</b><small>dias</small><b>${hours}</b><small>h</small><b>${minutes}</b><small>min</small><b>${seconds}</b><small>seg</small></div></div>`;
  }

  function renderFeatures(plan) {
    if (plan.commercial) return plan.features.map(feature => `<span class="feature-item included">${feature}</span>`).join('');
    return plan.features.map(feature => `<span class="feature-item ${feature.included ? 'included' : 'unavailable'}">${feature.label}</span>`).join('');
  }

  function render() {
    if (!planGrid) return;
    const active = isLaunchActive();
    planGrid.innerHTML = plans.map(plan => {
      let price = '';
      if (plan.commercial) {
        price = `<div class="creator-symbol" aria-hidden="true">&lt;/&gt;</div><h3 class="creator-headline">${plan.headline}</h3><div class="commercial-price">${plan.priceLabel}</div>`;
      } else if (active && offerRevealed) {
        const discount = discountPercent(plan.regularPrice, plan.launchPrice);
        price = `<div class="offer-activated"><i></i> OFERTA ATIVADA</div><div class="price-offer-row"><span class="regular-price">R$ ${plan.regularPrice}</span><span class="discount-pill">-${discount}%</span></div><div class="launch-price-row price-reveal"><span class="currency">R$</span><strong>${plan.launchPrice}</strong><small>${plan.suffix}</small></div>${countdownMarkup()}`;
      } else {
        price = `<div class="regular-entry-price"><span class="currency">R$</span><strong>${plan.regularPrice}</strong><small>${plan.suffix}</small></div><span class="regular-entry-caption">valor regular</span>`;
      }
      const toneClass = plan.tone ? `plan-${plan.tone}` : '';
      return `<article class="plan-card ${toneClass} ${plan.featured ? 'featured' : ''} ${plan.commercial ? 'commercial' : ''} ${offerRevealed && active && !plan.commercial ? 'offer-active' : ''}"><div class="plan-label">${plan.name}${plan.badge ? `<span>${plan.badge}</span>` : ''}</div>${price}<p class="plan-description">${plan.description}</p><div class="plan-features">${renderFeatures(plan)}</div><button class="primary-button" type="button" data-action="${plan.commercial ? 'creator' : 'subscribe'}" data-plan="${plan.name}">${plan.commercial ? 'Solicitar projeto' : `Escolher ${plan.name}`} <span>↗</span></button></article>`;
    }).join('');
  }

  function updateCountdowns() {
    if (!offerRevealed || !isLaunchActive()) return;
    document.querySelectorAll('.card-offer-timer').forEach(timer => {
      const remaining = Math.max(0, launchDeadline - Date.now());
      const total = Math.floor(remaining / 1000);
      const days = Math.floor(total / 86400);
      const hours = Math.floor((total % 86400) / 3600);
      const minutes = Math.floor((total % 3600) / 60);
      const seconds = total % 60;
      timer.querySelector('.timer-values').innerHTML = `<b>${days}</b><small>dias</small><b>${hours}</b><small>h</small><b>${minutes}</b><small>min</small><b>${seconds}</b><small>seg</small>`;
    });
  }

  function handleAction(target) {
    if (target.dataset.action === 'subscribe') showToast(`Plano ${target.dataset.plan} selecionado. Checkout entra na próxima etapa.`);
    if (target.dataset.action === 'creator') showToast('Conte sua ideia para a NOT. O formulário de orçamento entra na próxima etapa.');
  }

  function start() {
    render();
    if (isLaunchActive()) setTimeout(() => { offerRevealed = true; render(); }, 1450);
    setInterval(updateCountdowns, 1000);
  }

  return { start, handleAction };
}
