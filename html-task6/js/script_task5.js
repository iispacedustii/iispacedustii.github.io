function toCalculate() {
    let weight = document.getElementById("weight");
    let item = document.getElementById("item");
    let domAns = document.getElementById("result");
    
    if(Number(weight.value) && weight.value > 0)
      result.innerHTML = "Стоимость: " + String(Number(item.value) * Number(weight.value));
    else
      result.innerHTML = "Некорректно введен вес";
    
    console.log(result);
    return false;
};
