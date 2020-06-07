let walls = [];
let particle;
const sceneW = 400, sceneH = 400;

function setup(){
    createCanvas(800, 400);
    for(let i=0; i<5; i++){
        const x1 = random(sceneW);
        const x2 = random(sceneW);
        const y1 = random(sceneH);
        const y2 = random(sceneH);
        walls.push(new Boundary(x1, x2, y1, y2));
    }
    wall = new Boundary(300, 100, 100, 300);
    particle = new Particle();
}

function draw(){
    background(0);
    particle.updatePos(mouseX, mouseY);
    particle.show();
    particle.look(walls);
    for(let wall of walls){
        wall.show();
    }

    line(sceneW, 0, sceneW, sceneH);

    // let pt = ray.cast(wall);
    // if(pt){
    //     fill(255);
    //     ellipse(pt.x, pt.y, 8, 8);
    // }
}