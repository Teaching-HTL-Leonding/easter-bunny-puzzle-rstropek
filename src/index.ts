import p5 from "p5";

let bunnyImage: p5.Image;

const p = new p5((sketch) => {
    sketch.preload = preload;
    sketch.setup = setup;
    sketch.draw = draw;
});

function preload() {
    bunnyImage = p.loadImage("assets/bunny.png");
}

function setup() {
    p.createCanvas(500, 500);
}

function draw() {
    p.background("white");
    p.stroke("white");
    p.noFill();
    p.strokeWeight(2);

    // ZEILE 1
    p.image(bunnyImage, 0, 0, 100, 100, 0, 0, 100, 100);
    p.rect(0, 0, 100, 100);

    p.image(bunnyImage, 100, 0, 100, 100, 100, 0, 100, 100);
    p.rect(100, 0, 100, 100);

    p.image(bunnyImage, 200, 0, 100, 100, 200, 0, 100, 100);
    p.rect(200, 0, 100, 100);

    p.image(bunnyImage, 300, 0, 100, 100, 300, 0, 100, 100);
    p.rect(300, 0, 100, 100);

    // ZEILE 2
    p.image(bunnyImage, 0, 100, 100, 100, 0, 100, 100, 100);
    p.rect(0, 100, 100, 100);

    p.image(bunnyImage, 100, 100, 100, 100, 100, 100, 100, 100);
    p.rect(100, 100, 100, 100);

    p.image(bunnyImage, 200, 100, 100, 100, 200, 100, 100, 100);
    p.rect(200, 100, 100, 100);

    p.image(bunnyImage, 300, 100, 100, 100, 300, 100, 100, 100);
    p.rect(300, 100, 100, 100);
}
