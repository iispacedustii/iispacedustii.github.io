document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    let buttonA = document.getElementById("calculate");
    buttonA.addEventListener("click", toCalculate);
    let buttonB = document.getElementById("nulify");
    buttonB.addEventListener("click", toNulify);
});

/*button.onclick = compute() 
{
  let text = document.getElementById('text');
  let weight = document.getElementsByName("weight");
  let cost = document.getElementsByName("item");
  //let cost = cost.value;
  if (!Number(weight.value) || Number(weight.value) <= 0)
  { alert("Вес введен некорректно"); return false; }
  text.innerHTML =  String(result + weight.value * cost.value) + "руб";
  return false;}

button.onclick = nulify() 
{
  result.innerHTML = 0;
  return false;
}*/

let toCalculate = () => {
    let weight = document.getElementById("weight").value;
    let item = document.getElementById("item").value;
  
    if(!Number(weight.value) || Number(weight.value) <= 0)
      return "Стоимость: " + String(Number[item] * Number(weight));
    else
      return "Некорректно введен вес";
  
    let domAns = document.getElementById("result");
    domAns.replaceChildren(`${value}`);
};

let toNulify = () => {
    let domAns = document.getElementById("result");
    domAns.replaceChildren(`${0}`);
};
