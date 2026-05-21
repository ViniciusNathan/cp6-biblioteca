# CP6 - Biblioteca Front-end

## Vinicius Nathan RM567105

Aplicacao React que consome uma API publica para listar livros de Front-end, com navegacao entre paginas de Pesquisa e Ultimos Lancamentos.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## Estrutura

```
src/
  components/
    Navbar.jsx        # Barra de navegacao com links para as paginas
    Navbar.css
    BookCard.jsx      # Card reutilizavel para exibir um livro
    BookCard.css
  pages/
    Pesquisa.jsx      # Lista todos os livros com barra de busca por titulo
    Pesquisa.css
    UltimosLancamentos.jsx  # Exibe os 5 livros mais recentes com badge
    UltimosLancamentos.css
  services/
    booksApi.js       # Funcao para buscar dados da API
  App.jsx             # Rotas da aplicacao (React Router)
  main.jsx            # Ponto de entrada
  index.css           # Estilos globais
```

## API

```
https://raw.githubusercontent.com/proflucassousa/api-books/main/livros.json
```

## Tecnologias

- React 19
- React Router DOM 7
- Vite
# cp6-biblioteca
