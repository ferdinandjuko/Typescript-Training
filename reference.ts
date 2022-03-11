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
var	foo	=	{};
var	bar	=	foo;	//	bar	is	a	reference	to	the	same	object




