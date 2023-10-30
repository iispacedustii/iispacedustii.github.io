/*<section class="service_calculator">
                <h1>Калькулятор услуги</h1>
                <div class="prices_info">
                    <ul>
                        <li>Бургер - 300 рублей</li>
                        <li>Шаурма - 200 рублей (сырный лаваш +50 рублей)</li>
                        <li>Картофель фри - 100 рублей (посыпать солью +20 рублей)</li>
                    </ul>
                </div>
                <div class="calculator">
                    <label for="amount_service">Количество:</label>
                    <input id="amount_service" type="text">
                    <ul class="service_choice">
                        <li><input name="r" class="radio-choice" type="radio" value="Бургер">Бургер</li>
                        <li><input name="r" class="radio-choice" type="radio" value="Шаурма">Шаурма</li>
                        <li><input name="r" class="radio-choice" type="radio" value="Картофель фри">Картофель фри</li>
                    </ul>
                    <div id="add">
                        <label for="additional">Лаваш:</label>
                        <select name="additional" id="additional">
                            <option value="Обычный лаваш" selected>Обычный</option>
                            <option value="Сырный лаваш">Сырный</option>
                        </select>
                    </div>
                    <div id="check">
                        <label id="check_label" value="Посыпать солью">Посыпать солью.</label>
                        <input type="checkbox" id="checkbox">
                    </div>
                    <div id="result_service">
                        0
                    </div>
                </div>
            </section>*/

const additional_prices = {
    "Сырный лаваш": 50,
    "Обычный лаваш": 0
};

const salt_price = {
    "true": 20,
    "false": 0
};

function updatePrice() {
    let VALUE = 0;
    let radios = document.getElementsByName("r");
    let radio_val = "Бургер";

    radios.forEach((radio) => {
        if(radio.checked) {
            radio_val = radio.value;
            let radio_price = food_prices[radio.value];

            if (radio_price !== undefined) {
                VALUE += radio_price;
            }
        }
    });

    let sel = document.getElementById("add");
    sel.style.display = (radio_val == "Шаурма") ? "block" : "none";
    let selection = document.getElementById("additional");

    VALUE += additional_prices[selection.value];

    let check = document.getElementById("check");
    check.style.display = (radio_val == "Картофель фри" ? "block" : "none");

    document.getElementById("checkbox").checked ? VALUE += 20 : null; 

    let input = document.getElementById("amount_service");
    (input.value !== undefined) ?
        /^[0-9]+$/.test(input.value) ? VALUE *= Number(input.value) : null : null;

    document.getElementById("result_service").innerHTML = `${VALUE} Рублей`;
}

function reset() {
    document.getElementById("additional").value = "Обычный лаваш";
    document.getElementById("checkbox").checked = false;
}

document.addEventListener("DOMContentLoaded", (event) => {
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
});
