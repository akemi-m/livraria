let livros = [];
const endpointDaAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  // aguarda e puxa os dados da api
  const res = await fetch(endpointDaAPI);
  // aguarda que a response se transforme em json
  livros = await res.json();

  // aplica o desconto e retorna a lista
  livros = aplicarDesconto(livros);
  // adiciona os elementos na tela
  exibirOsLivrosNaTela(livrosComDesconto);
}
