class circle{
    constructor(radius=1,colour="red",area,circumference){
        this.radius=radius;
        this.colour=colour;
        this.area=area;
        this.circumference=circumference;
    }
    get radius(){
        return this.radius
    }
    set radius(modified){
        this.radius=modified
    }
    get colour(){
        return this.colour
    }
    set colour(modified){
        this.colour=modified
    }
    get area(){
        return 22/7*this.radius**2
    }
    get circumference(){
        return 2*22/7*this.radius
    }
}