function calcularSaque() {
    const valorInserido = document.getElementById('valorInserido');
    let valorNum = Number(valorInserido.value);
    // Number função do javascript para transformar valor em um número
    // value pega apenas o valor do elemento

    let notas50 = 0;
    let notas20 = 0;
    let notas10 = 0;

    while (valorNum >= 10) {
        try {
            if (valorNum >= 50){
                valorNum -= 50;
                notas50 += 1;
            } else if (valorNum >= 20 && valorNum < 50) {
                valorNum -= 20;
                notas20 += 1;
            } else if (valorNum < 20 && valorNum > 0) {
                valorNum -= 10;
                notas10 += 1
            } else {
                console.error("Valor Inválido.");
            }
        } catch(error) {
            console.log("Valor Inválido. Insira um número");
        }
    }

    document.getElementById('notas50').innerHTML = `Notas de 50: ${notas50}`; //innerHTML muda o texto de um elemento no html
    document.getElementById('notas20').innerHTML = `Notas de 20: ${notas20}`;
    document.getElementById('notas10').innerHTML = `Notas de 10: ${notas10}`;
}