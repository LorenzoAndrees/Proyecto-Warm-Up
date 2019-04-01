function definirDatos() {
    const form = document.getElementById('formulario');
    const edad = form[0].value;
    const valorT = form[1].value;
    const sip = form[2].value;
    const afp = form[3].value;
    const sex = form[4].value;
    sessionStorage.setItem('Edad', edad);
    sessionStorage.setItem('ValorT', valorT);
    sessionStorage.setItem('SIP', sip);
    sessionStorage.setItem('AFP', afp);
    sessionStorage.setItem('Sex', sex);
}

window.onload = start

function start(){

    let btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.addEventListener('click', function(e){
        console.log('Submit');
        definirDatos();
    });

}