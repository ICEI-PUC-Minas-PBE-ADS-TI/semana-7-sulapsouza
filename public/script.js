let nome = prompt("Digite seu nome:");

function lerNumero(mensagem) {
    let valor = prompt(mensagem);
    while (isNaN(valor) || valor === "" || valor === null) {
        valor = prompt("Valor inválido! Por favor, digite um número:");
    }
    return Number(valor);
}

let renda = lerNumero("Informe sua renda mensal:");
let qtdDespesas = lerNumero("Quantas despesas deseja informar (entre 1 e 5)?");

if (qtdDespesas < 1) qtdDespesas = 1;
if (qtdDespesas > 5) qtdDespesas = 5;

let totalDespesas = 0;
for (let i = 1; i <= qtdDespesas; i++) {
    let valorDespesa = lerNumero(`Digite o valor da despesa ${i}:`);
    totalDespesas += valorDespesa;
}

let mensagemClassificacao = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
    mensagemClassificacao = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= (renda * 0.3)) {
        mensagemClassificacao = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagemClassificacao = "🙂 Ok: dá para melhorar a sobra.";
    }
}

let resultadoFinal = `
--- RESUMO DO ORÇAMENTO ---
Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Status: ${mensagemClassificacao}
`;

alert(resultadoFinal);
console.log(resultadoFinal);