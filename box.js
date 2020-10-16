class box
{
    constructor(x,y,width,height)
    {

        var option=
        {
            restitution:0.7
        }
        this.boxobject=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.boxobject);
        this.width=width;
        this.height=height;

        

        
    }
display()
 {
    push();
    var angle=this.boxobject.angle;
    translate(this.boxobject.position.x,this.boxobject.position.y);
    
    rotate(angle);
    
    rect(0,0,this.width,this.height);

    pop();
 }
}