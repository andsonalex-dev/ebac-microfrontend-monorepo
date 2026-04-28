const pratos = [
  { id: 1, nome: "Pizza", descricao: "Pizza de calabresa" },
  { id: 2, nome: "Hambúrguer", descricao: "Hambúrguer artesanal" },
  { id: 3, nome: "Sushi", descricao: "Sushi de salmão" },
  { id: 4, nome: "Salada", descricao: "Salada verde com molho" },
  { id: 5, nome: "Lasanha", descricao: "Lasanha à bolonhesa" },
  { id: 6, nome: "Frango Assado", descricao: "Frango assado com batatas e farofa" },
  { id: 7, nome: "Feijoada", descricao: "Feijoada completa com arroz, couve e laranja" }
];

export default function Cardapio() {
  const adicionar = (prato) => {
    window.dispatchEvent(
      new CustomEvent("add-item", { detail: prato })
    );
  };

  return (
    <div>
      <h2>Cardápio</h2>
      {pratos.map((p) => (
        <div key={p.id} className="card">
          <h3>{p.nome}</h3>
          <p>{p.descricao}</p>
          <button className="button" onClick={() => adicionar(p)}>
            Adicionar
          </button>
        </div>
      ))}
    </div>
  );
}