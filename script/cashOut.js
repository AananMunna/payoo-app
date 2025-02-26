document.getElementById('cashOut').addEventListener('click', ()=>{
    bgColor('addMoney','white');
    bgColor('cashOut','#ddd');
    bgColor('transferMoney','white');
    bgColor('getBonus','white');
    bgColor('payBill','white');
    bgColor('transactions','white');
    
    toggle('addMoneySection','none');
    toggle('cashOutSection','block');
    toggle('transferMoneySection','none');
    toggle('getBonusSection','none');
    toggle('payBillSection','none');
    toggle('latestPaymentSection','none');
})

document.getElementById('withDrawButton').addEventListener('click', (e)=>{
    e.preventDefault();
    operations('amountToWithDraw','mainBalance','-')
})