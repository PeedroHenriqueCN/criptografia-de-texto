

function criptografarConteudo(){
  let textarea = document.getElementById('input')
  let conteudo = textarea.value
  let textoSubstituto = conteudo
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');

  let criptogra = document.getElementById('campo-mensagem')
  criptogra.innerHTML = textoSubstituto
}

function descriptografarConteudo(){
  let textarea = document.getElementById('input')
  let conteudo = textarea.value
  let textoSubstituto = conteudo
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');

  let descriptogra = document.getElementById('campo-mensagem')
  descriptogra.innerHTML = textoSubstituto
}