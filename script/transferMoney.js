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
    
    const transferAccountNumber = document.getElementById('transferAccountNumber')
    const transferAmount = document.getElementById('transferAmount')
    const transferPin = document.getElementById('transferPin')

    if(transferAccountNumber.value.length === 11){
        document.getElementById('transferNumberSpan').style.color = 'black'
        document.getElementById('transferAccountNumber').style.color = 'black'
        document.getElementById('transferAccountNumber').style.borderColor = '#ddd'

        if(transferAmount.value !== '' && transferAmount.value > 0){
            document.getElementById('transferAmountSpan').style.color = 'black'
            document.getElementById('transferAmount').style.color = 'black'
            document.getElementById('transferAmount').style.borderColor = '#ddd'
            
            if(transferPin.value === '1234'){
                document.getElementById('transferPinSpan').style.color = 'black'
                document.getElementById('transferPin').style.color = 'black'
                document.getElementById('transferPin').style.borderColor = '#ddd'

                const mainBalance = document.getElementById('mainBalance').innerText;
                let convertedMainBalance = parseFloat(mainBalance);
                let sum = convertedMainBalance - parseFloat(transferAmount.value);
                document.getElementById('mainBalance').innerText = sum;

                document.getElementById('modal').innerHTML = `<h2 class="text-center text-lg font-bold">TRANSFER MONEY SUCCESSFULLY</h2><hr/><br/>
                <p><span class='font-bold'>User account number: </span> ${transferAccountNumber.value}</p>
                <p><span class='font-bold'>Amount: </span> ${transferAmount.value}</p>
                <p><span class='font-bold text-green-500'>TOTAL : </span> ${convertedMainBalance} - ${transferAmount.value} = ${sum}</p>
                `
                my_modal_1.showModal()

            }else{
                document.getElementById('transferPinSpan').style.color = 'red'
                document.getElementById('transferPin').style.color = 'red'
                document.getElementById('transferPin').style.borderColor = 'red'
            }

        }else{
            document.getElementById('transferAmountSpan').style.color = 'red'
            document.getElementById('transferAmount').style.color = 'red'
            document.getElementById('transferAmount').style.borderColor = 'red'
        }
    }else{
        document.getElementById('transferNumberSpan').style.color = 'red'
        document.getElementById('transferAccountNumber').style.color = 'red'
        document.getElementById('transferAccountNumber').style.borderColor = 'red'
    }
})