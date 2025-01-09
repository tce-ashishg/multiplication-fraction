//fraction-view

class FractionView{

    constructor(model){
        this.model = model;
        this.w  =200;
        this.h = 200;
        this.xV = 50;
        this.xH = 350;
        this.x = 50;
        this.y = 100;
    }

    display(){
        background(255);

        let result = this.model.calculateResult();

        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(`${this.model.numerator1}`, 150, 50);
        text(`${this.model.denominator1}`, 150, 75);

        text(`${this.model.numerator2}`, 450, 50);
        text(`${this.model.denominator2}`, 450, 75);

        text(`${result.numerator}`, 750, 50);
        text(`${result.denominator}`, 750, 75);

        stroke(0);
        strokeWeight(2);
        line(140, 62, 160, 62);
        line(440, 62, 460, 62);
        line(740, 62, 760, 62);


        noStroke()
        fill(0);
        textSize(20);
        text('X', 300, 60);

        noStroke()
        fill(0);
        textSize(30);
        text('=', 600, 60);


        //draw vertical rect

        this.drawVerticalFraction(this.xV+20, this.y, this.w, this.h, this.model.numerator1, this.model.denominator1, color(100, 150, 255));
        this.drawVerticalFraction(this.x, this.y, this.w, this.h, this.model.numerator1, this.model.denominator1, color(100, 150, 255));


        this.x = 350;
        this.drawHorizontalFraction(this.xH, this.y, this.w, this.h, this.model.numerator2, this.model.denominator2, color(244, 100, 150));
        this.drawHorizontalFraction(this.x, this.y, this.w, this.h, this.model.numerator2, this.model.denominator2, color(244, 100, 150));

        this.x = 650;
        this.drawResultFraction(this.x, this.y, this.w, this.h, result.numerator, result.denominator, color(150, 100, 255));
    
    }

    drawVerticalFraction(x, y, w,h, numerator, denominator, c){

        stroke(0);
        noFill();
        rect(x, y, w, h);
        let sectionWidth = w/denominator;
        for(let i=0; i<denominator; i++){
            if(i<numerator){
                fill(c);
            }
            else{
                noFill();
            }
            rect(x + i*sectionWidth, y, sectionWidth, h);
        }

        noStroke()
        fill(0);
        textSize(32);
        text('X', 300, 200);
    }

    drawHorizontalFraction(x, y, w, h, numerator, denominator, c){
        stroke(0);
        noFill();
        rect(x, y, w, h);
        let sectionHeight = h/denominator;
        for(let i=0; i<denominator; i++){
            let offset = y + h - (i + 1) * sectionHeight;
            if(i<numerator){
                fill(c);
            }
            else{
                noFill();
            }
            rect(x , offset, w, sectionHeight);
        }
        noStroke()
        fill(0);
        textSize(40);
        text('=', 600, 200);
    }

    drawResultFraction(x, y, w, h, numerator, denominator, c) {
        stroke(0);
        noFill();
        rect(x, y, w, h);
        let sectionWidth = w / this.model.denominator1;
        let sectionHeight = h / this.model.denominator2;
        for (let j = this.model.denominator2 - 1; j >= 0; j--) {
          for (let i = 0; i < this.model.denominator1; i++) {
            let xOffset = x + i * sectionWidth;
            let yOffset = y + (this.model.denominator2 - j - 1) * sectionHeight; // Fill from bottom
            if (i < this.model.numerator1 && j < this.model.numerator2) {
              fill(c);
            } else {
              noFill();
            }
            rect(xOffset, yOffset, sectionWidth, sectionHeight);
          }
        }
      }


      displayLine(){
        stroke(10, 10, 255);
        strokeWeight(5);
        line(this.model.start, this.model.pointY, this.model.end, this.model.pointY, 10);
      }

      displayPoint(){
        fill(10, 10, 255);
        stroke(0);
        strokeWeight(1);
        ellipse(this.model.pointX, this.model.pointY, 20);
    
        fill(100, 149, 237, 1);
        ellipse(this.model.pointX, this.model.pointY, 30);
      }

    }
