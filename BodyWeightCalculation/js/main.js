let patientHeight = document.querySelector("#patient-height");
let patientWeight = document.querySelector("#patient-weight");

let button = document.querySelector("button");

let divResultBmi = document.querySelector(".result-bmi");
let divCorrespondenceBmi = document.querySelector(".correspondence-bmi");

let bodyMassIndex = 0;

// Ограничевает количество введенных символов maxlength="3"
function maxLengthCheck(object) {
    if (object.value.length > object.maxLength) object.value = object.value.slice(0, object.maxLength);
}

// Не перезагружает страницу при отпрвки формы (<Form> в html)
function stopDefAction(evt) {
    evt.preventDefault();
}
button.addEventListener("click", stopDefAction, false);

// Вызывает расчет индекса массы тела при клике по кнопке и выводит результат
button.onclick = function () {
    let injectedPatientHeight = +patientHeight.value;
    let injectedpatientWeight = +patientWeight.value;

    console.log(`Рост ${injectedPatientHeight}`);
    console.log(`Вес ${injectedpatientWeight}`);

    bodyMassIndex = injectedpatientWeight / ((injectedPatientHeight / 100) * (injectedPatientHeight / 100));

    console.log(bodyMassIndex);

    divResultBmi.innerHTML = bodyMassIndex.toFixed(2);

    printIndexMatch();
};

// Выводит результат из расчета

let printIndexMatch = () => {
    let indexMatch = " ";

    if (bodyMassIndex < 16.49) {
        indexMatch = "Выраженный дефицит массы тела";
        divCorrespondenceBmi.style.color = "red";
    }
    if (bodyMassIndex >= 16.5 && bodyMassIndex < 18.49) {
        indexMatch = "Дефицит массы тела";
        divCorrespondenceBmi.style.color = "orange";
    }

    if (bodyMassIndex >= 18.5 && bodyMassIndex < 24.99) {
        indexMatch = "Нормальная масса тела";
        divCorrespondenceBmi.style.color = "green";
    }

    if (bodyMassIndex >= 25 && bodyMassIndex < 29.99) {
        indexMatch = "Избыточная масса тела";
        divCorrespondenceBmi.style.color = "orange";
    }

    if (bodyMassIndex >= 30 && bodyMassIndex < 34.99) {
        indexMatch = "Ожирение I степени";
        divCorrespondenceBmi.style.color = "red";
    }

    if (bodyMassIndex >= 35 && bodyMassIndex < 39.99) {
        indexMatch = "Ожирение II степени";
        divCorrespondenceBmi.style.color = "red";
    }
    if (bodyMassIndex >= 40) {
        indexMatch = "Ожирение III степени";
        divCorrespondenceBmi.style.color = "red";
    }

    console.log(indexMatch);
    divCorrespondenceBmi.innerHTML = indexMatch;
};
