function getInputValu(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValu = parseFloat(inputAmountText);
    // clear input flied
    inputField.value = '';
    return amountValu; 
}
function updateTotalFeild(totalFieldId, amount) {
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const previousTotal = parseFloat(totalText);
    totalField.innerText = previousTotal + amount; 
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount; 
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount; 
    }
}
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValu('deposit-input');
    if (depositAmount > 0) {
        updateTotalFeild('deposit-total', depositAmount);
        updateBalance(depositAmount, true); 
    }
    
   
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValu('withdraw-input');
    const currentBalance = getCurrentBalance();
   if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
    updateTotalFeild('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);;
   }
})