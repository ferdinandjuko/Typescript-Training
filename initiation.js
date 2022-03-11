var point2D = { x: 0, y: 10 };
var point3D = { x: 0, y: 10, z: 20 };

function iTakePoint2D(point) {}

function iTakePoint3D(point) {}

console.log();
iTakePoint2D(point2D); //	exact	match	okay
iTakePoint2D(point3D); //	extra	information	okay

var foo = 156;
foo = 345;

//      iTakePoint2D({	x:	0	});	//	Error:	missing	information	`y`*/
