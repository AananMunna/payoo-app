document.getElementById('getBonus').addEventListener('click', ()=>{
    bgColor('addMoney','white');
    bgColor('cashOut','white');
    bgColor('transferMoney','white');
    bgColor('getBonus','#ddd');
    bgColor('payBill','white');
    bgColor('transactions','white');
    
    toggle('addMoneySection','none');
    toggle('cashOutSection','none');
    toggle('transferMoneySection','none');
    toggle('getBonusSection','block');
    toggle('payBillSection','none');
    toggle('latestPaymentSection','none');
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