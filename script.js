// Gerar número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let maxTentativas = 10;
let tentativasRestantes = maxTentativas;

// Atualizar contador inicial
document.getElementById("tentativas").textContent = `Tentativas restantes: ${tentativasRestantes}`;

document.getElementById("chutar").addEventListener("click", function() {
  const palpite = parseInt(document.getElementById("palpite").value);
  const mensagem = document.getElementById("mensagem");
  const tentativas = document.getElementById("tentativas");

  if (isNaN(palpite)) {
    mensagem.textContent = "Digite um número válido!";
    mensagem.style.color = "yellow";
    return;
  }

  tentativasRestantes--;
  tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

  if (palpite === numeroSecreto) {
    mensagem.textContent = ` Parabéns! Você acertou o número ${numeroSecreto}!`;
    mensagem.style.color = "lightgreen";
    document.getElementById("chutar").disabled = true; // trava o jogo
  } else if (tentativasRestantes === 0) {
    mensagem.textContent = `Fim de jogo! O número era ${numeroSecreto}.`;
    mensagem.style.color = "red";
    document.getElementById("chutar").disabled = true;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "O número secreto é MAIOR!";
    mensagem.style.color = "orange";
  } else {
    mensagem.textContent = "O número secreto é MENOR!";
    mensagem.style.color = "orange";
  }
});
