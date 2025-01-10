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

        // console.log(this.model.pointX);
        //on clicking the point
        // for (let i = this.model.start; i <= this.model.end; i + 30) {
        //     const clickNumber = i;
        //     console.log(clickNumber);
        //     const d = dist(mouseX, mouseY, clickNumber, this.model.pointY);
        //     if (d < this.model.snappingRange)
        //         this.model.pointX = clickNumber + 30;
        // }

    }

 moveBoxes() {
        if (this.dragged) {
            if (this.model.pointX <= 325) {
                this.view.num1 = map(this.model.pointX, this.model.start, this.model.end - 300, this.model.start, this.model.end);
              //  this.view.num1 = lerp(this.view.num1, this.model.end, 0.05);
                //console.log(this.view.num1);
            }
            else if (this.model.pointX >= 350 && this.model.pointX <= 650) {
                this.view.num2 = this.model.pointX - 350;
               // this.view.num2 = lerp(this.view.num2, this.model.end, 0.05);

            }
        }
    }

    handleMouseDragged(mouseX) {
        if (this.dragged) {
            this.model.pointX = floor(constrain(mouseX, this.model.start, this.model.end));
        }
    }

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