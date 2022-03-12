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

for (var i_1 = 0; i_1 < list.length; i_1++) {
    decrire(list[i_1]);
}

//return indice contenant id: "foo"
var fooIndex = list.map(function (i) { return i.id; }).indexOf('foo');
console.log(fooIndex); //	0

//return indice contenant id: "bar"
var barIndex = list.map(function (i) { return i.id; }).indexOf('bar');
console.log(barIndex);

var foo = {
    base: 12,
    hauteur: 34
};

var bar = foo; //	bar	is	a	reference	to	the	same	object
foo.base = 123;
console.log(bar.base); //	123

//Equality	is	for	references
console.log(foo === bar); //	true

/** NULL AND UNDEFINED */
console.log(null == undefined); //	true

//Checking	for	either
//	You	don't	have	to	worry	about	falsy	values	making	through	this	check
console.log(0 == undefined); //	false
console.log('' == undefined); //	false
console.log(false == undefined); //	false

function checkVarNull(arg) {
    if (arg != null) {
        console.log(" Le Paramètre est non null ");
        //	arg	must	be	a	string	as	`!=`	rules	out	both	null	and	undefined.
    }
    else {
        console.log(" Le paramètre est null ");
    }
}

var varString = '';
checkVarNull(varString);

var someglobal;
someglobal = '';

    if (typeof someglobal !== 'undefined') {
        //	someglobal	is	now	safe	to	use
        console.log(someglobal + " is type " + typeof (someglobal));
    }
    else {
        console.log("Je suis du type " + typeof (someglobal));
    }

//on a créé une fonction pour tester la limite explicit d'utilisation d'undefined
function limitExplicit(varTypeOfTest) {
    if (typeof (varTypeOfTest) == 'undefined') {
        return { a: 12, b: 23 };
    }
    else {
        return { a: 1, b: undefined };
    }
}

var contenuLimit = limitExplicit(someglobal);
console.log("\nContenu de variable contenuLimit est:  " + contenuLimit);

//          #LIMIT EXPLICIT USE OF UNDEFINED
function explicitUsing() {
    //	if	Something
    return { a: 1, b: 2 };
    //	else
    return { a: 1 };
}

//          #THE STYLE CALLBACK
//on crée une fonction getRandomNumber() qui prend en paramètre une variable callback de type [ICallback]
function getRandomNumber(callback) {
    var value = Math.random();
    (value >= 0.5)
        // Invoke callback as result callback.
        ? callback(null, value)
        // Invoke callback as error callback (no result).
        : callback(new Error("Oops, random number too low."));
}

// Now, let's test our random number generator a couple of times to get random results.
for (var i = 0; i < 10; i++) {
    getRandomNumber(function (error, result) {
        console.log("".concat(i, ":"), (result || error.message));
    });
}
