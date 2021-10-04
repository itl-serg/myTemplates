let setPercent = document.querySelector("#percent");
let months = document.querySelector("#months");
let depositAmount = document.querySelector("#depositAmount");
let prolongationInterestPayment = document.querySelector("#prolongation-interest-payment");

let divAmount = document.querySelector(".total-amount");
let divPercent = document.querySelector(".total-percent");

let button = document.querySelector("button");

button.onclick = function () {
    if (prolongationInterestPayment.checked) {
        getDepositPercent();
    } else {
        getDepositNotPercent();
    }
};

let getDepositPercent = () => {
    let inputMonths = +months.value;
    let inputDepositAmount = +depositAmount.value;
    let inputPercent = +setPercent.value / 100;

    let summa = +depositAmount.value;
    let percent = 0;

    for (let i = 1; i <= inputMonths; i++) {
        inputDepositAmount = inputDepositAmount + inputDepositAmount * inputPercent;
    }
    percent = inputDepositAmount - summa;

    divAmount.innerHTML = Math.round(inputDepositAmount);
    divPercent.innerHTML = Math.round(percent);
};

let getDepositNotPercent = () => {
    let inputMonths = +months.value;
    let inputDepositAmount = +depositAmount.value;
    let inputPercent = +setPercent.value / 100;

    let summa = +depositAmount.value;
    let percent = 0;

    inputDepositAmount = inputDepositAmount + inputMonths * (inputDepositAmount * inputPercent);
    percent = inputDepositAmount - summa;

    divAmount.innerHTML = Math.round(inputDepositAmount);
    divPercent.innerHTML = Math.round(percent);
};
