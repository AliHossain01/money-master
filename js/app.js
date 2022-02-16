document.getElementById('calculate-btn').addEventListener('click', function () {

    const incomeInput = document.getElementById('income-input').value;
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const othersInput = document.getElementById('others-input').value;

    let totalExpenses = document.getElementById('total-expenses');
    let balance = document.getElementById('balance');

    if (typeof incomeInput != 'number') {
        console.log('Please Enter a Positive Number');
    }

    else if (incomeInput >= 0 && foodInput >= 0 && rentInput >= 0 && othersInput >= 0) {
        total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(othersInput);

        totalExpenses.innerText = total;
        remaining = parseFloat(incomeInput) - total;
        balance.innerText = remaining;
    }
    else {
        console.log('Please Enter a Positive Number');
    }



});

document.getElementById('save-money').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    let incomeInputValue = incomeInput.value;
    let balance = document.getElementById('balance').innerText;

    const savingAmount = document.getElementById('saving-amount');
    let remainingBalanceNumber = document.getElementById('remaining-balance');

    const saveMoneyInput = document.getElementById('save-money-input').value;

    let savesMoney = (incomeInputValue * saveMoneyInput) / 100;
    remainingBalance = parseFloat(balance) - savesMoney;
    savingAmount.innerText = savesMoney;
    remainingBalanceNumber.innerText = remainingBalance;
})