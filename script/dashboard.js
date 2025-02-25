document.getElementById('logOut').addEventListener('click', ()=>{
    window.location.href = './index.html'
})

document.getElementById('addMoney').addEventListener('click', ()=>{
    document.getElementById('addMoney').style.background = '#ddd'
    document.getElementById('cashOut').style.background = 'white'
    document.getElementById('transferMoney').style.background = 'white'
    document.getElementById('getBonus').style.background = 'white'
    document.getElementById('payBill').style.background = 'white'
    document.getElementById('transactions').style.background = 'white'

    document.getElementById('addMoneySection').style.display = 'block'
    document.getElementById('cashOutSection').style.display = 'none'
    document.getElementById('transferMoneySection').style.display = 'none'
    document.getElementById('getBonusSection').style.display = 'none'
    document.getElementById('payBillSection').style.display = 'none'
    document.getElementById('latestPaymentSection').style.display = 'none'

})

document.getElementById('addMoneyBtn').addEventListener('click', (e)=>{
    e.preventDefault();

    const amountToAdd = document.getElementById('amountToAdd');
    let amountToAddValue = parseInt(amountToAdd.value);

    if(amountToAdd.value !=='' && amountToAdd.value >0){

    const mainBalance = document.getElementById('mainBalance');
    let mainBalanceValue = parseInt(mainBalance.innerText)
    
    let total = amountToAddValue + mainBalanceValue;
    document.getElementById('mainBalance').innerText = total;

    alert(`
        Added: ${amountToAddValue} TAKA to your Main Balance. Total : ${mainBalanceValue} + ${amountToAddValue} = ${total} Taka
        `)

    }else{
        alert('please fill all input')
    }
    


})