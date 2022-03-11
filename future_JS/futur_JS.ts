/*import	*	as	deepEqual	from "deepequal";
import equal from 'fast-deep-equal';*/
/*POO en TS*/
class	Point	{
    constructor(public	x:	number,	public	y:	number)	{
    }
    add(point:	Point)	{
                    return new	Point(this.x	+	point.x,	this.y	+	point.y);
    }
}

var	p1	=	new	Point(0,	10);
var	p2	=	new	Point(10,	20);
var	p3	=	p1.add(p2);	//	{	x:	10,	y:	30	}

console.log("Abscisse de P3 : " + p3.x + " Coordonées de P3 est : " + p3.y + " \n Absc P2 : " + p2.x );

var	inc	=	x	=>	x+1;
console.log(" Lovely fat arrow function" + inc);


/*Declaration d'un objet Animal*/
class Animal {
    constructor(public nom: string, public poids: number, public couleur: string) {
    }
    decrireAnimal(){
        console.log("\nLe "+ this.nom + " est de couleur " + this.couleur + ", pèse environ " + this.poids + "kg\n");
    }
}
var animal1 = new Animal("Chat", 23, "vert");
var animal2 = new Animal("Loup", 15,"noir");

console.log(animal1.decrireAnimal());
console.log(animal2.decrireAnimal());

console.log(5	==	5);	//	true			,	TS	Error

console.log({a:123}	==	{a:123});	//	False
console.log({a:123}	===	{a:123});	/*/	False


console.log(deepEqual({ a:123 },{ a: 123}));
console.log(deepEqual({ b:"123" }, { b: "123"}));


Objet IdDisplay d'attribut id typé string et display typé string aussi  */
type	IdDisplay	=	{
    id:	string,
    display:	string
}
/**/
const	list:	IdDisplay[]	=	[
    {
            id:	'foo',
            display:	'Foo	Select'
    },
    {
            id:	'bar',
            display:	'Bar	Select'
    },
]

console.log(list[1].id);

const	fooIndex	=	list.map(i	=>	i.id).indexOf('foo');
console.log(fooIndex);	//	0
/*
var fox = {} ;
var baz = fox ;  //
fox.bax = 123 ;
console.log(baz.bax);
*/











