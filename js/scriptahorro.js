// start se ejecuta en el evento onload del navegador
window.onload = start

function start() {
    let loadingTx = document.getElementById('loading');
    let loadingData = document.getElementById('result');
    loadingData.style.display = 'none';
    loadingTx.style.display = 'none';
    let button = document.getElementById('calculate');
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const jub = document.getElementById('JB').value;
        if(jub != ''){
            calcularAPV(jub);
        }
    });
}

function calcularAPV(jub) {
    let loadingTx = document.getElementById('loading');
    let loadingData = document.getElementById('result');
    loadingTx.style.display = 'block';
    loadingData.style.display = 'none';
    setTimeout(() => {
        loadingTx.style.display = 'none';
        loadingData.style.display = 'block';
    }, 3050);
    const sx = sessionStorage.getItem('Sex');
    const vfh = parseInt(sessionStorage.getItem('ValorT'));
    const edad = parseInt(sessionStorage.getItem('Edad'));
    const vTotal = sessionStorage.getItem('vTotal');
    const sip = sessionStorage.getItem('SIP');
    let afp = sessionStorage.getItem('AFP');
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
    const apv = parseInt(getapv({jub,sx,vfh,edad,vTotal}));
    const apv2 = parseInt(getapv2({sip,jub,sx,vfh,edad,vTotal}));
    showInfo({apv,apv2});
}
function getapv(data){
    const sexo = data.sx.toLowerCase();
    if (sexo === 'm'){
        trabajo = 65-data.edad;
        vTotalRel = data.jub*12*20;
        if(vTotalRel <= data.vTotal-data.vfh){
            return 0;
        }
        apv = (vTotalRel-data.vTotal-data.vfh)/(12*trabajo);
        return apv;
    }
    else{
        trabajo = 60-data.edad;
        vTotalRel = data.jub*12*15;
        if(vTotalRel <= data.vTotal-data.vfh){
            return 0;
        }
        apv = (vTotalRel-data.vTotal-data.vfh)/(12*trabajo);
        return apv;
    }
}
function getapv2(data){
    const sexo = data.sx.toLowerCase();
    if (sexo === 'm'){
        trabajo = 65-data.edad;
        montocot= data.sip*0.1*trabajo;
        vTotalRel = data.jub*12*20;
        if(vTotalRel <= montocot-data.vfh){
            return 0;
        }
        apv2 = (vTotalRel-montocot-data.vfh)/(12*trabajo);
        return apv2;
    }
    else{
        trabajo = 60-data.edad;
        montocot= data.sip*0.1*trabajo;
        montorent= data.vTotal-montocot;
        vTotalRel = data.jub*12*15;
        if(vTotalRel <= montocot-data.vfh){
            return 0;
        }
        apv2 = (vTotalRel-montocot-data.vfh)/(12*trabajo);
        return apv2;
    }
}

function showInfo(data){
    const apvmes = document.getElementById('apv');
    const apvmes2 = document.getElementById('apv2');
    apvmes.innerHTML = '$ ' + formatNumber(data.apv);
    apvmes2.innerHTML = '$ ' + formatNumber(data.apv2);

}
function formatNumber(num) {
    if (num == 0) return 0;
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