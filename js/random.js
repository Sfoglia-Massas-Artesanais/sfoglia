import pratos from "./dishes.js";

function atualizarCartas() {
  const indicesAleatorios = [];
  while (indicesAleatorios.length < 3) {
    const indice = Math.floor(Math.random() * pratos.length);
    if (!indicesAleatorios.includes(indice)) {
      indicesAleatorios.push(indice);
    }
  }

  for (let i = 0; i < 3; i++) {
    const produto = pratos[indicesAleatorios[i]];
    document.getElementById(`imagem${i + 1}`).src = produto.imagem;
    document.getElementById(`titulo${i + 1}`).innerText = produto.prato;
    document.getElementById(`descricao${i + 1}`).innerText = produto.descricao;
    document.getElementById(`preco${i + 1}`).innerText = "Preço: Disponível no Ifood.";
  }
}

setInterval(atualizarCartas, 5000);

atualizarCartas();

