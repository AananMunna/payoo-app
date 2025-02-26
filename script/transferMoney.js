document.getElementById('transferMoney').addEventListener('click', ()=>{
    bgColor('addMoney','white');
    bgColor('cashOut','white');
    bgColor('transferMoney','#ddd');
    bgColor('getBonus','white');
    bgColor('payBill','white');
    bgColor('transactions','white');
    
    toggle('addMoneySection','none');
    toggle('cashOutSection','none');
    toggle('transferMoneySection','block');
    toggle('getBonusSection','none');
    toggle('payBillSection','none');
    toggle('latestPaymentSection','none');
})

document.getElementById('transferMoneyBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    operations('amountToWithDraw','mainBalance','-')
})