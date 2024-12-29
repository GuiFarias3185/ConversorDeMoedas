function convertCurrency() {
    const amount = parseFloat(document.getElementById("inputAmount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Por favor, insira um valor válido.";
        return;
    }

    // Taxas de câmbio fixas para exemplo
    const exchangeRates = {
        USD: { BRL: 5.25, EUR: 0.85 },
        BRL: { USD: 0.19, EUR: 0.16 },
        EUR: { USD: 1.18, BRL: 6.10 },
    };

    if (fromCurrency === toCurrency) {
        resultDiv.textContent = `Você já está na mesma moeda: ${amount} ${fromCurrency}.`;
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    resultDiv.textContent = `${amount} ${fromCurrency} é igual a ${convertedAmount.toFixed(2)} ${toCurrency}.`;
}
