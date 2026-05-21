import "./BookCard.css";

const DESCRICAO_MAX = 120;

export default function BookCard({ livro, destaque = false }) {
  const resumo =
    livro.descricao?.length > DESCRICAO_MAX
      ? livro.descricao.slice(0, DESCRICAO_MAX) + "..."
      : livro.descricao;

  return (
    <div className={`book-card ${destaque ? "book-card--destaque" : ""}`}>
      {destaque && <span className="badge-novo">Novo Lancamento</span>}
      <img
        src={livro.imagem}
        alt={livro.titulo}
        className="book-card__imagem"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/150x200?text=Sem+Imagem";
        }}
      />
      <div className="book-card__info">
        <h3 className="book-card__titulo">{livro.titulo}</h3>
        <p className="book-card__resumo">{resumo}</p>
      </div>
    </div>
  );
}
