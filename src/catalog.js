export const catalogGames = [
  { name: 'Caos Live', meta: 'Sobrevivência · Mundo aberto', status: 'Disponível', available: true, accent: '#b8ff3d' },
  { name: 'Merge Live', meta: 'Combine · Evolua · Interaja', status: 'Disponível', available: true, accent: '#74f2ce' },
  { name: 'WAR', meta: 'Combate', status: 'Em desenvolvimento', available: false, accent: '#8290ff' },
  { name: 'Slot 04', meta: 'Nova experiência', status: 'Manutenção', available: false, accent: '#657080' },
  { name: 'Slot 05', meta: 'Nova experiência', status: 'Manutenção', available: false, accent: '#657080' }
];

const gameMaps = {
  0: { format: 'Vertical · 9:16', platforms: ['iOS', 'Android', 'Desktop'], install: 'Acesso pela NOT', loopTitle: 'Sobreviva e evolua', loopText: 'Mobs surgem continuamente. Combata, ganhe XP e evolua durante a partida.', leftTitle: 'Combate', leftText: 'Armas, dano, vida e progressão.', rightTitle: 'Skills', rightText: 'Necromante · Fênix', events: 'Eventos de partida', eventText: 'XP em dobro · Meteoros' },
  1: { format: 'Vertical · Mobile first', platforms: ['iOS', 'Android', 'Desktop'], install: 'Acesso pela NOT', loopTitle: 'Combine e evolua', loopText: 'Peças iguais se combinam e avançam a progressão enquanto a audiência interage.', leftTitle: 'Merge', leftText: 'Combine iguais e desbloqueie a próxima evolução.', rightTitle: 'Interação', rightText: 'Ações da audiência afetam a partida.', events: 'Progressão', eventText: 'Evoluções · Pontuação' }
};

function mapMarkup(game, index) {
  const m = gameMaps[index] || gameMaps[0];
  return `<section class="game-map" style="--map-accent:${game.accent}">
    <div class="map-head"><strong><i></i> MAPA DA EXPERIÊNCIA · ${game.name.toUpperCase()}</strong><span>visão geral</span></div>
    <div class="map-flow">
      <article class="map-node primary"><span class="map-node-label">01 · Experiência</span><strong>${game.name}</strong><div class="map-chips"><span class="map-chip accent">${m.format}</span>${m.platforms.map(x => `<span class="map-chip">${x}</span>`).join('')}</div></article>
      <div class="map-link"><i></i></div>
      <article class="map-node"><span class="map-node-label">02 · Acesso</span><strong>${m.install}</strong><p>Compatibilidade e formato preparados para a experiência NOT.</p></article>
      <div class="map-link"><i></i></div>
      <article class="map-node"><span class="map-node-label">03 · Loop principal</span><strong>${m.loopTitle}</strong><p>${m.loopText}</p></article>
      <div class="map-link"><i></i></div>
      <div class="map-split"><article class="map-node"><span class="map-node-label">04A · Mecânica</span><strong>${m.leftTitle}</strong><p>${m.leftText}</p></article><article class="map-node"><span class="map-node-label">04B · Recursos</span><strong>${m.rightTitle}</strong><p>${m.rightText}</p></article></div>
      <div class="map-link"><i></i></div>
      <article class="map-node"><span class="map-node-label">05 · Dinâmica</span><strong>${m.events}</strong><p>${m.eventText}</p></article>
    </div>
    <div class="map-footer">Uma visão rápida de <b>como a experiência funciona</b> antes de jogar.</div>
  </section>`;
}

export function renderCatalog(gameGrid) {
  if (!gameGrid) return;
  gameGrid.classList.add('catalog-selector');
  gameGrid.innerHTML = `<div class="catalog-list">${catalogGames.map((g, i) => `<button class="catalog-row ${g.available ? 'available' : 'disabled'} ${i === 0 ? 'selected' : ''}" type="button" ${g.available ? `data-select-game="${i}"` : ''} style="--game-accent:${g.accent}"><span class="catalog-index">${String(i + 1).padStart(2, '0')}</span><span class="catalog-name"><strong>${g.name}</strong><small>${g.meta}</small></span><span class="catalog-status"><i></i>${g.status}</span><b class="catalog-arrow">${g.available ? '↗' : '—'}</b></button>`).join('')}</div><div class="catalog-preview">${mapMarkup(catalogGames[0], 0)}</div>`;
}

export function selectCatalogGame(gameGrid, index) {
  const game = catalogGames[index];
  if (!game?.available || !gameGrid) return;
  gameGrid.querySelectorAll('.catalog-row').forEach((row, i) => row.classList.toggle('selected', i === index));
  const preview = gameGrid.querySelector('.catalog-preview');
  if (!preview) return;
  preview.innerHTML = mapMarkup(game, index);
  preview.classList.remove('preview-in');
  void preview.offsetWidth;
  preview.classList.add('preview-in');
}
