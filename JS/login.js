document.getElementById('btn-login').addEventListener('click', function(event){
    // Prevent the reloading of browser by default
    event.preventDefault();

    // Get the value of input field
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    // Check is it phone number and pin
    if(phoneNumber === '5' && pinNumber === '1234'){
        window.location.href = '/home.html';

    }
    else{
        alert("Wrong Number or Pin");
    }
})