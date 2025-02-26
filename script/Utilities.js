const bgColor = (id,color)=>{
    document.getElementById(id).style.background = color
}

const toggle = (id,property)=>{
    document.getElementById(id).style.display = property
}


const operations = (id1,id2,operation)=>{

    const amount = document.getElementById(id1);
    let amountToAddValue = parseFloat(amount.value);

    if(amount.value !=='' && amount.value >0){
        document.getElementById('amount').innerHTML= `
        <p>You have added amount</p>`
        document.getElementById('amountToAdd').classList.remove( `border-red-500`)

    const mainBalance = document.getElementById(id2);
    let mainBalanceValue = parseFloat(mainBalance.innerText)
    
    if(operation === '-'){
        let total = mainBalanceValue - amountToAddValue;
        document.getElementById(id2).innerText = total;
    }else if(operation === '+'){
        let total = mainBalanceValue + amountToAddValue;
        document.getElementById(id2).innerText = total;
    }
    }else{
        document.getElementById('amount').innerHTML= `
        <p class = 'text-red-600 scale-110'>Invalid Amount**</p>`
        document.getElementById('amountToAdd').classList.add( `border-red-500`)
    } 
}
