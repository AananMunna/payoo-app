document.getElementById('cashOut').addEventListener('click', ()=>{
    document.getElementById('addMoney').style.background = 'white'
    document.getElementById('cashOut').style.background = '#ddd'
    document.getElementById('transferMoney').style.background = 'white'
    document.getElementById('getBonus').style.background = 'white'
    document.getElementById('payBill').style.background = 'white'
    document.getElementById('transactions').style.background = 'white'

    document.getElementById('addMoneySection').style.display = 'none'
    document.getElementById('cashOutSection').style.display = 'block'
    document.getElementById('transferMoneySection').style.display = 'none'
    document.getElementById('getBonusSection').style.display = 'none'
    document.getElementById('payBillSection').style.display = 'none'
    document.getElementById('latestPaymentSection').style.display = 'none'

})

document.getElementById('widtdrawBtn').addEventListener('click', (e)=>{
    e.preventDefault();

    const amountTowithdraw = document.getElementById('amountTowithdraw');
    let amountToAddValue = parseInt(amountTowithdraw.value);

    if(amountTowithdraw.value !=='' && amountTowithdraw.value >0){

    const mainBalance = document.getElementById('mainBalance');
    let mainBalanceValue = parseInt(mainBalance.innerText)
    
    let total = mainBalanceValue - amountToAddValue;
    document.getElementById('mainBalance').innerText = total;

    alert(`
        CashOut: ${amountToAddValue} TAKA from your Main Balance. Total : ${mainBalanceValue} - ${amountToAddValue} = ${total} Taka
        `)

    }else{
        alert('please fill all input')
    }
    


})