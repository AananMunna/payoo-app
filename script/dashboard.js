document.getElementById('logOut').addEventListener('click', ()=>{
    window.location.href = './index.html'
})

document.getElementById('addMoney').addEventListener('click', ()=>{
    document.getElementById('addMoney').style.background = '#ddd'

    document.getElementById('latestPaymentSection').style.display = 'none'
    document.getElementById('addMoneySection').style.display = 'block'

})

document.getElementById('addMoneyBtn').addEventListener('click', (e)=>{
    e.preventDefault();

    const amountToAdd = document.getElementById('amountToAdd');
    let amountToAddValue = parseInt(amountToAdd.value)
    

    const mainBalance = document.getElementById('mainBalance');
    let mainBalanceValue = parseInt(mainBalance.innerText)
    
    let total = amountToAddValue + mainBalanceValue;
    document.getElementById('mainBalance').innerText = total;

    alert(`
        Added: ${amountToAddValue} TAKA to you Main Balance. Total : ${mainBalanceValue} + ${amountToAddValue} = ${total} Taka
        `)
})