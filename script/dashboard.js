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
    
    const SelectBankDropdown = document.getElementById('SelectBankDropdown')
    const bankAccountNumber = document.getElementById('bankAccountNumber')
    const amountToAdd = document.getElementById('amountToAdd')
    const pin = document.getElementById('pin')

    if(SelectBankDropdown.value !== 'Select bank'){
        document.getElementById('selectBankSpan').style.color = 'black'
        document.getElementById('SelectBankDropdown').style.color = 'black'
        document.getElementById('SelectBankDropdown').style.borderColor = '#ddd'

        if(bankAccountNumber.value.length === 11){
            document.getElementById('bankAccountNumberSpan').style.color = 'black'
            document.getElementById('bankAccountNumber').style.color = 'black'
            document.getElementById('bankAccountNumber').style.borderColor = '#ddd'

            if(amountToAdd.value !== '' && amountToAdd.value > 0){
                document.getElementById('amountToAddSpan').style.color = 'black'
                document.getElementById('amountToAdd').style.color = 'black'
                document.getElementById('amountToAdd').style.borderColor = '#ddd'
                
                if(pin.value === '1234'){
                    document.getElementById('pinSpan').style.color = 'black'
                    document.getElementById('pin').style.color = 'black'
                    document.getElementById('pin').style.borderColor = '#ddd'

                    const mainBalance = document.getElementById('mainBalance').innerText;
                    let convertedMainBalance = parseFloat(mainBalance);
                    let sum = convertedMainBalance + parseFloat(amountToAdd.value);
                    document.getElementById('mainBalance').innerText = sum;

                    document.getElementById('modal').innerHTML = `<h2 class="text-center text-lg font-bold">ADDED MONEY SUCCESSFULLY FROM</h2><hr/><br/>
                    <p> <span class='font-bold'>Bank: </span> ${SelectBankDropdown.value}</p>
                    <p><span class='font-bold'>Bank account number: </span> ${bankAccountNumber.value}</p>
                    <p><span class='font-bold'>Amount: </span> ${amountToAdd.value}</p>
                    <p><span class='font-bold text-green-500'>TOTAL : </span> ${convertedMainBalance} + ${amountToAdd.value} = ${sum}</p>
                    `
                    my_modal_1.showModal()

                    transaction('Add Money','../assets/wallet1.png')

                }else{
                    document.getElementById('pinSpan').style.color = 'red'
                    document.getElementById('pin').style.color = 'red'
                    document.getElementById('pin').style.borderColor = 'red'
                }

            }else{
                document.getElementById('amountToAddSpan').style.color = 'red'
                document.getElementById('amountToAdd').style.color = 'red'
                document.getElementById('amountToAdd').style.borderColor = 'red'
            }
        }else{
            document.getElementById('bankAccountNumberSpan').style.color = 'red'
            document.getElementById('bankAccountNumber').style.color = 'red'
            document.getElementById('bankAccountNumber').style.borderColor = 'red'
        }

    }else{
        document.getElementById('selectBankSpan').style.color = 'red'
        document.getElementById('SelectBankDropdown').style.color = 'red'
        document.getElementById('SelectBankDropdown').style.borderColor = 'red'
    }

})