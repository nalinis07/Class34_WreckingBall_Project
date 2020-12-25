
// Ball CLASS 

class Ball {
    // creates the ball
    constructor (x,y,width, height, angle) {
        var ballOptions = {
            frictionAir:0.005,
            density:1.0
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle (x, y, width, height, ballOptions);
        World.add (wreckWorld, this.body);

        //console.log (this);
    }

    // display the ball 
    display () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();

        translate (pos.x, pos.y);
        fill ("grey");
        rotate (angle);
        ellipseMode (RADIUS);
        ellipse (0, 0, this.width/2, this.height/2);

        pop ();
    }

}
