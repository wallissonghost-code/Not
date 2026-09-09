export function renderBenefits(benefitList, benefits) {
  if (!benefitList) return;
  benefitList.innerHTML = benefits.map(item => `<article class="benefit-item"><span class="benefit-number">${item.number}</span><div><h3>${item.title}</h3><p>${item.description}</p></div></article>`).join('');
}
