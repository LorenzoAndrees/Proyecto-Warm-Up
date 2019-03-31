// start se ejecuta en el evento onload del navegador
//window.onload = resultado();
let loadingTx = document.getElementById('loading');
loadingTx.style.display = 'none';

var button = document.getElementById("resultado");
button.onclick = function() {
    var jb = document.getElementById("JB").Value;
    console.log(jb);
    if (jb != undefined){
        loadingTx.style.display = 'block';
        setTimeout(() => {
            loadingTx.style.display = 'none';
        }, 3050);
        return false;
    }
        
}