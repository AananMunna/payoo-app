document.getElementById('logOut').addEventListener('click', ()=>{
    window.location.href = './index.html'
})

document.getElementById('addMoney').addEventListener('click', ()=>{
    bgColor('addMoney','#ddd');
    bgColor('cashOut','white');
    bgColor('transferMoney','white');
    bgColor('getBonus','white');
    bgColor('payBill','white');
    bgColor('transactions','white');
    
    toggle('addMoneySection','block');
    toggle('cashOutSection','none');
    toggle('transferMoneySection','none');
    toggle('getBonusSection','none');
    toggle('payBillSection','none');
    toggle('latestPaymentSection','none');
})

document.getElementById('addMoneyBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    // my_modal_1.showModal()
    // document.getElementById('modal').innerHTML= `ki re`
    

    const bank = document.getElementById('bank').value;
    const bankAccountNumber = document.getElementById('bankAccountNumber').value;
    const pin = document.getElementById('pin').value;
    if(bank !== 'Select bank'){

        document.getElementById('selectBank').innerHTML= `
        <p>You have selected ${bank}</p>`
        document.getElementById('bank').classList.remove( `border-red-500`)

        if(bankAccountNumber.length === 11){

        document.getElementById('bankAccountNumberSpan').innerHTML= `
        <p>Your Account number is correct</p>`
        document.getElementById('bankAccountNumber').classList.remove( `border-red-500`)

            if(pin === '1234'){

        document.getElementById('pinSpan').innerHTML= `
        <p>Your Pin number is correct</p>`
        document.getElementById('pin').classList.remove( `border-red-500`)

                operations('amountToAdd','mainBalance','+')
            }else{
                
        document.getElementById('pinSpan').innerHTML= `
        <p class = 'text-red-600 scale-110'>Incorrect Pin**</p>`
        document.getElementById('pin').classList.add( `border-red-500`)
                
            }
        }else{

        document.getElementById('bankAccountNumberSpan').innerHTML= `
        <p class = 'text-red-600 scale-110'>Account Number Must Be 11 Digit**</p>`
        document.getElementById('bankAccountNumber').classList.add( `border-red-500`)

        }
    }else{

        document.getElementById('selectBank').innerHTML= `
        <p class = 'text-red-600 scale-110'>Please Select A Bank First**</p>`
        document.getElementById('bank').classList.add( `border-red-500`)
    }
})