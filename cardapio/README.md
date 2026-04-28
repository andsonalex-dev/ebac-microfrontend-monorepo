# cardapio — Microfrontend (Remote)

Microfrontend que expõe o componente `Cardapio` via **Module Federation** para ser consumido pelo `container`.

## Stack

| Pacote | Versão |
|---|---|
| Next.js | 14.2.5 |
| React | 18 |
| @module-federation/nextjs-mf | 8.8.65 |
| webpack | 5.90.0 |
| enhanced-resolve | 5.15.0 |

## Module Federation

- **Nome:** `cardapio`
- **remoteEntry:** `http://localhost:3001/_next/static/chunks/remoteEntry.js`
- **Expõe:**

```js
"./Cardapio": "./src/components/Cardapio"
```

## Como rodar isoladamente

```bash
npm install
npm run dev
```

Acesse: [http://localhost:3001](http://localhost:3001)

> A variável `NEXT_PRIVATE_LOCAL_WEBPACK=true` já está configurada no script `dev` do `package.json` — obrigatória para o `nextjs-mf` funcionar corretamente.

## Criando o componente exposto

Antes de integrar com o `container`, o arquivo abaixo precisa existir:

```
src/components/Cardapio.js   (ou .jsx / .tsx)
```

Exemplo mínimo:

```jsx
export default function Cardapio() {
  return <div>Cardápio</div>;
}
```

## Notas de compatibilidade

- `webpack` fixado em `5.90.0` e `enhanced-resolve` em `5.15.0` para evitar o erro `_resolveContext_stack.delete is not a function` que ocorre com versões mais recentes do webpack junto ao Next 14 + nextjs-mf.
- `styled-jsx` listado diretamente como dependência porque o plugin do nextjs-mf resolve `styled-jsx/package.json` a partir da raiz da aplicação.
