/*function updatePrice() {
    let result_price = 0;
    let main_price = document.getElementsByName("radio-6");

    radios.forEach((main_price) => {
        if(radio.checked)
            result_price +=  Number(main_price.value);
    });

    let add_price = document.getElementById("type-select");
    add_price.style.display = (main_price.value == 189) ? "block" : "none";

    result_price += Number(add_price.value);

    let check = document.getElementById("check");
    check.style.display = (main_price == "Картофель фри" ? "block" : "none");

    document.getElementById("checkbox").checked ? VALUE += 20 : null; 

    let input = document.getElementById("amount_service");
    (input.value !== undefined) ?
        /^[0-9]+$/.test(input.value) ? VALUE *= Number(input.value) : null : null;

document.getElementById('form').style.display = 'block';
  
    document.getElementById("result_service").innerHTML = ${VALUE} + "руб.";
}

function reset() {
    document.getElementById("type-select").value = 0;
    document.getElementById("checkbox").checked = false;
}*/

function toCalculate6() {
    let weight = document.getElementById("service-amount");
    let select = document.getElementById("select6");
    let check = document.getElementById("checkbox6");
    let result = document.getElementById("result6");

    let service_choice = document.getElementsById("service_choice");
    let service = document.getElementsByName("radio-choice");
    let service_price = 0;
    service_choice.forEach((service) => {
        if(service.checked)
            service_price = Number(service.value);
    });
  
result.innerHTML = service_price;

    if (Number(weight.value) && weight.value > 0)
    {
      if (service_price == 189)
        result.innerHTML = "Стоимость: 1 " + String(Number(weight.value) * service_price);
      if (service_price == 249)
        result.innerHTML = "Стоимость: 2 " + String(Number(weight.value) * service_price + Number(select.value));
      if (service_price == 299)
        result.innerHTML = "Стоимость: 3 " + String(Number(weight.value) * service_price + Number(check.value));
    }
    else
      result.innerHTML = "Некорректно введено количество";

    
    console.log(result);
    return false;
};

function radioButton1() {
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    option2.style.display = 'none';
    option3.style.display = 'none';
}

function radioButton2() {
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    option2.style.display = 'block';
    option3.style.display = 'none';
}

function radioButton3() {
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    option2.style.display = 'none';
    option3.style.display = 'block';
}
