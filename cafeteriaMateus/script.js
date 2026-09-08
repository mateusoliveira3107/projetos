// Testando alterações no código
const titulo = document.getElementById('titulo');
titulo.textContent = "Cafeteria Mateus  ☕";
titulo.style.fontSize = "40px";
titulo.style.color = "#6d1a0a"

const bemVindo = document.getElementById('bemVindo');
bemVindo.textContent = "Seja Bem-Vindo à Cafeteria Mateus!"

// Carrinho
const carrinho = document.getElementById('carrinho');

// Dando função para os botões
const botoes = document.querySelectorAll('button[data-produto]');

const produtosCarrinho = [];

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function() {
        const produto = botoes[i].dataset.produto;
        produtosCarrinho.push(produto);

        console.log(`Você adicionou ${produto}`);
        
        carrinho.textContent = produtosCarrinho.join(" | ");

        console.log(produtosCarrinho);
    });
};

// Dando ao botão cor a função de mudar a cor do título
const botaoCor = document.getElementById('botaoMudarCor');
botaoCor.addEventListener("click", function() {
    titulo.style.color = "red";
})
