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
    
    const selectPayDropdown = document.getElementById('selectPayDropdown')
    const billerAccountNumber = document.getElementById('billerAccountNumber')
    const payAmount = document.getElementById('payAmount')
    const payPin = document.getElementById('payPin')

    if(selectPayDropdown.value !== 'Select your services'){
        document.getElementById('selectPaySpan').style.color = 'black'
        document.getElementById('selectPayDropdown').style.color = 'black'
        document.getElementById('selectPayDropdown').style.borderColor = '#ddd'

        if(billerAccountNumber.value.length === 11){
            document.getElementById('billerAccountNumberSpan').style.color = 'black'
            document.getElementById('billerAccountNumber').style.color = 'black'
            document.getElementById('billerAccountNumber').style.borderColor = '#ddd'

            if(payAmount.value !== '' && payAmount.value > 0){
                document.getElementById('payAmountSpan').style.color = 'black'
                document.getElementById('payAmount').style.color = 'black'
                document.getElementById('payAmount').style.borderColor = '#ddd'
                
                if(payPin.value === '1234'){
                    document.getElementById('payPinSpan').style.color = 'black'
                    document.getElementById('payPin').style.color = 'black'
                    document.getElementById('payPin').style.borderColor = '#ddd'

                    const mainBalance = document.getElementById('mainBalance').innerText;
                    let convertedMainBalance = parseFloat(mainBalance);
                    let sum = convertedMainBalance - parseFloat(payAmount.value);
                    document.getElementById('mainBalance').innerText = sum;

                    document.getElementById('modal').innerHTML = `<h2 class="text-center text-lg font-bold">BILL PAYED SUCCESSFULLY</h2><hr/><br/>
                    <p> <span class='font-bold'>Service: </span> ${selectPayDropdown.value}</p>
                    <p><span class='font-bold'>Biller account number: </span> ${billerAccountNumber.value}</p>
                    <p><span class='font-bold'>Amount to pay: </span> ${payAmount.value}</p>
                    <p><span class='font-bold text-green-500'>TOTAL : </span> ${convertedMainBalance} - ${payAmount.value} = ${sum}</p>
                    `
                    my_modal_1.showModal()

                }else{
                    document.getElementById('payPinSpan').style.color = 'red'
                    document.getElementById('payPin').style.color = 'red'
                    document.getElementById('payPin').style.borderColor = 'red'
                }

            }else{
                document.getElementById('payAmountSpan').style.color = 'red'
                document.getElementById('payAmount').style.color = 'red'
                document.getElementById('payAmount').style.borderColor = 'red'
            }
        }else{
            document.getElementById('billerAccountNumberSpan').style.color = 'red'
            document.getElementById('billerAccountNumber').style.color = 'red'
            document.getElementById('billerAccountNumber').style.borderColor = 'red'
        }

    }else{
        document.getElementById('selectPaySpan').style.color = 'red'
        document.getElementById('selectPayDropdown').style.color = 'red'
        document.getElementById('selectPayDropdown').style.borderColor = 'red'
    }
})