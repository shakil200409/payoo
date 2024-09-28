document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    // Get the amount and pin
    const addAmount = document.getElementById('amount-input').value;
    const pin = document.getElementById('pin-input').value;

    console.log(addAmount, pin);
})