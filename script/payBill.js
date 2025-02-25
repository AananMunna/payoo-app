document.getElementById('payBill').addEventListener('click', ()=>{
    document.getElementById('addMoney').style.background = 'white'
    document.getElementById('cashOut').style.background = 'white'
    document.getElementById('transferMoney').style.background = 'white'
    document.getElementById('getBonus').style.background = 'white'
    document.getElementById('payBill').style.background = '#ddd'
    document.getElementById('transactions').style.background = 'white'

    document.getElementById('addMoneySection').style.display = 'none'
    document.getElementById('cashOutSection').style.display = 'none'
    document.getElementById('transferMoneySection').style.display = 'none'
    document.getElementById('getBonusSection').style.display = 'none'
    document.getElementById('payBillSection').style.display = 'block'
    document.getElementById('latestPaymentSection').style.display = 'none'

})

document.getElementById('payNowButton').addEventListener('click', (e)=>{
    e.preventDefault();

    const amountToPayInput = document.getElementById('amountToPayInput');
    let amountToAddValue = parseInt(amountToPayInput.value);

    if(amountToPayInput.value !=='' && amountToPayInput.value >0){

    const mainBalance = document.getElementById('mainBalance');
    let mainBalanceValue = parseInt(mainBalance.innerText)
    
    let total = mainBalanceValue - amountToAddValue;
    document.getElementById('mainBalance').innerText = total;

    alert(`
        Pay Bill: ${amountToAddValue} TAKA from your Main Balance. Total : ${mainBalanceValue} - ${amountToAddValue} = ${total} Taka
        `)

    }else{
        alert('please fill all input')
    }
    


})