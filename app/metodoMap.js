function aplicarDesconto(livros) {
  const desconto = 0.3;

  // para cada livro, aplicar o desconto
  livrosComDesconto = livros.map((livro) => {
    // copia todas as propriedades do objeto livro para um novo objeto
    // sobrescreve a propriedade preco com o valor de desconto
    return { ...livro, preco: livro.preco - livro.preco * desconto };
  });
  return livrosComDesconto;
}
