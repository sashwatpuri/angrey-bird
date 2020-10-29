class Baseclass {
    constructor (x,y,w,h,angle){
        var option = {
            restitution : 0.8 , 
            friction : 1.2 ,
            density : 1.0
          }
          this.body = Bodies.rectangle(x,y,w,h,option) ; 
          this.width = w ;
          this.height = h ; 
          this.image = loadImage("sprites/base.png");
          World.add(world,this.body);
    }
    Display(){
        push();
        translate(this.body.position.x , this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER)  ; 
        image(this.image , 0 , 0 , this.width , this.height) ; 
        pop();
    }
}