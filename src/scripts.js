function calcular() {
  var vitorias = document.getElementById("vitorias").value;
  var derrotas = document.getElementById("derrotas").value;

  var saldo = vitorias - derrotas;
  var nivel = "";

  if (saldo <= 0) {
    nivel = "Perdedor";
  } else if (saldo<= 10) {
    nivel = "Ferro";
  } else if (saldo >= 11 && saldo <= 20) {
    nivel = "Bronze";
  } else if (saldo >= 21 && saldo <= 50) {
    nivel = "Prata";
  } else if (saldo >= 51 && saldo <= 80) {
    nivel = "Ouro";
  } else if (saldo >= 81 && saldo <= 90) {
    nivel = "Diamante";
  } else if (saldo >= 91 && saldo <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  var resultado =
    "O Herói tem um saldo de " + saldo + " e está no nível de " + nivel;

  document.getElementById("resultado").innerHTML = resultado;
}
