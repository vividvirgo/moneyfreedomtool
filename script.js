function calculateFIRE() {
  const expenses = parseFloat(document.getElementById("expenses").value);
  const savings = parseFloat(document.getElementById("savings").value);
  const returnRate = parseFloat(document.getElementById("returnRate").value) / 100;
  const contribution = parseFloat(document.getElementById("contribution").value);

  if (isNaN(expenses) || isNaN(savings) || isNaN(returnRate) || isNaN(contribution)) {
    document.getElementById("results").innerHTML = "Please fill out all fields.";
    return;
  }

  const fireNumber = expenses * 25;

  let years = 0;
  let balance = savings;

  while (balance < fireNumber && years < 100) {
    balance = balance * (1 + returnRate) + contribution;
    years++;
  }

  document.getElementById("results").innerHTML = `
    🔥 Your FIRE Number: $${fireNumber.toLocaleString()} <br>
    💰 Projected Portfolio: $${Math.round(balance).toLocaleString()} <br>
    ⏳ Estimated Years to FIRE: ${years}
  `;
}

