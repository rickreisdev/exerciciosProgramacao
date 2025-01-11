const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalFaturamento = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);

const percentualRepresentacao = {};
for (const estado in faturamento) {
    percentualRepresentacao[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2).replace('.', ',') + '%';
}

console.log('Faturamento total: ' + totalFaturamento.toFixed(2).replace('.', ','));

console.log('Percentual de representação por estado:');
for (const estado in percentualRepresentacao) {
    console.log(`${estado}: ${percentualRepresentacao[estado]}`);
}