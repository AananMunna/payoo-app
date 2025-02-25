document.getElementById('logInBtn').addEventListener('click', (e)=>{
    e.preventDefault();

    const mobileNumber = document.getElementById('mobileNumber');
    const mobileNumberValue = mobileNumber.value;
    const pin = document.getElementById('pin');
    const pinValue = parseInt(pin.value);
    

    if(mobileNumberValue.length === 11){
        if(pinValue === 1234){
            console.log('redirecting');
            window.location.href="./dashboard.html"
        }else{
            alert("pin dose not match")
        }
    }else{
        alert('Enter Valid Phon Number')
    }
})