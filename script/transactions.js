document.getElementById('transactions').addEventListener('click', ()=>{
    bgColor('addMoney','white');
    bgColor('cashOut','white');
    bgColor('transferMoney','white');
    bgColor('getBonus','white');
    bgColor('payBill','white');
    bgColor('transactions','#ddd');

    toggle('addMoneySection','none');
    toggle('cashOutSection','none');
    toggle('transferMoneySection','none');
    toggle('getBonusSection','none');
    toggle('payBillSection','none');
    toggle('latestPaymentSection','block');
})

// document.getElementById('payNowButton').addEventListener('click', (e)=>{
//     e.preventDefault();

//     const amountToPayInput = document.getElementById('amountToPayInput');
//     let amountToAddValue = parseInt(amountToPayInput.value);

//     if(amountToPayInput.value !=='' && amountToPayInput.value >0){

//     const mainBalance = document.getElementById('mainBalance');
//     let mainBalanceValue = parseInt(mainBalance.innerText)
    
//     let total = mainBalanceValue - amountToAddValue;
//     document.getElementById('mainBalance').innerText = total;

//     alert(`
//         Pay Bill: ${amountToAddValue} TAKA from your Main Balance. Total : ${mainBalanceValue} - ${amountToAddValue} = ${total} Taka
//         `)

//     }else{
//         alert('please fill all input')
//     }
    


// })