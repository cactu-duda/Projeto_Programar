var portfolio = {
    Flavia: {
        nome : "Flávia Danza",
        descricao : "Lorem ipsum",
        ingredientes : [
            "banana", "farinha", "fermento", "leite"
        ],
        preparo : "junte todos os ingredientes"
    },
    biscoito : {
        nome : "Maira Alves",
        descricao : "Seja bem-vindo! Meu nome é Maira Alves e sou designer iniciante e ilustradora, atualmente cursando o segundo semestre de Design Bacharelado na Universidade Senac. Por me interessar pela área desde pequena busco manter um aprendizado constante para melhorar em meus trabalhos, principalmente dentro dos módulos de Ux/Ui e Web Design.",
        ingredientes : [
            "acucar mascavo", "farinha", "chocolate"
        ],
        preparo : "junte todos os ingredientes"
    },
    torta: {
        nome : "Maria Eduarda",
        descricao : "Lorem Ipsum",
        ingredientes : [
            "manteiga", "frango"
        ],
        preparo : "junte todos os ingredientes"
    }
}

function portfolio(sabor) {
    document.getElementById('nome').innerHTML = portfolio [sabor].nome;
    document.getElementById('descricao').innerHTML = portfolio [sabor].descricao;

    var lista_ingredientes = document.getElementById("ingredientes");
    var ingredientes = portfolio [sabor].ingredientes;
    // Zerando a lista para não ficar adicionando itens
    lista_ingredientes.innerHTML = "";
}