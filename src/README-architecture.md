# Estrutura frontend da NOT

- `app.js`: ponto de entrada e orquestração de eventos.
- `catalog.js`: catálogo e mapa das experiências.
- `benefits.js`: renderização dos benefícios.
- `plans.js`: planos, oferta e contador.
- `faq.js`: FAQ e interação de abertura/fechamento.
- `ui.js`: comportamento compartilhado de interface.
- `data.js`: dados comerciais e conteúdo estático.

## Regras de manutenção

1. Evitar redefinir o mesmo componente em vários arquivos CSS.
2. Remover estilos e scripts quando uma experiência antiga for substituída.
3. Componentes não devem controlar elementos globais fora de sua responsabilidade.
4. `app.js` deve permanecer pequeno e apenas coordenar módulos.
5. Novas features devem entrar em módulos próprios, sem remendos sobre implementações antigas.
