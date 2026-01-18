function calculateFIRE() {
  const expenses = parseFloat(document.getElementById("expenses").value);
  const savings = parseFloat(document.getElementById("savings").value);
  const returnRate = parseFloat(document.getElementById("return").value) / 100;

  if (isNaN(expenses) || isNaN(savings) || isNaN(returnRate)) {
    document.getElementById("results").innerHTML = "Please fill out all fields.";
    return;
  }

  const fireNumber = expenses * 25;
  const years = Math.log(fireNumber / savings) / Math.log(1 + returnRate);

  document.getElementById("results").innerHTML = `
    🔥 Your FIRE Number: $${fireNumber.toLocaleString()} <br>
    ⏳ Estimated Years to FIRE: ${years.toFixed(1)}
  `;
}

