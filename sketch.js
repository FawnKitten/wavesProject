//let instance = 0;
let x = 0;
let freq = 2;
let freq2 = 1;
let ampl = 20;
let ampl2 = 20;
let frame = 0;
//let time = 0;
//let elapsed = 0;

function setup() {
    createCanvas(314, 314);
    background(0);
}

function draw() {
    background(0);
    fill(0);

    if (frame % 15 == 0) { 
        console.log(frame); 
        freq++; 
        console.log(freq); 
    } if (frame % 30 == 0) {
        console.log(frame); 
        freq2++; 
        console.log(freq2); 
    }
    
    frame++;

    // rendering the wave
    strokeWeight(3);
    for (let time = 0; time < 314 ; time += 0.1) {
        let y2 = -2 * sin(time / freq) * ampl2; 
        let y =   2 * sin(time / freq2) * ampl; 
        //wave 1
        stroke(0, 255, 0);
        point(time, y + 150);
        // wave 2
        stroke(0, 255, 255);
        point(time, y2 + 150);
         //wave 3
        stroke(255, 0, 0); 
        point(time, y + y2 + 150); 
    }

    frame += 1;
}


