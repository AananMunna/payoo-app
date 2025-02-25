document.getElementById('getBonus').addEventListener('click', ()=>{
    document.getElementById('addMoney').style.background = 'white'
    document.getElementById('cashOut').style.background = 'white'
    document.getElementById('transferMoney').style.background = 'white'
    document.getElementById('getBonus').style.background = '#ddd'
    document.getElementById('payBill').style.background = 'white'
    document.getElementById('transactions').style.background = 'white'

    document.getElementById('addMoneySection').style.display = 'none'
    document.getElementById('cashOutSection').style.display = 'none'
    document.getElementById('transferMoneySection').style.display = 'none'
    document.getElementById('getBonusSection').style.display = 'block'
    document.getElementById('payBillSection').style.display = 'none'
    document.getElementById('latestPaymentSection').style.display = 'none'

})

document.getElementById('getBonusBtn').addEventListener('click', (e)=>{
    e.preventDefault();

    const getBonusInp = document.getElementById('getBonusInp');
    let getBonusInpValue = getBonusInp.value;

    if(getBonusInpValue === 'payoo'){

    const mainBalance = document.getElementById('mainBalance');
    let mainBalanceValue = parseInt(mainBalance.innerText)
    
    let total = 10 + mainBalanceValue;
    document.getElementById('mainBalance').innerText = total;

    alert(`You got 10 Taka Bonus`)

    }else{
        alert('Promo Code Did Not Match')
    }
    


})