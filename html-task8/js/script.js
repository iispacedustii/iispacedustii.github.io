function save() {
    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('number', document.getElementById('number').value);
    localStorage.setItem('org', document.getElementById('org').value);
    localStorage.setItem('text', document.getElementById('text').value);
}

function restore() {
    document.getElementById('name').value = localStorage.getItem('name');
    document.getElementById('email').value = localStorage.getItem('email');
    document.getElementById('number').value = localStorage.getItem('number');
    document.getElementById('org').value = localStorage.getItem('org');
    document.getElementById('text').value = localStorage.getItem('text');
}


document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button");
    let input8 = document.querySelectorAll("input");
    let popup = document.getElementById("popup");
    popup.style.display = "none";
  
    button.addEventListener("click", () => {
        popup.style.display = "block";
        history.pushState({"show_form": true}, "show_form", "?show_form=true")
    });

    input8.forEach((input) => {
        input8.addEventListener("input", () => {
            save();
        })
    })

    let form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        fetch(" ", {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(
                {
                    fullname: document.getElementById('fullname').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    organization: document.getElementById('organization').value,
                    message: document.getElementById('message').value,
                }
            )
        })
        .then((response) => {
            if(response.ok) {
                alert("Форма отправлена успешно!");
                form.reset();
                localStorage.clear();
            } else {
                throw new Error('Ошибка при отправке формы.');
            }
        })
        .catch((err) => {
            alert(err);
        })

        history.back();
    });

    window.addEventListener("popstate", () => {
        popup.style.display = "none";
    })


    restoreFormValues();
});
