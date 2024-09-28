document.getElementById('btn-login').addEventListener('click', function(event){
    // Prevent the reloading of browser by default
    event.preventDefault();
    console.log('Login button clicked');

    // Get the value of input field
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);


})