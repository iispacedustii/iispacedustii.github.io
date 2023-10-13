button.onclick = function() 
{
  let f1 = document.getElementsByName("cost");
  let f2 = document.getElementsByName("count");
  let r = document.getElementById("result");
  
  if (!Number(f1[0].value) && !Number(f2[0].value)) 
  {
    alert("Поле 1 и 2 не являются числами");
    r.innerHtML = none;
    return false;
  }
  if (!Number(f1[0].value)) 
  {
    alert("Поле 1 не является числом");
    r.innerHtML = none;
    return false;
  }
  if (!Number(f2[0].value)) 
  {
    alert("Поле 2 не является числом");
    r.innerHtML = none;
    return false;
  }
  if (f1[0].value < 0 && f2[0].value < 0) 
  {
    alert("Поля 1 и 2 не могут быть отрицательными числами!!!");
    r.innerHtML = none;
    return false;
  }
  if (f1[0].value < 0) 
  {
    alert("Поле 1 не не может быть отрицательным!");
    r.innerHtML = none;
    return false;
  }
  if (f2[0].value < 0) 
  {
    alert("Поле 2 не может быть отрицательным!");
    r.innerHtML = none;
    return false;
  }
  
  r.innerHTML = f1[0].value * f2[0].value;
  return false;
}
