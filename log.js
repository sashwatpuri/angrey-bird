class Log extends Baseclass  {
    constructor (x ,y ,h,angle ){
        super(x,y,20,h,angle) ; 
          Matter.Body.setAngle(this.body , angle) 
          this.image = loadImage("sprites/wood2.png") ;

     }

}