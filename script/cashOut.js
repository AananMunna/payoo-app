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

    const cashOutAccountNumber = document.getElementById('cashOutAccountNumber')
    const cashOutAmount = document.getElementById('cashOutAmount')
    const cashOutPin = document.getElementById('cashOutPin')

    if(cashOutAccountNumber.value.length === 11){
        document.getElementById('cashOutSpan').style.color = 'black'
        document.getElementById('cashOutAccountNumber').style.color = 'black'
        document.getElementById('cashOutAccountNumber').style.borderColor = '#ddd'

        if(cashOutAmount.value !== '' && cashOutAmount.value > 0){
            document.getElementById('cashOutAmountSpan').style.color = 'black'
            document.getElementById('cashOutAmount').style.color = 'black'
            document.getElementById('cashOutAmount').style.borderColor = '#ddd'
            
            if(cashOutPin.value === '1234'){
                document.getElementById('cashOutPinSpan').style.color = 'black'
                document.getElementById('cashOutPin').style.color = 'black'
                document.getElementById('cashOutPin').style.borderColor = '#ddd'

                const mainBalance = document.getElementById('mainBalance').innerText;
                let convertedMainBalance = parseFloat(mainBalance);
                let sum = convertedMainBalance - parseFloat(cashOutAmount.value);
                document.getElementById('mainBalance').innerText = sum;

                document.getElementById('modal').innerHTML = `<h2 class="text-center text-lg font-bold">CASH OUT SUCCESSFULLY</h2><hr/><br/>
                <p><span class='font-bold'>Agent number: </span> ${cashOutAccountNumber.value}</p>
                <p><span class='font-bold'>Amount: </span> ${cashOutAmount.value}</p>
                <p><span class='font-bold text-green-500'>TOTAL : </span> ${convertedMainBalance} - ${cashOutAmount.value} = ${sum}</p>
                `
                my_modal_1.showModal()

                transaction('Cash Out','../assets/send1.png')

            }else{
                document.getElementById('cashOutPinSpan').style.color = 'red'
                document.getElementById('cashOutPin').style.color = 'red'
                document.getElementById('cashOutPin').style.borderColor = 'red'
            }

        }else{
            document.getElementById('cashOutAmountSpan').style.color = 'red'
            document.getElementById('cashOutAmount').style.color = 'red'
            document.getElementById('cashOutAmount').style.borderColor = 'red'
        }
    }else{
        document.getElementById('cashOutSpan').style.color = 'red'
        document.getElementById('cashOutAccountNumber').style.color = 'red'
        document.getElementById('cashOutAccountNumber').style.borderColor = 'red'
    }
})