// checked script

const checkbox = document.getElementById("checkbox");
const shopeepayRadio = document.getElementById("shopeepayRadio");
const gopayRadio = document.getElementById("gopayRadio");
const debitRadio = document.getElementById("debitRadio");
const submit = document.getElementById("submit");
const pSubsribe = document.getElementById("pSubsribe");
const pPayment = document.getElementById("pPayment");


submit.onclick = function(){
    if(checkbox.checked){
        pSubsribe.textContent = `You already subscribed`;
    }else {
        pSubsribe.textContent = `You NOT already subscribed`;
    }

    if(shopeepayRadio.checked){
        pPayment.textContent = `You payed by shopeepay`;
    }else if(gopayRadio.checked){
        pPayment.textContent = `You payed by gopay`;
    }else if(debitRadio.checked){
        pPayment.textContent = `You payed by debit`;
    }else{
        pPayment.textContent = `You must at lease choose 1 payment`;
    }

}