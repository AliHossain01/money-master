function calculateExpense() {
    const incomeInput = document.getElementById('income-input').value;
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const othersInput = document.getElementById('others-input').value;

    let totalExpenses = document.getElementById('total-expenses');
    let balance = document.getElementById('balance');


    const failError = document.getElementById('notify-fail');
    const expenseError = document.getElementById('expense');

    if (incomeInput >= 0 && foodInput >= 0 && rentInput >= 0 && othersInput >= 0) {
        total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(othersInput);

        if (total <= incomeInput) {
            totalExpenses.innerText = total;
            remaining = parseFloat(incomeInput) - total;
            balance.innerText = remaining;
        }
        else {

            expenseError.style.display = 'block';
        }

    }
    else {

        failError.style.display = 'block';
    }
}

function saveMoney() {
    const incomeInput = document.getElementById('income-input');
    let incomeInputValue = incomeInput.value;
    let balance = document.getElementById('balance').innerText;

    const savingAmount = document.getElementById('saving-amount');
    let remainingBalanceNumber = document.getElementById('remaining-balance');

    const saveMoneyInput = document.getElementById('save-money-input').value;

    const failError = document.getElementById('notify-fail');
    const insufficientError = document.getElementById('insufficient');


    if (saveMoneyInput > 0) {
        let savesMoney = (incomeInputValue * saveMoneyInput) / 100;
        remainingBalance = parseFloat(balance) - savesMoney;
        savingAmount.innerText = savesMoney;
        if (remainingBalance > 0) {
            remainingBalanceNumber.innerText = remainingBalance;
        }
        else {

            insufficientError.style.display = 'block';
        }

    }
    else {

        failError.style.display = 'block';
    }
}





document.getElementById('calculate-btn').addEventListener('click', function () {

    calculateExpense();
});

document.getElementById('save-money').addEventListener('click', function () {

    saveMoney();

})