/*declare var $: any; 
On a crée une type de varaible [Poid2D] comporte deux paramètre de type entier (x, y)
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
On affecte valeur par défaut dont (x, y, x) comme on les a typé c-à-d affecté par deux point et suivi par la valeur 
à stocker  */
var	point3D:	Point3D	=	{	x:	0,	y:	10,	z:	20	}

/*Declarer fonction qui prend en paramètre une variable de type crée avant la création de la fonction 
c'est à dire une fonction qui prend en paramètre ni number, ni  bolean et ni string. Plus tôt de type crée d'une façon temporaire
avant la fonction   */
function iTakePoint2D(point:	Point2D)	{	/*	do	something	*/	}

/*Ici on a déclaré une foncion iTakePoint3D qui prend en paramètre une variable point typé en [Point3D]
dont nous connaison déjà que c'est une type de variable typé prend en valeur par défaut trois variable de type number qui sont
(x, y, z)*/
function iTakePoint3D(point:    Point3D){/* do something*/}
console.log();

iTakePoint2D(point2D);	//	exact	match	okay
iTakePoint2D(point3D);	//	extra	information	okay

var foo = 156;
foo = 345;

$(".awesome").show();

declare var	$:	{
    (selector:  string):	any;
};
$('.awesome').show();	//	Okay!
$("123").show();	//	Error:	selector	needs	to	be	a	string

//      iTakePoint2D({	x:	0	});	//	Error:	missing	information	`y`


