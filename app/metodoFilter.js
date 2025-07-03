// seleciona todos os elementos que têm a classe "btn" (ou seja, os botões do menu)
const botoes = document.querySelectorAll(".btn");

// adiciona um ouvinte de evento de clique para cada botão, chamando a função filtrarLivros
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  // this se refere ao botão, já que ele chamou a função
  // pega o valor do botão clicado (front-end, back-end ou dados)
  const categoria = this.value;

  // filtra os livros de acordo com a categoria escolhida
  let livrosFiltrados = livros.filter((livro) => livro.categoria == categoria);

  // exibe os livros filtrados na tela
  exibirOsLivrosNaTela(livrosFiltrados);
}
