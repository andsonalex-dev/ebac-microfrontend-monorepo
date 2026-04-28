import { useEffect, useState } from "react";

export default function Pedido() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const handler = (event) => {
      setItens((prev) => [...prev, event.detail]);
    };

    window.addEventListener("add-item", handler);

    return () => {
      window.removeEventListener("add-item", handler);
    };
  }, []);

  return (
    <div>
      <h2>Pedido</h2>
      {itens.map((item, index) => (
        <div key={index} className="item">
          {item.nome}
        </div>
      ))}
    </div>
  );
}