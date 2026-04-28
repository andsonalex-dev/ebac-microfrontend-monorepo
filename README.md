# EBAC Microfrontend — Monorepo

Projeto de microfrontends construído com **Next.js 14** e **Module Federation** (`@module-federation/nextjs-mf`), organizado como um **npm workspaces monorepo**.

## Arquitetura

```
ebac-microfrontend/
├── container/   → Host (porta 3000) — consome os remotes
├── cardapio/    → Remote (porta 3001) — expõe ./Cardapio
└── pedido/      → Remote (porta 3002) — expõe ./Pedido
```

O **container** carrega os componentes `Cardapio` e `Pedido` em tempo de execução via Module Federation, sem precisar de builds conjuntos.

## Pré-requisitos

- Node.js 18+
- npm 8+ (suporte a workspaces)

## Instalação

```bash
npm install
```

Todas as dependências são instaladas na raiz e compartilhadas entre os pacotes.

## Desenvolvimento

Subir todos os apps simultaneamente:

```bash
npm run dev
```

Ou individualmente:

```bash
npm run dev:container   # http://localhost:3000
npm run dev:cardapio    # http://localhost:3001
npm run dev:pedido      # http://localhost:3002
```

> Os remotes (`cardapio` e `pedido`) devem estar rodando antes de acessar o `container`.

## Build

```bash
npm run build
```

Executa o build sequencialmente: `container` → `cardapio` → `pedido`.

## Pacotes

| Pacote | Papel | Porta | Expõe |
|---|---|---|---|
| `container` | Host | 3000 | — |
| `cardapio` | Remote | 3001 | `./Cardapio` |
| `pedido` | Remote | 3002 | `./Pedido` |

## Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [@module-federation/nextjs-mf](https://github.com/module-federation/universe)
- [npm Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces)
