const contadorPalavras = (valor) => {
  valor.replace(/(\r\n|\n|\r)/g,"").trim();// .replace subistitui caracteres especiais como espaço e tecla enter por vazio e o .trim  retira os espaços em branco
  const cont = valor.split(/\s+/g).length; // .split separa as strings a cada espaço
  if (cont == "1" || cont == ""){
    return cont;
  } else {
    return cont;
  }
}

console.log('O texto têm ' +contadorPalavras('Mauriney Costa'), 'palavras');

