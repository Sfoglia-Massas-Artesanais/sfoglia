const products = [
    { 
        name: "TILÁPIA AO ALHO & ÓLEO", 
        descricao: "Saboreie a perfeição em cada garfada com nossa Tilápia selada, acompanhada de Fettuccine fresco em um irresistível molho de alho & óleo. Uma combinação de sabores delicados e texturas suculentas para uma experiência culinária única. Uma explosão de frescor e simplicidade no seu prato. Bom apetite!", 
        price: "24,50", 
        imageUrl: "../imagens/1.avif",
        peso: "280g"
    },
    { 
        name: "RAVIÓLI 3 QUEIJOS AO MOLHO POMODORO", 
        descricao: "Ravióli 3 queijos ao molho pomorodo, é uma massa fresca recheada com uma mistura irresistível de queijos, regada ao delicioso molho pomodoro.", 
        price: "28,00", 
        imageUrl: "../imagens/2.avif",
        peso: "200g"
    },
    { 
        name: "FETTUCCINE COM CAMARÃO AO POMODORO", 
        descricao: "Experimente nosso Fettuccine fresco com camarões em um delicioso molho pomodoro, realçado com tomates cereja. Uma mistura perfeita de sabores autênticos e texturas, este prato oferece uma experiência italiana de alta qualidade. Bom apetite!", 
        price: "33,00", 
        imageUrl: "../imagens/3.avif",
        peso: "250g"
    },
    { 
        name: "FETTUCCINE À CARBONARA COM CHARQUE", 
        descricao: "Fettuccine à carbonara com charque é um prato com queijo parmesão, ovos, charque em cubos e fettuccine artesanal.", 
        price: "33,00", 
        imageUrl: "../imagens/4.avif",
        peso: "250g"
    },
    { 
        name: "FETTUCCINE À CARBONARA", 
        descricao: "Saboreie a elegância simples do nosso Fettuccine Carbonara. Nossa massa fresca se une a um molho cremoso com ovos, queijo parmesão, bacon crocante e pimenta preta. Cada garfada é uma celebração de sabores autênticos. Uma escolha clássica para momentos especiais.", 
        price: "30,00", 
        imageUrl: "../imagens/5.avif",
        peso: "250g"
    },
    { 
        name: "FETTUCCINE TRADCIONAL", 
        descricao: "Desfrute da autenticidade em cada porção de nossa massa congelada, feita com farinha nacional de qualidade. Uma maneira prática e deliciosa de trazer o sabor genuíno da tradição para sua mesa. Uma experiência autêntica, sempre ao seu alcance.", 
        price: "10,00", 
        imageUrl: "../imagens/6.avif",
        peso: "200g"
    },
    { 
        name: "FETTUCCINE PREMIUM", 
        descricao: "Descubra o verdadeiro sabor em cada mordida com nossa massa congelada, feita com a qualidade da farinha nacional e semolina. Uma fusão perfeita que proporciona textura e sabor excepcionais. Prática e deliciosa, essa massa traz o melhor da nossa terra diretamente para a sua mesa. Uma escolha simples, mas cheia de autenticidade.", 
        price: "12,00", 
        imageUrl: "../imagens/7.avif",
        peso: "200g"
    },
    { 
        name: "FETTUCCINE DI LUSSO", 
        descricao: "Explore a excelência em cada porção de nossa massa congelada, meticulosamente preparada com farinha e semolina importadas. Uma fusão de ingredientes de alta qualidade que elevam a experiência culinária. Sinta a textura única e desfrute do sabor refinado que apenas ingredientes di lusso podem proporcionar. Uma escolha sofisticada para aqueles que apreciam o melhor da culinária global.", 
        price: "17,00", 
        imageUrl: "../imagens/8.avif",
        peso: "200g"
    },
    { 
        name: "RAVIÓLI DE TRÊS QUEIJOS TRADICIONAL", 
        descricao: "Experimente a delícia em casa com nosso ravioli artesanal congelado, recheado com uma irresistível combinação de três queijos. Feito com farinha nacional de qualidade, cada pedaço é uma explosão de sabor autêntico. Prático e delicioso, é a escolha perfeita para uma refeição rápida e recheada de qualidade. Faça seu pedido agora e aproveite o prazer do ravioli artesanal no conforto da sua casa.", 
        price: "21,90", 
        imageUrl: "../imagens/9.avif",
        peso: "200g"
    },
    { 
        name: "RAVIÓLI DE TRÊS QUEIJOS PREMIUM", 
        descricao: "Desfrute do nosso ravioli congelado, recheado com uma mistura deliciosa de três queijos. Feito com farinha nacional e semolina, cada pedaço é uma combinação perfeita de sabores autênticos. Prático e cheio de qualidade, é a escolha fácil para uma refeição saborosa.", 
        price: "22,90", 
        imageUrl: "../imagens/10.avif",
        peso: "200g"
    },
    { 
        name: "RAVIÓLI DE TRÊS QUEIJOS DI LUSSO", 
        descricao: "Desfrute do nosso ravioli congelado, recheado com uma deliciosa combinação de três queijos. Preparado com farinha e semolina importadas da Itália, cada pedaço é uma autêntica explosão de sabores. Prático e cheio de qualidade, trazemos o melhor da tradição italiana diretamente para a sua mesa.", 
        price: "29,90", 
        imageUrl: "../imagens/11.avif",
        peso: "200g"
    },
    
  ];

  function voltar() {
    showAllProducts();
  }
  
  function showAllProducts() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
  
    products.forEach(product => {
      const productDiv = createProductElement(product);
      resultsDiv.appendChild(productDiv);
    });
  }

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      search();
    }
  });

  
  function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
  
    const loader = document.createElement("div");
    loader.classList.add("loader");
    resultsDiv.appendChild(loader);

    const footer = document.querySelector("footer");
    footer.classList.add("search-funcion");
  
    setTimeout(() => {
      loader.style.display = "none";
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
      );
  
      if (filteredProducts.length === 0) {
        resultsDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
      } else {
        filteredProducts.forEach(product => {
          const productDiv = createProductElement(product);
          resultsDiv.appendChild(productDiv);
        });
        footer.classList.remove("search-funcion");
      }
      if (filteredProducts.length <= 3) {
        footer.classList.add("search-funcion");
      }
    }, 2000)
  }
  
  showAllProducts();

  function showProductDetails(product) {
    localStorage.setItem('productDetails', JSON.stringify(product));
    window.location.href = 'product-details.html';
  }
  
  function createProductElement(product) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
  
    const productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.alt = product.name;
    productDiv.appendChild(productImage);
  
    const productInfo = document.createElement("div");
    productInfo.innerHTML = `
    <h1>${product.name}</h1>
    <p>${product.descricao}</p>
    <h2>R$ ${product.price} - <p>(${product.peso})<p></h2>
    `;
    productDiv.appendChild(productInfo);
  
    productDiv.addEventListener("click", () => {
      showProductDetails(product);
    });
  
    return productDiv;
  }