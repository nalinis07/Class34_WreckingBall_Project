// class Rope
// A rope to tie the wrecking ball to the crane..
// yaa.. big job ...

class Rope {

    // create the rope and tie it to crane and wrecking ball
    constructor (bodyX, pointY){
        
        var ropeOptions = {
            bodyA : bodyX,
            pointB : pointY,
            stiffness : 1.2,
            length : 250
        }

        this.pointB = pointY    ;
        this.chain = Constraint.create (ropeOptions);
        World.add (wreckWorld, this.chain);
    }

    attach (body){
        this.chain.bodyA = body ;
    }

    fly () {
        this.chain.bodyA = null;
    }


    // display  the rope 
    // it is too high .. make all efforts to show it :-)
    display (){
        if (this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB ;

            push ();

            stroke (48,22,8) ;
            strokeWeight (3) ;
            line (pointB.x, pointB.y, pointA.x, pointA.y);

            pop ();
        }
        
        
    }
}