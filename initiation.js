//on declare vairable point*    de type Point*D
var point2D = { x: 3, y: 10 };
var point3D = { x: 5, y: 10, z: 20 };

//variable point de type Point2D
function iTakePoint2D(point) {
    var subtract = point.y - point.x;
    console.log("Difference de x et y est:  " + subtract);
}

//variable point de type Point3D
function iTakePoint3D(point) {
    var somme = (point.x + point.y + point.z);
    console.log("\nSomme de x, y, z est égal " + somme);
}

//Appel au fonction iTakePoint*()
iTakePoint2D(point2D);
iTakePoint3D(point3D);

var foo = 156;
foo = 345;
console.log(foo);
