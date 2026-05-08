// =========================
// ARQUIVO: script.js
// =========================

const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event){

  event.preventDefault();

  mensagem.innerHTML = "Login realizado com sucesso!";

});