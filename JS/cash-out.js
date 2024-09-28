document.getElementById('cashOut-btn').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');

})
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = document.getElementById('cashOut-amount').value;
    const pin = document.getElementById('cashOut-pin').value;

    if(pin === '1234'){
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(balance);
        const cashOutNumber = parseFloat(cashOut);

        const newBalance = balanceNumber - cashOutNumber ;
        document.getElementById('balance').innerText = newBalance;
    }
    else{
        alert('Failed to cashout! Please try again later.')
    }
})