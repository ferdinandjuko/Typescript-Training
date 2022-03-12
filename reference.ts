type	IdDisplay	=
	{
    id:	string,
    display:	string
}

//Function decrire contenu d'objet type IdDisplay
function decrire(idDisplay: IdDisplay){
    console.log("Identification: " + idDisplay.id + "\nDisplay: " + idDisplay.display + "\n\n");
}

//Tableau avec contenu de cage type IdDisplay
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

    for(let i=0; i<list.length; i++){
        decrire(list[i]);
    }


//return indice contenant id: "foo"
const	fooIndex	=	list.map(i	=>	i.id).indexOf('foo');
console.log(fooIndex);	//	0

//return indice contenant id: "bar"
const barIndex = list.map(i => i.id).indexOf('bar');
console.log(barIndex);

/*Reference*/
type Triangle = {
    base: number,
    hauteur: number,
}

var	foo: Triangle	=	{
    base: 12,
    hauteur: 34,
};

var	bar	=	foo;	//	bar	is	a	reference	to	the	same	object

foo.base	=	123;
console.log(bar.base);	//	123

//Equality	is	for	references
console.log(foo	===	bar);	//	true

/** NULL AND UNDEFINED */
console.log(null	==	undefined);	//	true

//Checking	for	either
//	You	don't	have	to	worry	about	falsy	values	making	through	this	check
console.log(0	==	undefined);	//	false
console.log(''	==	undefined);	//	false
console.log(false	==	undefined);	//	false

function checkVarNull(arg:	string	|	null	|	undefined)	{
    if	(arg	!=	null)	{
        console.log(" Le Paramètre est non null ");
        //	arg	must	be	a	string	as	`!=`	rules	out	both	null	and	undefined.
    } else {
        console.log(" Le paramètre est null ");
    }
}
let varString = '';
checkVarNull(varString);

let someglobal: string | undefined | null;
    someglobal = '';

if	(typeof someglobal	!==	'undefined')	{
    //	someglobal	is	now	safe	to	use
    console.log(someglobal + " is type " + typeof(someglobal) );
}else {
    console.log("Je suis du type " + typeof(someglobal));
}



//on a créé une fonction pour tester la limite explicit d'utilisation d'undefined
function limitExplicit(varTypeOfTest: string | null | undefined) {
    if(typeof(varTypeOfTest)=='undefined'){
        return {a:12, b: 23};
    }
    else {
        return {a:1, b:undefined};
    }
}

let contenuLimit = limitExplicit(someglobal);
console.log("\nContenu de variable contenuLimit est:  " + contenuLimit);



function explicitUsing():{a:number,b?:number}{
    //	if	Something
    return	{a:1,b:2};
    //	else
    return	{a:1};
}

//Node Style CallBack
interface ICallback {
	( error: Error, result?: number ) : void;
}

//on crée une fonction getRandomNumber() qui prend en paramètre une variable callback de type [ICallback]
function getRandomNumber( callback: ICallback ) : void {

	var value = Math.random();

	( value >= 0.5 )
		// Invoke callback as result callback.
		? callback( null, value )

		// Invoke callback as error callback (no result).
		: callback( new Error( "Oops, random number too low." ) )
	;
}

// Now, let's test our random number generator a couple of times to get random results.
for ( var i = 0 ; i < 10 ; i++ ) {

	getRandomNumber(
		( error: Error, result: number ) : void => {

			console.log( `${ i }:`, ( result || error.message ) );

		}
	);

}



