function money(value) {
  return "$" + Number(value).toLocaleString(undefined, {
    maximumFractionDigits: 2
  });
}

function calculateAffiliate() {
  const visitors = Number(document.getElementById("visitors").value) || 0;
  const conversionRate = (Number(document.getElementById("conversionRate").value) || 0) / 100;
  const commission = Number(document.getElementById("commission").value) || 0;
  const refundRate = (Number(document.getElementById("refundRate").value) || 0) / 100;

  const sales = visitors * conversionRate;
  const gross = sales * commission;
  const net = gross * (1 - refundRate);

  document.getElementById("sales").textContent = sales.toLocaleString(undefined, { maximumFractionDigits: 1 });
  document.getElementById("gross").textContent = money(gross);
  document.getElementById("net").textContent = money(net);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("visitors")) calculateAffiliate();
});
