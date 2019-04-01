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
    const vfh = sessionStorage.getItem('ValorT');
    const sip = sessionStorage.getItem('SIP');
    const afp = sessionStorage.getItem('AFP');
    const SX = sessionStorage.getItem('Sex');
    if (afp == 'Capital' || afp == 'capital') {
        var rmef = undefined;
    }
    if (afp == 'Cuprum' || afp == 'cuprum') {
        var rmef = undefined;
    }
    if (afp == 'Habitat' || afp == 'habitat') {
        var rmef = undefined;
    }
    if (afp == 'Modelo' || afp == 'modelo') {
        var rmef = undefined;
    }   
    if (afp == 'Plan Vital' || afp == 'Plan vital' || afp == 'plan vital' || afp == 'plan Vital') {
        var rmef = undefined;
    }
    if (afp == 'Provida' || afp == 'provida') {
        var rmef = undefined;
    }

}