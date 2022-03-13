var Article = /** @class */ (function () {
    function Article(id_article, label, prix, rayon) {
        this.id_article = id_article;
        this.label = label;
        this.prix = prix;
        this.rayon = rayon;
    }
    Article.prototype.getLabel = function () {
        return this.label;
    };
    return Article;
}());
;
/**
function de triage article
*/
function triageArticle(article) {
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    for (var i = 0; i < article.length - 1; i++) {
        for (var j = i + 1; j <= article.length; j++) {
            if (article[j].getLabel().localeCompare(article[i].getLabel()) > 0) {
                temp1 = article[i].label;
                article[j].label = article[i].label;
                article[i].label = temp1;
                temp2 = article[i].prix;
                article[j].prix = article[i].prix;
                article[i].prix = temp2;
                temp3 = article[i].id_article;
                article[j].id_article = article[i].id_article;
                article[i].id_article = temp3;
                temp4 = article[i].rayon;
                article[j].rayon = article[i].rayon;
                article[i].rayon = temp4;
            }
        }
    }
}
/**Function affichage izy jiaby */
function getAll(article) {
    for (var i = 0; i < article.length; i++) {
        console.log(article[i].id_article + " Libelle: " + article[i].label + "=>" + article[i].prix + "Ar\n");
    }
}
var article1 = new Article(4, "Riz", 10000, "7");
var article2 = new Article(5, "Mais", 5500, "7");
var article3 = new Article(6, "Haricot", 7000, "7");
var lesArticles = [article1, article2, article3];
for (var k = 0; k < lesArticles.length; k++) {
    console.log(lesArticles[k].id_article + " " + lesArticles[k].getLabel() + "\n");
}
console.log(article1.getLabel());
/*
var lesArticles1: Article[]= [
    {
        id_article: 1,
        label: "Petit Beure",
        prix: 1000,
        rayon: "5"
    },
    {
        id_article: 2,
        label: "Pomme",
        prix: 600,
        rayon: "6"
    },
    {
        id_article: 3,
        label: "Citron",
        prix: 400,
        rayon: "6"
    },
];

for(let i = 0; i < lesArticles.length; i++) {
    console.log(lesArticles[i].id_article  + " Libelle: " + lesArticles[i].label + "=>" + lesArticles[i].prix + "Ar\n");
}*/
var Chariot = /** @class */ (function () {
    function Chariot() {
    }
    return Chariot;
}());
/*
3. Facture {
    date: string (tsy mampiasa type "Date" tsika), name, address, city, cardCode: string, tel: string, email: string
    }
*/
var Facture = /** @class */ (function () {
    function Facture(date, nom, adress, city, carCode, tel, email) {
        this.date = date;
        this.nom = nom;
        this.adress = adress;
        this.city = city;
        this.carCode = carCode;
        this.tel = tel;
        this.email = email;
    }
    return Facture;
}());
var Command = /** @class */ (function () {
    function Command() {
    }
    return Command;
}());
triageArticle(lesArticles);
getAll(lesArticles);
