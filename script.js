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
  let portfolio = savings;
  let years = 0;

  while (portfolio < fireNumber && years < 100) {
    portfolio = portfolio * (1 + returnRate) + contribution;
    years++;
  }

  document.getElementById("results").innerHTML = `
    🔥 Your FIRE Number: $${fireNumber.toLocaleString()}<br>
    💰 Projected Portfolio: $${portfolio.toLocaleString()}<br>
    ⏳ Estimated Years to FIRE: ${years}
  `;
}
