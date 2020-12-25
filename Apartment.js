// Apartment CLASS 
class Apartment {

    //create an apartment ..
    // this is civil work .. still let me do it
    constructor (x,y, width, height,angle) {
        var boxOptions = {
            restitution : 0.8,
            friction:1.0,
            density:0.04
        }
        this.width = width;
        this.height = height;
        this.image = loadImage ("ApartmentImg.png");
        this.body = Bodies.rectangle (x, y, this.width, this.height, boxOptions);
        World.add (wreckWorld, this.body);

        
    } // end of c'tor ()

    // display the apartment 
    display () {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push ();

        translate (pos.x, pos.y);
        rotate (angle);

        //strokeWeight(4);
        //stroke ("cyan");
        //rectMode (CENTER);
        //fill ("purple");
        //rect (0,0,this.width, this.height);
        imageMode (CENTER);
        image (this.image,0,0,this.width, this.height);
        pop ();
        
    } // end of fn display ()

}
