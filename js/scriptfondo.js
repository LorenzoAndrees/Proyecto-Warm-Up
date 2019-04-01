// start se ejecuta en el evento onload del navegador
window.onload = start();

function start() {
    let loadingEl = document.getElementById('loader');
    let result = document.getElementById('result');
    result.style.display = 'none';
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
            break;
        case 'cuprum':
            rmef = 2;
            break;
        case 'habitat':
            rmef = 3;
            break;
        case 'modelo':
            rmef = 1.059;
            break;
        case 'plan vital':
            rmef = 5;
            break;
        case 'provida':
            rmef = 6;
            break;
        default:
            rmef = 0.1
            break;
    }
    const funds = getFunds({sip, sx, edad, rmef, vfh});
    sessionStorage.setItem('vTotal',funds);
    const jub = getJub(funds, sx).toFixed(0);
    showInfo({funds, jub});
}

function getFunds(data) {
    data.vfh = parseInt(data.vfh);
    var vTotal = 0;
    let cotizacion = parseInt(data.sip * 0.1);
    const sexo = data.sx.toLowerCase();
    let old = sexo === 'm' ? 65 : 60;
    for (i = data.edad; i < old; i++) {
        for(j = 0; j<12; j++){
            vTotal += cotizacion;
        }
        vTotal *= data.rmef;
    }
    vTotal += data.vfh;
    return parseInt(vTotal);
}

function getJub(vTotal, sexo){
    if (sexo === 'm'){
        return (vTotal/12)/20;
    } else {
        return (vTotal/12)/15;
    }
}

function showInfo(data){
    const fundsEl = document.getElementById('funds');
    const jubEl = document.getElementById('jub');

    fundsEl.innerHTML = '$ ' + formatNumber(data.funds);
    jubEl.innerHTML = '$ ' + formatNumber(data.jub);

}

function formatNumber(num) {
    if (!num || num == 'NaN') return '-';
    if (num == 'Infinity') return '&#x221e;';
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
        num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num);
}