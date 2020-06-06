class Boundary{
    /**
     * 
     * @param {int} x1 x pos of vec a
     * @param {int} y1 y pos of vec a
     * @param {int} x2 x pos of vec b
     * @param {int} y2 y pos of vec b
     */
    constructor(x1, y1, x2, y2){
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
    }
    show(){
        stroke(255);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
}