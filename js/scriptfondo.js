// start se ejecuta en el evento onload del navegador
window.onload = start();

function start() {
    let loadingEl = document.getElementById('loader');
    let result = document.getElementById('result');
    // setTimeout(function(), time)
    setTimeout(() => {
        loadingEl.style.display = 'none';
        result.style.display = 'block';
    }, 3050);
}

function calcular() {
    const edad = sessionStorage.getItem('Edad');
    const VFH = sessionStorage.getItem('ValorT');
    const SIP = sessionStorage.getItem('SIP');
    const AFP = sessionStorage.getItem('AFP');
    const sexo = sessionStorage.getItem('Sex');
    if (sexo == 'h') {
        var At = 65 - edad;
        var Coto = 0.1;
        var Cotv = 0;

        if (AFP == 'Capital' || AFP == 'capital') {
            var CMF = undefined;
            var RMEF = undefined;

        }
        if (AFP == 'Cuprum' || AFP == 'cuprum') {

        }
        if (AFP == 'Habitat' || AFP == 'habitat') {

        }
        if (AFP == 'Modelo' || AFP == 'modelo') {

        }
        if (AFP == 'Plan Vital' || AFP == 'Plan vital' || AFP == 'plan vital' || AFP == 'plan Vital') {

        }
        if (AFP == 'Provida' || AFP == 'provida') {

        }
    } else if (sexo == 'm') {
        var At = 60 - edad;
        var Coto = 0.1;
        var TiempoJ;

        if (AFP == 'Capital' || AFP == 'capital') {
            var CMF = 0.0144;
            var RMEF = 0.0360;
        }
        if (AFP == 'Cuprum' || AFP == 'cuprum') {
            var CMF = 0.0144;
            var RMEF = 0.0369;
        }
        if (AFP == 'Habitat' || AFP == 'habitat') {
            var CMF = 0.0127;
            var RMEF = 0.0396;
        }
        if (AFP == 'Modelo' || AFP == 'modelo') {
            var CMF = 0.0077;
            var RMEF = 0.0347;
        }
        if (AFP == 'Plan Vital' || AFP == 'Plan vital' || AFP == 'plan vital' || AFP == 'plan Vital') {
            var CMF = 0.0116;
            var RMEF = 0.0307;
        }
        if (AFP == 'Provida' || AFP == 'provida') {
            var CMF = 0.0145;
            var RMEF = 0.0332;
        }

    }

}