function radioButton1() {
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    option2.style.display = 'none';
    option3.style.display = 'none';

    let weight = document.getElementById("service-amount");
    let result = document.getElementById("result6");
    if (Number(weight.value) && weight.value > 0)
        result.innerHTML = "Стоимость: " + String(Number(weight.value) * 189);
    else
        result.innerHTML = "Некорректно введено количество";
}

function radioButton2() {
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    option2.style.display = 'block';
    option3.style.display = 'none';

    let weight = document.getElementById("service-amount");
    let select = document.getElementById("select6");
    let result = document.getElementById("result6");
    if (Number(weight.value) && weight.value > 0)
        result.innerHTML = "Стоимость: " + String(Number(weight.value) * 249 + Number(select.value));
    else
        result.innerHTML = "Некорректно введено количество";
}

function radioButton3() {
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    option2.style.display = 'none';
    option3.style.display = 'block';

    let weight = document.getElementById("service-amount");
    let checkbox = document.getElementById("checkbox6");
    let check = (checkbox.checked) ? 20 : 0;
    let result = document.getElementById("result6");
    if (Number(weight.value) && weight.value > 0)
        result.innerHTML = "Стоимость: " + String(Number(weight.value) * 299 + check);
    else
        result.innerHTML = "Некорректно введено количество";
}
