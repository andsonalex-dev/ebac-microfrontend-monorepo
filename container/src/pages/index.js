import dynamic from "next/dynamic";

const Cardapio = dynamic(() => import("cardapio/Cardapio"), {
  ssr: false,
});

const Pedido = dynamic(() => import("pedido/Pedido"), {
  ssr: false,
});

export default function Home() {
  return (
  <div className="container">
      <h1>Pedido Online</h1>

      <div className="layout">
        <div className="box">
          <Cardapio />
        </div>

        <div className="box">
          <Pedido />
        </div>
      </div>
    </div>
  );
}