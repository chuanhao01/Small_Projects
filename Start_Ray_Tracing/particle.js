class Particle{
    constructor(){
        this.pos = createVector(width/2, height/2);
        this.rays = [];
        this.heading = 0;
        for(let i= -Math.floor(fov/2); i<=Math.floor(fov/2); i+=1){
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
    rotate(angle){
        this.heading += angle;
        for(let ray of this.rays){
            ray.setAngle(ray.angle + this.heading);
        }
        console.log(this.rays);
    }
    updatePos(x, y){
        this.pos.x = x;
        this.pos.y = y;
    }
    look(walls){
        let scene = [];
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
                stroke(255, 100);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
            scene.push(shorest_distance);
        }
        return scene;
    }
}