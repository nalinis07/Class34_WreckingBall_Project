// Ground CLASS 
class Ground {
    // create the ground ..
    // though I or no one can be  the creator of ground
    constructor (x,y,width, height) {
        
        var groundOptions = {
            isStatic : true
        }

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle (x, y, width, height, groundOptions);
        World.add (wreckWorld, this.body);
      
    } // end of c'tor ()

    // display the ground
    // don't know when the ground was hiding :-)

    display () {
        var pos = this.body.position;

        rectMode (CENTER);
        fill ("black");
        rect (pos.x, pos.y, this.width, this.height);
        

    } // end of fn display ()

}