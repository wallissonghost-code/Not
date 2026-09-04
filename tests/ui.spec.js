import { test, expect } from '@playwright/test';

async function collectLayoutProblems(page) {
  return page.evaluate(() => {
    const body = document.body;
    const html = document.documentElement;
    const text = body.innerText || '';
    const buttons = [...document.querySelectorAll('button, a.primary-button')];
    const cards = [...document.querySelectorAll('.plan-card')];

    const clippedButtons = buttons.filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width <= 0 || r.height <= 0 || r.left < -2 || r.right > innerWidth + 2;
    }).length;

    const tinyCards = cards.filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width < 240 || r.height < 300;
    }).length;

    return {
      hasObjectObject: text.includes('[object Object]'),
      pageOverflow: Math.max(body.scrollWidth, html.scrollWidth) > innerWidth + 4,
      clippedButtons,
      tinyCards,
      cardCount: cards.length,
      normalHasLabels: text.includes('Acesso a uma seleção de jogos') && text.includes('Catálogo completo de jogos'),
      creatorVisible: text.includes('Seu jogo. Do seu jeito.') && text.includes('Solicitar projeto')
    };
  });
}

test.beforeEach(async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.waitForSelector('.plan-card');
  page.__runtimeErrors = errors;
});

test('não renderiza dados quebrados e mantém conteúdo essencial', async ({ page }) => {
  const result = await collectLayoutProblems(page);
  expect(result.hasObjectObject).toBeFalsy();
  expect(result.cardCount).toBe(4);
  expect(result.normalHasLabels).toBeTruthy();
  expect(result.creatorVisible).toBeTruthy();
  expect(page.__runtimeErrors).toEqual([]);
});

test('layout não estoura a página nem corta CTAs', async ({ page }) => {
  const result = await collectLayoutProblems(page);
  expect(result.pageOverflow).toBeFalsy();
  expect(result.clippedButtons).toBe(0);
  expect(result.tinyCards).toBe(0);
});

test('cards de assinatura permanecem alinhados no mobile', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-safari');
  const metrics = await page.evaluate(() => {
    const cards = [...document.querySelectorAll('.plan-card')];
    const subscriptionCards = cards.filter((card) => !card.classList.contains('commercial'));
    const tops = subscriptionCards.map((card) => Math.round(card.getBoundingClientRect().top));
    const bottoms = subscriptionCards.map((card) => Math.round(card.getBoundingClientRect().bottom));
    return { tops, bottoms };
  });

  expect(Math.max(...metrics.tops) - Math.min(...metrics.tops)).toBeLessThanOrEqual(2);
  expect(Math.max(...metrics.bottoms) - Math.min(...metrics.bottoms)).toBeLessThanOrEqual(4);
});
