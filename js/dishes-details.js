const productDetails = JSON.parse(localStorage.getItem('productDetails'));

if (productDetails) {
  const detailsContent = document.getElementById('detailsContent');
    
  detailsContent.innerHTML = `
    <img src="${productDetails.imagem}" alt="${productDetails.prato}">
    <div class="details-desc">
      <h1>${productDetails.prato}</h1>
      <p class="peso">(${productDetails.peso})</p>
      <p class="preco">Preço: Disponível no Ifood.</p>
      <hr>
      <button class="comprar" onclick="ifood()">Comprar</button>
      <br>
      <button class="whatsapp" onclick="whatsapp()"><i class='bx bxl-whatsapp'></i> Whatsapp</button>
      <hr>
      <p class="desc">Descrição: ${productDetails.descricao}</p>
    </div>
  `;
}

function ifood() {
    window.location.href = "https://www.ifood.com.br/delivery/recife-pe/sfoglia-massas-artesanais-varzea/2f66d94e-8da0-410e-90ff-32312fcf2db0?UTM_Medium=share"
}

function whatsapp() {
    window.location.href = "https://api.whatsapp.com/send?phone=5581993709170&text="
}

function voltar() {
    window.location.href = "../"
}

