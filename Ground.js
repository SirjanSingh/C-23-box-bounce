class Ground{

    constructor(){
        var option={
            isStatic: true
        }
this.body= Bodies.rectangle(200,380,400,20,option);
this.width=400;
this.height=20;
World.add (world,this.body);
}

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}