const nome = "Maria Oliveira";
const matricula = "123456";
const turma = "2ºB";
const turno = "Tarde";

const nota = Number(prompt("Digite a nota do aluno:"));

if (nota >= 6 && nota <= 10) {
  alert("Aprovado");
} else if (nota >= 4 && nota < 6) {
  alert("Recuperação");
} else if (nota >= 0 && nota < 4) {
  alert("Reprovado");
} else {
  alert("Nota inválida");
}