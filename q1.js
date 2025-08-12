const operacao = prompt("Qual operação deseja realizar? (soma, subtração, multiplicação ou divisão)");

const valor1 = Number(prompt("Digite o primeiro valor:"));
const valor2 = Number(prompt("Digite o segundo valor:"));

if (operacao === "soma") {
  console.log("Resultado:", valor1 + valor2);
} else if (operacao === "subtração") {
  console.log("Resultado:", valor1 - valor2);
} else if (operacao === "multiplicação") {
  console.log("Resultado:", valor1 * valor2);
} else if (operacao === "divisão") {
  if (valor2 === 0) {
    console.error("Erro: Divisão por zero não é permitida.");
  } else {
    console.log("Resultado:", valor1 / valor2);
  }
} else {
  console.error("Operação inválida. Tente: soma, subtração, multiplicação ou divisão.");
}