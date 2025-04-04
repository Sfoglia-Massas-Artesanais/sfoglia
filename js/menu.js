import pratos from "./dishes.js";

function showAllProducts() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
  
    pratos.forEach(menu => {
      const listItem = createProductElement(menu);
      resultsDiv.appendChild(listItem);
    });
}

function createProductElement(menu) {
    const listItem = document.createElement('div');
    listItem.classList.add('card');
    
    const imagemmenu = document.createElement('img');
    imagemmenu.src = menu.imagem;
    imagemmenu.alt = menu.prato;
    listItem.appendChild(imagemmenu);

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
    precomenu.textContent = `Preço: Disponível no Ifood.`;
    descItem.appendChild(precomenu);
    
    listItem.addEventListener("click", () => {
        showProductDetails(menu);
    });

    return listItem;
}

function showProductDetails(product) {
    localStorage.setItem('productDetails', JSON.stringify(product));
    window.location.href = '../dishes';
}

showAllProducts();