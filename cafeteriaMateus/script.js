// Algumas partes do código foram mantidas como comentário apenas para testes e não fazem parte do sistema

// Testando alterações no código
const titulo = document.getElementById('titulo');
titulo.textContent = "Cafeteria Mateus  ☕";
titulo.style.fontSize = "40px";
titulo.style.color = "#6d1a0a"

const bemVindo = document.getElementById('bemVindo');
bemVindo.textContent = "Seja Bem-Vindo à Cafeteria Mateus!";

// Carrinho
const carrinho = document.getElementById('carrinho');
// Total
const total = document.getElementById('total');

// Dando função para os botões
const botoes = document.querySelectorAll('button[data-produto]');

// limpar o carrinho
const limparCarrinho = document.getElementById('limparCarrinho');

// botão finalizar pedido
const botaoFinalizar = document.getElementById('botaoFinalizar');

// array do carrinho e produtos como objetos
    const produto1 = {
        nome: "Café Expresso", preco: 5, quantidade: 0
    };
    const produto2 = {
        nome: "Capuccino", preco: 8, quantidade: 0
    };
    const produto3 = {
        nome: "Bolo", preco: 12, quantidade: 0
    };
    const produto4 = {
        nome: "Salgado", preco: 9, quantidade: 0
    };

const produtosCarrinho = [
    produto1,
    produto2,
    produto3,
    produto4
];

// const bolo = produtosCarrinho.find(function(produto) {
//     return produto.nome === "Bolo";
// });

// console.log(bolo.preco);
// bolo.quantidade += 1;

// procurando café com find(), mudando e exibindo os atributos
// const cafe = produtosCarrinho.find(function(produto) {
//     return produto.nome === "Café Expresso";
// });
// console.log(`Preço do café: R$${cafe.preco}`);
// cafe.quantidade += 1;
// console.log(`Quantidade: ${cafe.quantidade}`);

// const salgado = produtosCarrinho.find(function(produto) {
//     return produto.nome === "Salgado";
// });
// console.log(`Preço do salgado: R$${salgado.preco}`);
// salgado.quantidade += 2;
// console.log(`Quantidade: ${salgado.quantidade}`);


// função para adicionar produtos ao array
function adicionarProduto(p, qntd) {
    const produtoEscolhido = produtosCarrinho.find(function(produto) {
        return produto.nome === p;  // Só vai retornar o produto que tiver nome igual ao p (o que a pessoa inseriu na função);
    });
    if (produtoEscolhido) {
        produtoEscolhido.quantidade += qntd;
        console.log(`\nVocê adicionou ${p}`);
        return true;
    } else {
        console.log("Produto não encontrado\n");
        return false;
    };
};

// adicionarProduto("Bolo", 2);
// adicionarProduto("Salgado", 5);
// adicionarProduto("Café Expresso", 3);
// adicionarProduto("Pizza", 2);

// Função para remover produtos
function removerProduto(p, qntd) {
    const produtoRemover = produtosCarrinho.find(function(produto) {
        return produto.nome === p;
    });
    if (produtoRemover) {
        if (produtoRemover.quantidade - qntd >= 0) {
            produtoRemover.quantidade -= qntd;
            console.log(`\nVocê removeu ${p}`);
            return true;
        } else {
            console.log(`Quantidade insuficiente de ${p} no carrinho`);
            return false;
        }
    } else {
        console.log("Produto não encontrado\n");
        return false;
    };
};

// Função para mostrar nome e quantidade de cada produto no carrinho
function mostrarCarrinho(produtos) {
    let encontrouProduto = false;
    carrinho.textContent = ""

    for (let i = 0; i < produtos.length; i++){
        if (produtos[i].quantidade > 0) {
            encontrouProduto = true;
            
            // mostrar no terminal
            console.log(`${produtos[i].nome} x${produtos[i].quantidade}`);

            // mostrar no HTML
            carrinho.textContent += `${produtos[i].nome} x${produtos[i].quantidade} - R$${(produtos[i].quantidade * produtos[i].preco).toFixed(2)}\n`
        }
    }
    if (encontrouProduto === false) {
        carrinho.textContent = "Nenhum Produto Adicionado";
    };
};

