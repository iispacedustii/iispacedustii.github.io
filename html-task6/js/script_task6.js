function updatePrice() {
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

    document.getElementById("result_service").innerHTML = ${VALUE} + "руб.";
}

function reset() {
    document.getElementById("type-select").value = 0;
    document.getElementById("checkbox").checked = false;
}

/*document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    reset();
    let radios = document.getElementsByName("r");

    let additionals = document.getElementById("add");
    let additional_select = document.getElementById("additional");
    let check = document.getElementById("check");
    let input = document.getElementById("amount_service");

    additional_select.value="Обычный лаваш";

    additionals.style.display = "none";
    check.style.display = "none";

    input.addEventListener("input", () => {
        updatePrice();
    })

    additional_select.addEventListener("change", (event) => {
        updatePrice();
    });

    radios.forEach((radio) => {
        radio.checked = false;
        radio.addEventListener("change", (event) => {
            reset();
            updatePrice();
        })
    });

    document.getElementById("checkbox").addEventListener("change", (event) => {
        updatePrice();
    });
});*/
