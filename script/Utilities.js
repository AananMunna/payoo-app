const bgColor = (id,color)=>{
    document.getElementById(id).style.background = color
}

const toggle = (id,property)=>{
    document.getElementById(id).style.display = property
}

const time = ()=>{
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; 

    let timeString = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    
    return timeString;
}

const transactionsHtml = (title,time, img)=>{
    return `        <div class="flex justify-between items-center shadow rounded-2xl border p-3 transition hover:scale-100 hover:shadow-2xl">
            <div class="flex justify-start items-center gap-4">
                <img src=${img} class="border p-3 rounded-full bg-[#ddd]" alt="">
            <div>
                <h3 class="font-bold">${title}</h3>
                <span class="text-sm text-[#7b7878]">Today ${time}</span>
            </div>
            </div>
            <div id="openModal" class="cursor-pointer p-5">
                <img src="./assets/dot.png" class="transition hover:rotate-90 hover:scale-150">
            </div>
        </div>`
}

const transaction = (title, img) => {
    let transactionsList = document.getElementById('transactionsList');
    const div = document.createElement('div');
    div.innerHTML = transactionsHtml(title, time(), img)
    transactionsList.prepend(div)
}


