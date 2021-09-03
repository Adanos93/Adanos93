function calcAmount(){
    let price = 1000;
    let amountInput = document.querySelector("input[name= 'amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
}

function showSumPrice(price = 1000, amountNumber = 1){
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10 || amountNumber < 1)
    {
        alert("Baaaakaaaaaa");
        return;
    }
    
    let amount = amountNumber * price;
    let minorder = 5000;
    if (amount < minorder){
        amount = amount + 500;
    }
    showAmount.innerHTML = amount;
}