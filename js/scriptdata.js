function definirDatos() {
    sessionStorage.setItem('Edad', document.getElementById('Edad').value);
    sessionStorage.setItem('ValorT', document.getElementById('ValorT').value);
    sessionStorage.setItem('MontodeCV', document.getElementById('MCV').value);
    sessionStorage.setItem('SIP', document.getElementById('SIP').value);
    sessionStorage.setItem('AFP', document.getElementById('AFP').value);
    sessionStorage.setItem('Sex', document.getElementsByName('sex').value);

}