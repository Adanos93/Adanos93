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

//Add helptext.
let helpText  = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

//Window events.
let sendButton = document.querySelector("form .btn.btn-primary");
/*
sendButton.onclick = function(){
    alert("Hello!");
}
*/

sendButton.addEventListener("click", function() {
    alert("Hello2!");
});

window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
});


//Űrlap események
let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i< inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }

    console.log(values);
});

//Parent elemek kezelées
let alertCloseButtons = document.querySelectorAll('.btn-close[data-bs-dismiss="alert"]');
let alertCloseEventHandlerFunction = function(ev) {
    this.parentElement.style.display = "none";
};
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction);
}

//Select elem kitöltése.
let toppings = [
    "Kaja 1",
    "Más kaja 2",
    "Nem jut semmi az eszembe",
    "Sok lesz már a választási lehetőség"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = toppings[index];
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
};