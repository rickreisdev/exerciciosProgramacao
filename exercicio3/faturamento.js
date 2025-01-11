const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'faturamento.json');
const data = fs.readFileSync(filePath, 'utf8');
const faturamentoDiario = JSON.parse(data);

function calcularFaturamento(faturamentoDiario) {
    const valores = faturamentoDiario.filter(dia => dia.valor > 0).map(dia => dia.valor);
    const menorValor = Math.min(...valores).toFixed(2).replace('.', ',');
    const maiorValor = Math.max(...valores).toFixed(2).replace('.', ',');
    const mediaMensal = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;
    const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(faturamentoDiario);
console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);