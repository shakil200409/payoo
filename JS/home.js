document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    // Get the balance and (amount and pin)
    const balance = document.getElementById('balance').innerText;
    const addAmount = document.getElementById('amount-input').value;
    const pin = document.getElementById('pin-input').value;

    // Convert string to number
    const balanceNumber = parseFloat(balance);
    const addAmountNumber = parseFloat(addAmount);

    if(pin === '1234'){
        const newBalance = balanceNumber + addAmountNumber;

        // Putting new Balance inside the current balance
        document.getElementById('balance').innerText = newBalance;
    }
    else{
        alert('Wrong input! Please try again.')
    }
})