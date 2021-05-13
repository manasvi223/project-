class launcher{
constructor (body,anchor){
    var options  = {
        bodyA:body,
        pointB:anchor,
        stifness:0.04,
        length:1
    }
    this.pointB = anchor
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
 
}
attach(body){
    this.launcher.bodyA = body;
}

fly(){
    this.launcher.bodyA = null;
}
}