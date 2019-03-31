// start se ejecuta en el evento onload del navegador
//window.onload = resultado();
var button = document.getElementById("resultado");
console.log(button);
let loadingTx = document.getElementById('loading');
loadingTx.style.display = 'none';
button.onclick = function(e) {
    e.preventDefault();
    let loadingTx = document.getElementById('loading');
    var jb = document.getElementById("JB").value;
    console.log(jb);
    if (jb != undefined){
        loadingTx.style.display = 'block';
        setTimeout(() => {
            loadingTx.style.display = 'none';
        }, 3050);
    }
        
}