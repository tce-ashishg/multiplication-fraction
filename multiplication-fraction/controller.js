//Controller

class FractionController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.dragged = false;
    }

    handleMousePressed(mouseX, mouseY) {
        const d = dist(mouseX, mouseY, this.model.pointX, this.model.pointY);
        if (d < this.model.snappingRange) {
            this.dragged = true;
        }
    }

    moveBoxes(mouseX) {
        if (this.dragged) {
            this.model.pointX = floor(constrain(mouseX, this.model.start, this.model.end));
            if (this.model.pointX <= 350) {
                this.view.num1 = floor(map(this.model.pointX, this.model.start, this.model.end - 300, this.model.start, this.model.end)) - 50;
                console.log("num1"+this.view.num1);
            }
            else if (this.model.pointX > 350 && this.model.pointX <= 650) {
                this.view.num2 = floor(this.model.pointX - 350);
                console.log("num2"+this.view.num2);

            }
        }
    }

    // handleMouseDragged(mouseX) {
    //     if (this.dragged) {
    //         this.model.pointX = floor(constrain(mouseX, this.model.start, this.model.end));
    //     }
    // }

    handleMouseReleased() {
        this.dragged = false;
    }

    updateAndDraw() {
        background(255);
        view.displayFraction();
        view.display();
        view.displaySliderLine();
        view.displayPoint();
    }
}