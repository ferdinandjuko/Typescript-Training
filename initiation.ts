/*On crée type Point2D et type Point3D */
interface	Point2D	{
    x:	number;
    y:	number;
}
interface	Point3D	{
    x:	number;
    y:	number;
    z:	number;
}

//on declare vairable point*    de type Point*D
var	point2D:	Point2D	=	{	
    x:	3,	y:	10	
}
var	point3D:	Point3D	=	{
    	x:	5,	y:	10,	z:	20	
    }

//variable point de type Point2D
function iTakePoint2D(point:	Point2D)	{
    let subtract = point.y - point.x;
    console.log("Difference de x et y est:  " + subtract);
}

//variable point de type Point3D
function iTakePoint3D(point:    Point3D){
    let somme = (point.x + point.y + point.z);
    console.log("\nSomme de x, y, z est égal " + somme);
}

//Appel au fonction iTakePoint*()
iTakePoint2D(point2D);
iTakePoint3D(point3D);

var foo = 156;
foo = 345;
console.log(foo);

