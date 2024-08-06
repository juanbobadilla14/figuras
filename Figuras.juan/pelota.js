/**
 * clase pelota, para la animacion
 * 
 */
class Pelota {
    constructor() {
        this.colores = [
            `AliceBlue`,`AntiqueWhite`,`Aqua`,`Aquamarine`,`Azure`,`Beige`,`Bisque`,`Black`,
            `BlanchedAlmond`,`Blue`,`BlueViolet`,`Brown`,`BurlyWood`,`CadetBlue`,`Chartreuse`,`Chocolate`, `Gold`,`GoldenRod`,`Gray`, `Grey`,`Green`,
            `GreenYellow`, `HoneyDew`, `HotPink`,`IndianRed`,`Indigo`,`Ivory`,`Khaki`,`Lavender`,`LavenderBlush`,`LawnGreen`,`LemonChiffon`,
        ]

        this.radio = this.getRandomInt(10, 50);
        this.centro = { x: this.getRandomInt(this.radio, canvas.width - this.radio), y: this.getRandomInt(this.radio, canvas.height - this.radio) };
        this.direccion = { x: this.getRandomInt(-10, 10), y: this.getRandomInt(-10, 10) };
        this.colorFondo = this.colores[this.getRandomInt(0, this.colores.length)];
        this.colorBorde = this.colores[this.getRandomInt(0, this.colores.length)];
        }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    

    dibujar(ctx) {
        ctx.beginPath();
        ctx.lineWidh = 3;
        ctx.arc(this.centro.x, this.centro.y, this.radio, 0, 2 * Math.PI);
        ctx.strokeStyle = this.colorBorde;
        ctx.fillStyle = this.colorFondo;
        ctx.fill();
        ctx.stroke();
    }

    actualizar(gravedad) {
        this.direccion.y += gravedad;
        this.centro.x += this.direccion.x;
        this.centro.y += this.direccion.y;
        if (this.centro.x < this.radio || this.centro.x + this.radio > canvas.width) {
            this.centro.x -= this.direccion.x;
            this.direccion.x = -this.direccion.x;
        }
        if (this.centro.y < this.radio || this.centro.y + this.radio > canvas.height) {
            this.centro.y -= this.direccion.y;
            this.direccion.y = -this.direccion.y;
        }
        
    }

}