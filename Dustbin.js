class Dustbin{

    constructor(x, y, width, height){

        var options={
            isStatic:true,
            density:3.6,
            friction:15.0,
            restitution:0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("dustbingreen.png");

        World.add(world, this.body);
    }

    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push()

        translate(pos.x, pos.y);
        rotate(angle);

        rectMode(CENTER)
        fill("white");

        image(this.image, 0, 0, this.width, this.height);

        pop();
    }
}
