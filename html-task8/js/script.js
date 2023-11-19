function save() {
    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('number', document.getElementById('number').value);
    localStorage.setItem('organization', document.getElementById('organization').value);
    localStorage.setItem('text', document.getElementById('text').value);
}

function restore() {
    document.getElementById('name').value = localStorage.getItem('name');
    document.getElementById('email').value = localStorage.getItem('email');
    document.getElementById('number').value = localStorage.getItem('number');
    document.getElementById('organization').value = localStorage.getItem('organization');
    document.getElementById('text').value = localStorage.getItem('text');
}

 document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button");
    let popup = document.getElementById("popup");
    let form = document.getElementById("form");
    let input8 = document.querySelectorAll("input");

    button.addEventListener("click", () => {
      document.getElementById("form").style.display = "block";
      history.pushState({"show_form": true}, "show_form", "?show_form=true")
    });

    input8.forEach((input) => {
      input8.addEventListener("input", () => {
      save();
      console.log("Saved")
      ;})
    })

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      var slapform = new Slapform();
      slapform.submit({
        form: 'IImVjABbg',
        data: {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          number: document.getElementById('number').value,
          organization: document.getElementById('organization').value,
          text: document.getElementById('text').value
      })
      .then(function (response) {
        console.log('Success', response)
      })
      .catch(function (e) {
        console.error('Fail', e)
      })
    });
    window.addEventListener("popstate", () => {
      popup.style.display = "none";
    })
    res();
});
