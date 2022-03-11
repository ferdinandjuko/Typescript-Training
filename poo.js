/*
OBJET - exemple
*/
var user1 = {
    id: 1,
    name: 'Rakoto',
    email: 'rakoto@gmail.com',
    access: true
};
var acces;
if (user1.access == true) {
    acces = "accepté";
    console.log(user1.name + "\td'email: " + user1.email + "\t  accès serait " + acces);
}
else {
    acces = "refusé";
    console.log(user1.name + "d'email: " + user1.email + "\t  accès serait " + acces);
}
/*
CLASS - exemple
*/
var Cars = /** @class */ (function () {
    function Cars(matricule, model, color, key) {
        this.matricule = matricule;
        this.model = model;
        this.color = color;
        this.key = key;
    }
    Cars.prototype.getKey = function () {
        return this.key;
    };
    return Cars;
}());
