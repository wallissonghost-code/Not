# Limpeza aplicada em 09/09/2026

- Removido CSS da antiga micro-demo do catálogo (`demo-stage`, `demo-player`, `demo-target`, `demo-controls` e relacionados).
- Removida regra global de navegação que estava indevidamente dentro de `game-map.css`.
- Catálogo, benefícios, planos, FAQ e utilidades de UI foram separados do arquivo central.
- `app.js` ficou responsável apenas por inicialização e roteamento de eventos.
- O mapa da experiência permanece como componente do catálogo e seu CSS é carregado junto ao componente.

Pendência controlada: `polish.css` ainda contém refinamentos de componentes que também possuem regras-base em outros arquivos. Ele não foi apagado de uma vez para evitar regressão visual; futuras alterações devem migrar essas regras para os respectivos arquivos proprietários e remover as antigas na mesma mudança.
