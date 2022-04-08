
let totalHeight = document.body.offsetHeight - window.innerHeight ;

function progressBar() {
    let scrollY = window.scrollY;
    let ancho = (scrollY * 100) / (totalHeight + 30);

    document.getElementById("progress").style.width = ancho + "%";
}

window.addEventListener('scroll', progressBar)
