document.getElementById('transferMoney').addEventListener('click', ()=>{
    document.getElementById('addMoney').style.background = 'white'
    document.getElementById('cashOut').style.background = 'white'
    document.getElementById('transferMoney').style.background = '#ddd'
    document.getElementById('getBonus').style.background = 'white'
    document.getElementById('payBill').style.background = 'white'
    document.getElementById('transactions').style.background = 'white'

    document.getElementById('addMoneySection').style.display = 'none'
    document.getElementById('cashOutSection').style.display = 'none'
    document.getElementById('transferMoneySection').style.display = 'block'
    document.getElementById('getBonusSection').style.display = 'none'
    document.getElementById('payBillSection').style.display = 'none'
    document.getElementById('latestPaymentSection').style.display = 'none'

})

document.getElementById('transferMoneyBtn').addEventListener('click', (e)=>{
    e.preventDefault();

    const amountToTransfer = document.getElementById('amountToTransfer');
    let amountToAddValue = parseInt(amountToTransfer.value);

    if(amountToTransfer.value !=='' && amountToTransfer.value >0){

    const mainBalance = document.getElementById('mainBalance');
    let mainBalanceValue = parseInt(mainBalance.innerText)
    
    let total = mainBalanceValue - amountToAddValue;
    document.getElementById('mainBalance').innerText = total;

    alert(`
        Transfer: ${amountToAddValue} TAKA from your Main Balance. Total : ${mainBalanceValue} - ${amountToAddValue} = ${total} Taka
        `)

    }else{
        alert('please fill all input')
    }
    


})