/*import	*	as	deepEqual	from "deepequal";
import equal from 'fast-deep-equal';*/
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); //	{	x:	10,	y:	30	}
console.log("Abscisse de P3 : " + p3.x + " Coordonées de P3 est : " + p3.y + " \n Absc P2 : " + p2.x);
var inc = function (x) { return x + 1; };
console.log(" Lovely fat arrow function" + inc);
console.log(5 == 5); //	true			,	TS	Error
console.log({ a: 123 } == { a: 123 }); //	False
console.log({ a: 123 } === { a: 123 }); /*/	False


console.log(deepEqual({ a:123 },{ a: 123}));
console.log(deepEqual({ b:"123" }, { b: "123"}));
*/
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
console.log(list[1].id);
var fooIndex = list.map(function (i) { return i.id; }).indexOf('foo');
console.log(fooIndex); //	0
var foo = {};
var bar = foo; //
foo.bar = 123;
console.log(foo.bar);
