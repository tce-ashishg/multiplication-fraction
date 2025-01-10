
//Sketch

let model;
let view;
let controller;
let denominator1;
let denominator2;
let numerator1;
let numerator2;


function setup() {
    createCanvas(900, 500);

    // const newFraction = document.getElementById("newFraction");
    // newFraction.addEventListener("click", () => {
    //     generateNumber();
    //     model = new FractionModel(numerator1, denominator1, numerator2, denominator2, width, height);
    //     view = new FractionView(model);
    //     controller = new FractionController(model, view);
    //     this.model.pointX = this.model.start;
    // });

    button = createButton('New Fraction');
    button.position(width - 100, 430); // Position at the end of the slider
    button.addClass('custom-button');
    button.mousePressed(() => {
      generateNumber();
      model = new FractionModel(numerator1, denominator1, numerator2, denominator2, width, height);
      view = new FractionView(model);
      controller = new FractionController(model, view);
    });

    generateNumber();

    model = new FractionModel(numerator1, denominator1, numerator2, denominator2, width, height);
    view = new FractionView(model);
    controller = new FractionController(model, view);

   

}

function draw() {
    controller.updateAndDraw();
    textSize(16);
    fill(0);
    text('Slide to explore', model.start + 50, model.pointY - 50);
}

function mousePressed() {
    controller.handleMousePressed(mouseX, mouseY);
}

function mouseDragged() {
  //  controller.handleMouseDragged(mouseX);
    controller.moveBoxes(mouseX);

}

function mouseReleased() {
    controller.handleMouseReleased();
}

function generateNumber() {
    denominator1 = floor(random(2, 10));
    numerator1 = floor(random(1, denominator1));
    denominator2 = floor(random(2, 10));
    numerator2 = floor(random(1, denominator2));
}