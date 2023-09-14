function sim() {
  alert("Você disse sim 🥹");
  location.href = "https://www.youtube.com/watch?v=FpnQvVV7gB4&ab_channel=Jairo";
}

function desvia(btn) {
  btn.style.position = "absolute";
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
  return Math.random() * (max - min) + min + "%";
}
