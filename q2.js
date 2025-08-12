// Primeiro filme
const filme1 = {
    titulo: prompt("Digite o título do primeiro filme:"), // ← aqui o usuário digita o título
    genero: prompt("Digite o gênero do primeiro filme:"),
    nota: parseFloat(prompt("Digite a nota do primeiro filme (0 a 10):"))
  };
  
  // Segundo filme
  const filme2 = {
    titulo: prompt("Digite o título do segundo filme:"), // ← aqui o usuário digita o título
    genero: prompt("Digite o gênero do segundo filme:"),
    nota: parseFloat(prompt("Digite a nota do segundo filme (0 a 10):"))
  };
  
  // Mostrar os dados do primeiro filme
  alert(
    "Filme 1:\n" +
    "Título: " + filme1.titulo + "\n" +
    "Gênero: " + filme1.genero + "\n" +
    "Nota: " + filme1.nota.toFixed(1)
  );
  
  // Mostrar os dados do segundo filme
  alert(
    "Filme 2:\n" +
    "Título: " + filme2.titulo + "\n" +
    "Gênero: " + filme2.genero + "\n" +
    "Nota: " + filme2.nota.toFixed(1)
  );
  
  // Comparar notas
  if (filme1.nota > filme2.nota) {
    alert("Filme com a melhor nota: " + filme1.titulo);
  } else if (filme2.nota > filme1.nota) {
    alert("Filme com a melhor nota: " + filme2.titulo);
  } else {
    alert("Os dois filmes têm a mesma nota!");
  }