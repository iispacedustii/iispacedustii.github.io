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
    let service = document.getElementsByName("radio-choice");
    let select = document.getElementById("select6");
    let check = document.getElementById("checkbox6");
    let result = document.getElementById("result6");
  
    let option2 = document.getElementById("option2");
    if (service.value == 249)
        option2.style.display = "none";
    else
        option2.style.display = "block";
  
    let option3 = document.getElementById("option3");
    if (service.value == 299)
      option3.style.display = "none";
    else
      option3.style.display = "block";

    if (Number(weight.value) && weight.value > 0)
    {
      if (service.value == 189)
        result.innerHTML = "Стоимость: " + String(Number(weight.value) * Number(service.value));
      if (service.value == 249)
        result.innerHTML = "Стоимость: " + String(Number(weight.value) * Number(service.value) + Number(select.value));
      if (service.value == 299)
        result.innerHTML = "Стоимость: " + String(Number(weight.value) * Number(service.value) + Number(check.value));
    }
    else
      result.innerHTML = "Некорректно введено количество";

    
    console.log(result);
    return false;
};
