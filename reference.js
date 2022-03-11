//Function decrire contenu d'objet type IdDisplay
function decrire(idDisplay) {
    console.log("Identification: " + idDisplay.id + "\nDisplay: " + idDisplay.display + "\n\n");
}

//Tableau avec contenu de cage type IdDisplay
var list = [
    {
        id: 'foo',
        display: 'Foo	Select'
    },
    {
        id: 'bar',
        display: 'Bar	Select'
    },
];

    for (var i = 0; i < list.length; i++) {
        decrire(list[i]);
    }
    
//return indice contenant id: "foo"
var fooIndex = list.map(function (i) { return i.id; }).indexOf('foo');
console.log(fooIndex); //	0

var barIndex = list.map(function (i) { return i.id; }).indexOf('bar');
console.log(barIndex);

/*Reference*/
var foo = {};
var bar = foo; //	bar	is	a	reference	to	the	same	object
