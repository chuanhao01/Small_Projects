let walls = [];
let particle;
const sceneW = 400, sceneH = 400;
const fov = 60;

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

    if(keyIsDown(LEFT_ARROW)){
        particle.rotate(-0.01);
    }
    if(keyIsDown(RIGHT_ARROW)){
        particle.rotate(0.01);
    }
    // if(keyIsDown(LEFT_ARROW)){
    //     particle.rotate(-0.1);
    // }
    // if(keyIsDown(LEFT_ARROW)){
    //     particle.rotate(-0.1);
    // }

    particle.updatePos(mouseX, mouseY);
    particle.show();

    // Drawing the rects for the fps
    const scene = particle.look(walls);
    push();
    translate(sceneW, 0);
    const w = sceneW / scene.length;
    for(let i=0; i<scene.length; i++){
        noStroke();
        const brightness = map(scene[i], 0, sceneW, 255, 0);
        const height = map(scene[i], 0, sceneW, sceneH, 0)
        fill(brightness);
        rectMode(CENTER);
        rect(i * w + w / 2, sceneH / 2, w, height);
    }
    pop();

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