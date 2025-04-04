import pratos from "./dishes.js";

// Função para realizar a busca
function buscar(termo) {
  termo = termo.toLowerCase();
  const resultados = [];

  pratos.forEach((menu) => {
    if (menu.prato.toLowerCase().includes(termo)){
      resultados.push(menu);
    }
  });

  return resultados;
}

function showProductDetails(product) {
  localStorage.setItem('productDetails', JSON.stringify(product));
  window.location.href = '../dishes/';
}

// Função para exibir os resultados
function exibirResultados(resultados) {
  const resultsList = document.getElementById('results');
  resultsList.innerHTML = '';

  if (resultados.length === 0) {
      const ndEncontre = document.createElement('p');
      ndEncontre.textContent = "Nenhum resultado encontrado!"
      resultsList.appendChild(ndEncontre);
    } else {
        resultados.forEach((menu) => {
          const listItem = document.createElement('div');
          listItem.classList.add('card');
          
          const imagemMenu = document.createElement('img');
          imagemMenu.src = menu.imagem;
          imagemMenu.alt = menu.prato;
          imagemMenu.classList.add('prato-image');
          listItem.appendChild(imagemMenu);

          const descItem = document.createElement('div');
          listItem.appendChild(descItem);
          descItem.classList.add('desc-content')
    
          const nomemenu = document.createElement('h2');
          nomemenu.textContent = menu.prato;
          descItem.appendChild(nomemenu);
    
          const descricaomenu = document.createElement('p');
          descricaomenu.textContent = menu.descricao;
          descItem.appendChild(descricaomenu);
    
          const precomenu = document.createElement('h5');
          precomenu.textContent = "Preço: Disponível no Ifood.";
          descItem.appendChild(precomenu);
    
          resultsList.appendChild(listItem);
          
          listItem.addEventListener("click", () => {
            showProductDetails(menu);
          });

        });
      }
}

// Extrai o termo de busca da URL
const termoDeBusca = new URLSearchParams(window.location.search).get('search');

// Verifica se há um termo de busca na URL e exibe os resultados
if (termoDeBusca) {
  const resultadosDaBusca = buscar(termoDeBusca);
  exibirResultados(resultadosDaBusca);
}