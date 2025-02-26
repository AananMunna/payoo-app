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
        document.getElementById('bonusSpan').style.color = 'green'
        document.getElementById('bonusSpan').innerText = 'Your coupon code in correct '
        document.getElementById('getBonusInp').style.color = 'black'
        document.getElementById('getBonusInp').style.borderColor = '#ddd'

    const mainBalance = document.getElementById('mainBalance');
    let mainBalanceValue = parseInt(mainBalance.innerText)
    
    let total = 10 + mainBalanceValue;
    document.getElementById('mainBalance').innerText = total;

    document.getElementById('modal').innerHTML = `<h2 class="text-center text-lg font-bold">You have got $10 bonus SUCCESSFULLY</h2>`
    my_modal_1.showModal()

    transaction('Get Bonus','../assets/bonus1.png')

    }else{
        document.getElementById('bonusSpan').style.color = 'red'
        document.getElementById('bonusSpan').innerText = 'Coupon code will be : payoo'
        document.getElementById('getBonusInp').style.color = 'red'
        document.getElementById('getBonusInp').style.borderColor = 'red'
    }
    
})