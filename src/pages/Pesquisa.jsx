import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { buscarLivros } from "../services/booksApi";
import "./Pesquisa.css";

export default function Pesquisa() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    buscarLivros()
      .then((dados) => {
        setLivros(dados);
        setCarregando(false);
      })
      .catch((e) => {
        setErro(e.message || "Erro ao carregar os livros.");
        setCarregando(false);
      });
  }, []);

  const livrosFiltrados = livros.filter((l) =>
    l.titulo?.toLowerCase().includes(busca.toLowerCase())
  );

  if (carregando) {
    return (
      <div className="status-container">
        <div className="spinner" />
        <p>Carregando livros...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="status-container">
        <p className="erro-msg">Ops! {erro}</p>
      </div>
    );
  }

  return (
    <main className="pagina">
      <h1 className="pagina__titulo">Pesquisar Livros</h1>

      <div className="busca-container">
        <input
          type="text"
          placeholder="Buscar pelo titulo..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="busca-input"
        />
      </div>

      {livrosFiltrados.length === 0 ? (
        <p className="sem-resultados">Nenhum livro encontrado para "{busca}".</p>
      ) : (
        <div className="grid-livros">
          {livrosFiltrados.map((livro) => (
            <BookCard key={livro.id ?? livro.titulo} livro={livro} />
          ))}
        </div>
      )}
    </main>
  );
}
