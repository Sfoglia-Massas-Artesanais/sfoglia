const pratos = [
    {
        prato: "TILÁPIA AO ALHO & ÓLEO", 
        descricao: "Saboreie a perfeição em cada garfada com nossa Tilápia selada, acompanhada de Fettuccine fresco em um irresistível molho de alho & óleo. Uma combinação de sabores delicados e texturas suculentas para uma experiência culinária única. Uma explosão de frescor e simplicidade no seu prato. Bom apetite!", 
        preco: "24,50", 
        imagem: "../assets/dishes/1.avif",
        peso: "280g"
    },
    { 
        prato: "RAVIÓLI 3 QUEIJOS AO MOLHO POMODORO", 
        descricao: "Ravióli 3 queijos ao molho pomorodo, é uma massa fresca recheada com uma mistura irresistível de queijos, regada ao delicioso molho pomodoro.", 
        preco: "28,00", 
        imagem: "../assets/dishes/2.avif",
        peso: "200g"
    },
    { 
        prato: "FETTUCCINE COM CAMARÃO AO POMODORO", 
        descricao: "Experimente nosso Fettuccine fresco com camarões em um delicioso molho pomodoro, realçado com tomates cereja. Uma mistura perfeita de sabores autênticos e texturas, este prato oferece uma experiência italiana de alta qualidade. Bom apetite!", 
        preco: "33,00", 
        imagem: "../assets/dishes/3.avif",
        peso: "250g"
    },
    { 
        prato: "FETTUCCINE À CARBONARA COM CHARQUE", 
        descricao: "Fettuccine à carbonara com charque é um prato com queijo parmesão, ovos, charque em cubos e fettuccine artesanal.", 
        preco: "33,00", 
        imagem: "../assets/dishes/4.avif",
        peso: "250g"
    },
    { 
        prato: "FETTUCCINE À CARBONARA", 
        descricao: "Saboreie a elegância simples do nosso Fettuccine Carbonara. Nossa massa fresca se une a um molho cremoso com ovos, queijo parmesão, bacon crocante e pimenta preta. Cada garfada é uma celebração de sabores autênticos. Uma escolha clássica para momentos especiais.", 
        preco: "30,00", 
        imagem: "../assets/dishes/5.avif",
        peso: "250g"
    },
    { 
        prato: "FETTUCCINE TRADCIONAL", 
        descricao: "Desfrute da autenticidade em cada porção de nossa massa congelada, feita com farinha nacional de qualidade. Uma menu prática e deliciosa de trazer o sabor genuíno da tradição para sua mesa. Uma experiência autêntica, sempre ao seu alcance.", 
        preco: "10,00", 
        imagem: "../assets/dishes/6.avif",
        peso: "200g"
    },
    { 
        prato: "FETTUCCINE PREMIUM", 
        descricao: "Descubra o verdadeiro sabor em cada mordida com nossa massa congelada, feita com a qualidade da farinha nacional e semolina. Uma fusão perfeita que proporciona textura e sabor excepcionais. Prática e deliciosa, essa massa traz o melhor da nossa terra diretamente para a sua mesa. Uma escolha simples, mas cheia de autenticidade.", 
        preco: "12,00", 
        imagem: "../assets/dishes/7.avif",
        peso: "200g"
    },
    { 
        prato: "FETTUCCINE DI LUSSO", 
        descricao: "Explore a excelência em cada porção de nossa massa congelada, meticulosamente preparada com farinha e semolina importadas. Uma fusão de ingredientes de alta qualidade que elevam a experiência culinária. Sinta a textura única e desfrute do sabor refinado que apenas ingredientes di lusso podem proporcionar. Uma escolha sofisticada para aqueles que apreciam o melhor da culinária global.", 
        preco: "17,00", 
        imagem: "../assets/dishes/8.avif",
        peso: "200g"
    },
    { 
        prato: "RAVIÓLI DE TRÊS QUEIJOS TRADICIONAL", 
        descricao: "Experimente a delícia em casa com nosso ravioli artesanal congelado, recheado com uma irresistível combinação de três queijos. Feito com farinha nacional de qualidade, cada pedaço é uma explosão de sabor autêntico. Prático e delicioso, é a escolha perfeita para uma refeição rápida e recheada de qualidade. Faça seu pedido agora e aproveite o prazer do ravioli artesanal no conforto da sua casa.", 
        preco: "21,90", 
        imagem: "../assets/dishes/9.avif",
        peso: "200g"
    },
    { 
        prato: "RAVIÓLI DE TRÊS QUEIJOS PREMIUM", 
        descricao: "Desfrute do nosso ravioli congelado, recheado com uma mistura deliciosa de três queijos. Feito com farinha nacional e semolina, cada pedaço é uma combinação perfeita de sabores autênticos. Prático e cheio de qualidade, é a escolha fácil para uma refeição saborosa.", 
        preco: "22,90", 
        imagem: "../assets/dishes/10.avif",
        peso: "200g"
    },
    { 
        prato: "RAVIÓLI DE TRÊS QUEIJOS DI LUSSO", 
        descricao: "Desfrute do nosso ravioli congelado, recheado com uma deliciosa combinação de três queijos. Preparado com farinha e semolina importadas da Itália, cada pedaço é uma autêntica explosão de sabores. Prático e cheio de qualidade, trazemos o melhor da tradição italiana diretamente para a sua mesa.", 
        preco: "29,90", 
        imagem: "../assets/dishes/11.avif",
        peso: "200g"
    },
    { 
        prato: "PIZZA DE MUSSARELA", 
        descricao: "Pizza servida ao molho artesanal, mussarela e orégano fresco", 
        preco: "22,00", 
        imagem: "../assets/dishes/12.avif",
        peso: "Serve 2 pessoas"
    },
    { 
        prato: "PIZZA DE CALABRESA", 
        descricao: "Pizza servida ao molho artesanal, mussarela e calabresa", 
        preco: "22,00", 
        imagem: "../assets/dishes/13.avif",
        peso: "Serve 2 pessoas"
    },
    { 
        prato: "PIZZA MARGUERITA", 
        descricao: "Pizza servida ao molho artesanal, mussarela, tomates e manjericão", 
        preco: "23,00", 
        imagem: "../assets/dishes/14.avif",
        peso: "Serve 2 pessoas"
    },
    { 
        prato: "Fettuccine com ragu de linguiça", 
        descricao: "Fettuccine artesanal, com ragu de linguiça suína (70g) e molho artesanal de tomates", 
        preco: "30,00", 
        imagem: "../assets/dishes/15.avif",
        peso: "70g"
    },
    { 
        prato: "Ravioli três queijos com molho branco", 
        descricao: "Ravioli artesanal de três queijos acompanhado com molho branco", 
        preco: "38,00", 
        imagem: "../assets/dishes/16.avif",
        peso: "Serve 1 pessoa"
    },
    { 
        prato: "Fettuccine à Bolonhesa", 
        descricao: "Fettuccine artesanal, com ragu de carne bovina (70g) acompanhado de molho artesanal de tomates!", 
        preco: "35,00", 
        imagem: "../assets/dishes/17.jpg",
        peso: "70g"
    },
    { 
        prato: "Ravioli três queijos com molho 4 queijos", 
        descricao: "Ravioli artesanal de três queijos acompanhado de molho de quatro queijos", 
        preco: "40,00", 
        imagem: "../assets/dishes/18.avif",
        peso: "Serve 1 pessoa"
    },
    { 
        prato: "Fettuccine à Parmegiana", 
        descricao: "Fettuccine artesanal, peito de frango empanado (aprox. 90g), queijo e molho artesanal", 
        preco: "36,00", 
        imagem: "../assets/dishes/19.avif",
        peso: "90g"
    },
    { 
        prato: "Ravioli de Camarão ao Pomodoro", 
        descricao: "Massa artesanal com recheio de camarão com cream cheese e molho pomodoro artesanal.", 
        preco: "39,00", 
        imagem: "../assets/dishes/20.avif",
        peso: "Serve 1 pessoa"
    },

  ];

  export default pratos;