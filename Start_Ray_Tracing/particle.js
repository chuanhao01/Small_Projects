class Particle{
    constructor(){
        this.pos = createVector(width/2, height/2);
        this.rays = [];
        for(let i=0; i<=360; i+=10){
            this.rays.push(new Ray(this.pos, radians(i)));
        }
    }
    show(){
        fill(255);
        ellipse(this.pos.x, this.pos.y, 8, 8);
        for(let ray of this.rays){
            ray.show();
        }
    }
    updatePos(x, y){
        this.pos.x = x;
        this.pos.y = y;
    }
    look(walls){
        for(let ray of this.rays){
            let shorest_distance = Infinity, closest = null;
            for(let wall of walls){
                const pt = ray.cast(wall);
                if(pt){
                    let d = p5.Vector.dist(this.pos, pt);
                    if(d < shorest_distance){
                        shorest_distance = d;
                        closest = pt;
                    }
                }
            }
            if(closest){
                stroke(255);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }
}