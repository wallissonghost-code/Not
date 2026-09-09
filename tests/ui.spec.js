import { test, expect } from '@playwright/test';

async function collectLayoutProblems(page) {
  return page.evaluate(() => {
    const body = document.body;
    const html = document.documentElement;
    const text = body.innerText || '';
    const cards = [...document.querySelectorAll('.plan-card')];

    const clippedButtons = cards.filter((card) => {
      const button = card.querySelector('button, a.primary-button');
      if (!button) return true;
      const c = card.getBoundingClientRect();
      const b = button.getBoundingClientRect();
      return b.width <= 0 || b.height <= 0 || b.left < c.left - 2 || b.right > c.right + 2 || b.bottom > c.bottom + 2;
    }).length;

    const rects = cards.map((card) => {
      const r = card.getBoundingClientRect();
      return { width: Math.round(r.width), height: Math.round(r.height), top: Math.round(r.top), bottom: Math.round(r.bottom) };
    });

    return {
      hasObjectObject: text.includes('[object Object]'),
      pageOverflow: Math.max(body.scrollWidth, html.scrollWidth) > innerWidth + 4,
      clippedButtons,
      cardCount: cards.length,
      rects,
      normalHasLabels: text.includes('Acesso a uma seleção de jogos') && text.includes('Catálogo completo de jogos'),
      creatorVisible: text.includes('Seu conteúdo. Seu jogo.') && text.includes('Solicitar projeto')
    };
  });
}

test.beforeEach(async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.waitForSelector('.plan-card');
  await page.waitForTimeout(1700);
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

test('layout não estoura a página nem corta CTAs dentro dos cards', async ({ page }) => {
  const result = await collectLayoutProblems(page);
  expect(result.pageOverflow).toBeFalsy();
  expect(result.clippedButtons).toBe(0);
});

test('cards de assinatura usam proporção compacta e consistente', async ({ page }) => {
  const result = await collectLayoutProblems(page);
  const widths = result.rects.map((r) => r.width);
  const heights = result.rects.map((r) => r.height);

  expect(Math.max(...widths)).toBeLessThanOrEqual(330);
  expect(Math.max(...heights)).toBeLessThanOrEqual(620);
  expect(Math.max(...heights) - Math.min(...heights)).toBeLessThanOrEqual(4);
});
