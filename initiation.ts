/*declare var $: any; 
On a crée une type de varaible [PoidD] comporte deux paramètre de type entier (x, y)
Donc on peut déclarer une variable de type [Point2D] sans plus mentionner */
interface	Point2D	{
    x:	number;
    y:	number;
}
/*On créé aussi une type de variable [Point3D] prend comme paramètre trois entiers (x, y, z)
Comme on a crée un type de variable: on peut l'utiliser dans déclaration d'autre variable en tant que type [Point3D]
sans plus mentioner la paramètre (x,y,z)   */
interface	Point3D	{
    x:	number;
    y:	number;
    z:	number;
}


/*On a declaré variable point2D: en tant que type [Point2D]
Remarque bien qu'on affecte la valeur dans le x et y comme on a typé leur type c-à-d par [deux_point]*/
var	point2D:	Point2D	=	{	x:	0,	y:	10	}

/*On a déclaré variable point3D de type [Point3D]:
On affecte valeur par défaut dont (x, y, x) comme on les a typé */
var	point3D:	Point3D	=	{	x:	0,	y:	10,	z:	20	}
function iTakePoint2D(point:	Point2D)	{	/*	do	something	*/	}


function iTakePoint3D(point:    Point3D){/* do something*/}
console.log();

iTakePoint2D(point2D);	//	exact	match	okay
iTakePoint2D(point3D);	//	extra	information	okay

var foo = 156;
foo = 345;

$(".awesome").show();

declare var	$:	{
    (selector:string):	any;
};
$('.awesome').show();	//	Okay!
$("123").show();	//	Error:	selector	needs	to	be	a	string

//      iTakePoint2D({	x:	0	});	//	Error:	missing	information	`y`

/*
echo "# Typescript-Training" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:ferdinandjuko/Typescript-Training.git
git push -u origin main
*/