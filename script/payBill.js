document.getElementById('payBill').addEventListener('click', ()=>{
    bgColor('addMoney','white');
    bgColor('cashOut','white');
    bgColor('transferMoney','white');
    bgColor('getBonus','white');
    bgColor('payBill','#ddd');
    bgColor('transactions','white');
    
    toggle('addMoneySection','none');
    toggle('cashOutSection','none');
    toggle('transferMoneySection','none');
    toggle('getBonusSection','none');
    toggle('payBillSection','block');
    toggle('latestPaymentSection','none');
})

document.getElementById('payNowButton').addEventListener('click', (e)=>{
    e.preventDefault();
    operations('amountToWithDraw','mainBalance','-')
})