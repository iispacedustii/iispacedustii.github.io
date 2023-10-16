document.addEventListener("DOMContentLoaded", function (event) {  console.log("DOM fully loaded and parsed");  });

button.onclick = compute() 
{
  let weight = document.getElementsByName("weight");
  let cost = document.getElementsByName("item");
  let result = document.getElementById("result");
  
  if (!Number(weight[0].value) || Number(weight[0].value) < 0)
  {
    alert("Вес введен некорректно");
    return false;
  }
 
  result.innerHTML += weight[0].value * cost.value;
  return false;
}

button.onclick = nulify() 
{
  result.innerHTML = 0;
  return false;
}
