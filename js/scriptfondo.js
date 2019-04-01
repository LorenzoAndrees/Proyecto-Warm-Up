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
    calcular();
}

function calcular() {
    const edad = sessionStorage.getItem('Edad');
    const vfh = sessionStorage.getItem('ValorT');
    const sip = sessionStorage.getItem('SIP');
    let afp = sessionStorage.getItem('AFP');
    const sx = sessionStorage.getItem('Sex');
    let rmef;
    afp = afp.toLowerCase();
    switch(afp){
        case 'capital':
            rmef = 1;
        case 'cuprum':
            rmef = 2;
        case 'habitat':
            rmef = 3;
        case 'modelo':
            rmef = 4;
        case 'plan vital':
            rmef = 5;
        case 'provida':
            rmef = 6;
        default:
            rmef = 0.1
    }
    const funds = getFunds({sip, sx, edad, rmef, vfh});
    const jub = getJub(funds, sx).toFixed(0);
    showInfo({funds, jub});
}

function getFunds(data) {
    let vTotal = 0;
    let cotizacion = data.sip * 0.1;
    const sexo = data.sx.toLowerCase();
    let old = sexo === 'm' ? 65 : 60;

    for (let i = data.edad; i < old; i++) {
        for(let j = 0; i<12; i++){
            vTotal += cotizacion;
        }
        vTotal *= data.rmef;
    }

    vTotal += data.vfh;
    return vTotal;
}

function getJub(vTotal, sexo){
    if (sexo === 'm'){
        return (vTotal/12)/20
    } else {
        return (vTotal/12)/15;
    }
}

function showInfo(data){
    const fundsEl = document.getElementById('funds');
    const jubEl = document.getElementById('jub');

    fundsEl.innerHTML = '$' + data.funds;
    jubEl.innerHTML = '$' + data.jub;

}