const form = document.getElementById("form-juros");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const capital = Number(document.getElementById("capital").value);
  const taxa = Number(document.getElementById("taxa").value);
  const tempo = Number(document.getElementById("tempo").value);

  const juros = (capital * taxa * tempo)/100;
  const total = capital+juros;
  
  resultado.innerHTML=`
  <p>Juros: R$  ${juros.toFixed(2)}</p>
   <p>Valor Total: R$  ${total.toFixed(2)}</p>
  `;
});
