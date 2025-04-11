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
    p.image(bunnyImage, 0, 0);
}