// Função para calcular valor total de acordo com a quantidade e preco dos produtos
function calcularTotal(produtos) {
    let total = 0;
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].quantidade > 0) {
            const precoProduto = produtos[i].quantidade * produtos[i].preco;
            total += precoProduto;
        };
    };
    return total;
};

function atualizarCarrinho(produtos) {
    mostrarCarrinho(produtos);
    const valorTotal = calcularTotal(produtos);

    total.textContent = `Total: R$${valorTotal.toFixed(2)}`
}

// limpar carrinho
limparCarrinho.addEventListener("click", function() {
    for(let i = 0; i < produtosCarrinho.length; i++) {
        produtosCarrinho[i].quantidade = 0;
    };
    atualizarCarrinho(produtosCarrinho);
});

// função para definir o valor em reais do desconto
function definirDesconto(valor) {
    if (valor < 70) {
        return 0;
    } else if (valor < 120) {
        return valor * (10/100);
    } else {
        return valor * (15/100);
    };
};

// função para aplicar desconto
function aplicarDesconto(valor, desconto) {
    return valor - desconto;
};

// Mostrar resumo dos produtos do carrinho no console
function mostrarResumo() {
    console.log("\n======= Resumo do Pedido =======\n");
    let valorTotal = 0
    for (let produto of produtosCarrinho) {
        if (produto.quantidade > 0) {
            console.log(`\n${produto.nome}`);
            console.log(`Quantidade: ${produto.quantidade}`);
            console.log(`Subtotal: R$${(produto.quantidade * produto.preco).toFixed(2)}`);
            valorTotal += (produto.quantidade * produto.preco);
        };
    };
    const valorDesconto = definirDesconto(valorTotal);
    const valorFinal = aplicarDesconto(valorTotal, valorDesconto);
    console.log(`\n- Valor Total: R$${valorTotal.toFixed(2)}`);
    console.log(`- Desconto: R$${valorDesconto.toFixed(2)}`)
    console.log(`- Valor Final: R$${valorFinal.toFixed(2)}`);
};

// finalizar pedido
botaoFinalizar.addEventListener("click", function() {
    const valorCarrinho = calcularTotal(produtosCarrinho);
    if (valorCarrinho === 0) {
        carrinho.textContent = "Carrinho vazio";
    } else {
        mostrarResumo();
        for (let produto of produtosCarrinho) {
            produto.quantidade = 0;
        }
        atualizarCarrinho(produtosCarrinho);
        carrinho.textContent = "Pedido finalizado!";
    };
});

// Função para os botões escreverem na tela do html e mostrarem o produto no console/terminal
for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function() {
        const produto = botoes[i].dataset.produto;
        const acao = this.textContent;
        if (acao === "Adicionar") {
            const resultado = adicionarProduto(produto, 1);
            if (resultado === false) {
                carrinho.textContent = ("Produto não encontrado");
            } else {
                atualizarCarrinho(produtosCarrinho);
            }
        } else if (acao === "Remover") {
            const resultado = removerProduto(produto, 1);
            if (resultado === false) {
                carrinho.textContent = (`Quantidade insuficiente de ${produto} no carrinho`);
            } else {
                atualizarCarrinho(produtosCarrinho);
            }
        } else {
            console.log("Valor Inválido");
        }
        
        // carrinho.textContent = produtosCarrinho.join(" | ");
        // console.log(`Produtos: ${produtosCarrinho}`);
    });
};
        
// Criando botão com a função de mudar a cor do título
const botaoCor = document.getElementById('botaoMudarCor');
botaoCor.addEventListener("click", function() {
    titulo.style.color = "red";
});