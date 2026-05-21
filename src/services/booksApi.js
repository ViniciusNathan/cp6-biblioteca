const API_URL =
  "https://raw.githubusercontent.com/proflucassousa/api-books/main/livros.json";

export async function buscarLivros() {
  const resposta = await fetch(API_URL);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar os livros");
  }

  const dados = await resposta.json();
  return dados;
}
