import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { buscarLivros } from "../services/booksApi";
import "./UltimosLancamentos.css";

export default function UltimosLancamentos() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    buscarLivros()
      .then((dados) => {
        const ordenados = [...dados].sort((a, b) => {
          const anoA = Number(a.ano) || 0;
          const anoB = Number(b.ano) || 0;
          return anoB - anoA;
        });
        setLivros(ordenados.slice(0, 5));
        setCarregando(false);
      })
      .catch((e) => {
        setErro(e.message || "Erro ao carregar os livros.");
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return (
      <div className="status-container">
        <div className="spinner" />
        <p>Carregando lancamentos...</p>
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
      <h1 className="pagina__titulo">Ultimos Lancamentos</h1>
      <p className="pagina__subtitulo">Os 5 titulos mais recentes da biblioteca</p>

      <div className="grid-livros">
        {livros.map((livro) => (
          <BookCard
            key={livro.id ?? livro.titulo}
            livro={livro}
            destaque={true}
          />
        ))}
      </div>
    </main>
  );
}
