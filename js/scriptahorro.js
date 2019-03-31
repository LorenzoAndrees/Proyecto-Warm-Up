// start se ejecuta en el evento onload del navegador
window.onload = start();

function start(){
    let loadingEl = document.getElementById('loader');
    let loadingTx = document.getElementById('loading');
    // setTimeout(function(), time)
    setTimeout(() => {
        loadingEl.style.display = 'none';
        loadingTx.style.display = 'none';
    },3050);
}

function resultado(){
    document.getElementById("resultado").click();
}