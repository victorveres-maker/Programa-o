const botaoContraste = document.getElementById('botao-contraste');
const corpoDaPagina = document.body;
function alternarContraste() {
corpoDaPagina.classList.toggle('alto-contraste');
const estaAtivo = corpoDaPagina.classList.contains('alto-contraste');
if (estaAtivo) {
botaoContraste.setAttribute('aria-label', 'Desativar modo de alto contraste');
botaoContraste.textContent = 'Desativar Alto Contraste';
} else {
botaoContraste.setAttribute('aria-label', 'Ativar modo de alto contraste para
melhor leitura');
botaoContraste.textContent = 'Mudar para Alto Contraste';
  }
}
botaoContraste.addEventListener('click', alternarContraste);