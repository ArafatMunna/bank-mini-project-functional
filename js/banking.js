//Get Input
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);

    //Clear Input Field
    inputField.value = "";

    return inputAmount;
}

//Update Total Field
function updateTotalField(totalId, inputAmount){
    //Get Total
    const total = document.getElementById(totalId);
    const totalPreviousText = total.innerText;
    const totalPrevious = parseFloat(totalPreviousText);

    //Update Total
    const totalNew = totalPrevious + inputAmount;
    total.innerText = totalNew;
}

//Update Balance
function totalBalance(inputAmount, isAdd){
    //Get Total Balance
    const balanceTotal = document.getElementById("balance-total");
    const balancePreviousText = balanceTotal.innerText;
    const balancePrevious = parseFloat(balancePreviousText);

    if(balancePrevious >= inputAmount){
        //Update Total Balance
        if(isAdd == true){
            const balanceTotalNew = balancePrevious + inputAmount;
            balanceTotal.innerText = balanceTotalNew;
        }
        else{
            const balanceTotalNew = balancePrevious - inputAmount;
            balanceTotal.innerText = balanceTotalNew;
        }
    }
    else{
        alert("Insufficient Amount");
    }
}

//Handle Deposite Button
document.getElementById("deposite-button").addEventListener("click", function(event){
    //Input Function Call
    const depositeAmount = getInputValue("deposite-input");

    if(depositeAmount > 0){
        //Get and Update Deposite Total
        updateTotalField("deposite-total", depositeAmount);

        //Get and Update Total Balance
        totalBalance(depositeAmount, true);
    }
    else{
        alert("Please enter a positive number");
    }
});

// Handle Withdraw Button
document.getElementById("withdraw-button").addEventListener("click", function(event){
    //Get Withdraw Input
    const withdrawAmount = getInputValue("withdraw-input");

    if(withdrawAmount > 0){
        //Get and Update Deposite Total
        updateTotalField("withdraw-total", withdrawAmount);

        //Get and Update Total Balance
        totalBalance(withdrawAmount, false);
    }
    else{
        alert("Please enter a positive number");
    }
});