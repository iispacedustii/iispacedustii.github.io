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


        <script src="https://cdn.jsdelivr.net/npm/slapform@latest/dist/index.min.js"></script>
<script type="text/javascript">
var slapform = new Slapform();
slapform.submit({
form: 'IImVjABbg',
data: {
name: 'Jon Snow',
message: 'Hello World!',
}
})
.then(function (response) {
console.log('Success', response)
})
.catch(function (e) {
console.error('Fail', e)
})
</script>

 
