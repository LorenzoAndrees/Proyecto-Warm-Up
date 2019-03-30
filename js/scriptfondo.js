// start se ejecuta en el evento onload del navegador
window.onload = start();

function start(){
    let loadingEl = document.getElementById('loader');
    // setTimeout(function(), time)
    setTimeout(() => {
        loadingEl.style.display = 'none';
    },3050);
}