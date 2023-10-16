document.addEventListener("DOMContentLoaded", function (event) {  console.log("DOM fully loaded and parsed");  });

button.onclick = compute() 
{
  let text = document.getElementById('text');
  let weight = document.getElementsByName("weight");
  let cost = document.getElementsByName("item");
  //let cost = cost.value;


  
  if (!Number(weight.value) || Number(weight.value) <= 0)
  {
    alert("Вес введен некорректно");
    return false;
  }
  
  text.innerHTML =  String(result + weight.value * cost.value) + "руб";
  return false;
}

button.onclick = nulify() 
{
  result.innerHTML = 0;
  return false;
}
