# container — Microfrontend (Host)

Aplicação host que orquestra e consome os microfrontends `cardapio` e `pedido` via **Module Federation**.

## Stack

| Pacote | Versão |
|---|---|
| Next.js | 14.2.5 |
| React | 18 |
| @module-federation/nextjs-mf | 8.8.65 |
| webpack | 5.90.0 |
| enhanced-resolve | 5.15.0 |

## Module Federation

- **Nome:** `container`
- **Consome (remotes):**

| Remote | URL |
|---|---|
| `cardapio` | `http://localhost:3001/_next/static/chunks/remoteEntry.js` |
| `pedido` | `http://localhost:3002/_next/static/chunks/remoteEntry.js` |

## Como rodar isoladamente

```bash
npm install
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

> A variável `NEXT_PRIVATE_LOCAL_WEBPACK=true` já está configurada no script `dev` do `package.json`.

## Como rodar integrado (todos os microfrontends)

Abra três terminais e rode cada app na ordem abaixo:

```bash
# Terminal 1 — remote cardapio (porta 3001)
cd cardapio && npm run dev

# Terminal 2 — remote pedido (porta 3002)
cd pedido && npm run dev

# Terminal 3 — host container (porta 3000)
cd container && npm run dev
```

> O host só consegue carregar os remotes se `cardapio` e `pedido` já estiverem rodando.

## Notas de compatibilidade

- `webpack` fixado em `5.90.0` e `enhanced-resolve` em `5.15.0` para evitar o erro `_resolveContext_stack.delete is not a function`.
- `styled-jsx` listado diretamente como dependência porque o plugin do nextjs-mf resolve `styled-jsx/package.json` a partir da raiz da aplicação.
