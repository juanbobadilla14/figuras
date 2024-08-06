pelotica1 = null;
pelotica2 = null;
pelotica3 = null;
canvas = null;
cyx = null
gravedad = 0,5;


window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = this.canvas.getContext("2d");
    pelotica1 = new Pelota();
    pelotica2 = new Pelota();
    pelotica3 = new Pelota();
    animar();
}

function animar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pelotica1.dibujar(ctx);
    pelotica2.dibujar(ctx);
    pelotica3.dibujar(ctx);
    pelotica1.actualizar(gravedad);
    pelotica2.actualizar(gravedad);
    pelotica3.actualizar(gravedad);
    requestAnimationFrame(animar);
}


