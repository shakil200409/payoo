document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('amount-input').value;
    const pin = document.getElementById('pin-input').value;

    if(pin === '1234'){
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(balance);
        const addMoneyNumber = parseFloat(addMoney);

        const newBalance = balanceNumber + addMoneyNumber;

        document.getElementById('balance').innerText = newBalance;

    }
   else{
    alert('Failed to add! Please try again later.');
   }
})