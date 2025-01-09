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

        //on clicking the point
        for (let i = this.model.start; i <= this.model.end; i + 30) {
            const clickNumber = i;
            console.log(clickNumber);
            const d = dist(mouseX, mouseY, clickNumber, this.model.pointY);
            if (d < this.model.snappingRange)
                this.model.pointX = clickNumber + 30;
        }

        if (this.dragged) {
            if (this.model.pointX <= 350) {
                this.view.xV == this.model.pointX + 200;
            }
            else if (this.pointX <= 650) {
                this.view.xH == this.model.pointX + 200;
            }
        }

    }

    handleMouseDragged(mouseX) {
        if (this.dragged) {
            this.model.pointX = constrain(mouseX, this.model.start, this.model.end);
        }
    }

    handleMouseReleased() {
        this.dragged = false;
    }

    updateAndDraw() {
        view.display();
        view.displayLine();
        view.displayPoint();
    }
}