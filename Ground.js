class Ground{

    constructor(){

        var options={
            density:100.0,
            isStatic:true
        }

        this.body = Bodies.rectangle(width/2, height-10, width, 50, options);
        this.width = width;
        this.height = 50;

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        
        rectMode(CENTER);
        fill("yellow");

        rect(width/2, height-10, this.width, this.height);
    }
}