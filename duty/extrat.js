//*1) Manao recherche n' rayon "5" hita @reny supermarché ireny
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
/**
function de triage article
*/
function triageArticle(article) {
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var i;
    var j;
    for (i = 0; i < article.length - 1; i++) {
        for (j = i + 1; j < article.length; j++) {
            if (article[i].label.toLowerCase() > article[j].label.toLowerCase()) {
                // if(article[j].getLabel().localeCompare(article[i].getLabel())>0) {
                temp1 = article[j].id_article;
                article[j].id_article = article[i].id_article;
                article[i].id_article = temp1;
                temp2 = article[j].label;
                article[j].label = article[i].label;
                article[i].label = temp2;
                temp3 = article[j].prix;
                article[j].prix = article[i].prix;
                article[i].prix = temp3;
                temp4 = article[j].rayon;
                article[j].rayon = article[i].rayon;
                article[i].rayon = temp4;
            }
        }
    }
}
//Triage selon an'le id_article
function triageByIdCroissant(articles) {
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var i;
    var j;
    for (i = 0; i < articles.length - 1; i++) {
        for (j = i + 1; j < articles.length; j++) {
            if (articles[i].id_article > articles[j].id_article) {
                temp1 = articles[j].id_article;
                articles[j].id_article = articles[i].id_article;
                articles[i].id_article = temp1;
                temp2 = articles[j].label;
                articles[j].label = articles[i].label;
                articles[i].label = temp2;
                temp3 = articles[j].prix;
                articles[j].prix = articles[i].prix;
                articles[i].prix = temp3;
                temp4 = articles[j].rayon;
                articles[j].rayon = articles[i].rayon;
                articles[i].rayon = temp4;
            }
        }
    }
}
/*Triage par Prix d'Article
*/
function triageByPrixCroissant(articles) {
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var i;
    var j;
    for (i = 0; i < articles.length - 1; i++) {
        for (j = i + 1; j < articles.length; j++) {
            if (articles[i].prix > articles[j].prix) {
                temp1 = articles[j].id_article;
                articles[j].id_article = articles[i].id_article;
                articles[i].id_article = temp1;
                temp2 = articles[j].label;
                articles[j].label = articles[i].label;
                articles[i].label = temp2;
                temp3 = articles[j].prix;
                articles[j].prix = articles[i].prix;
                articles[i].prix = temp3;
                temp4 = articles[j].rayon;
                articles[j].rayon = articles[i].rayon;
                articles[i].rayon = temp4;
            }
        }
    }
}
function triageByPrixDecroissant(articles) {
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var i;
    var j;
    for (i = 0; i < articles.length - 1; i++) {
        for (j = i + 1; j < articles.length; j++) {
            if (articles[i].prix < articles[j].prix) {
                temp1 = articles[j].id_article;
                articles[j].id_article = articles[i].id_article;
                articles[i].id_article = temp1;
                temp2 = articles[j].label;
                articles[j].label = articles[i].label;
                articles[i].label = temp2;
                temp3 = articles[j].prix;
                articles[j].prix = articles[i].prix;
                articles[i].prix = temp3;
                temp4 = articles[j].rayon;
                articles[j].rayon = articles[i].rayon;
                articles[i].rayon = temp4;
            }
        }
    }
}
/*Triage par Rayon de l'article */
function triageRayonCroissant(article) {
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var i;
    var j;
    for (i = 0; i < article.length - 1; i++) {
        for (j = i + 1; j < article.length; j++) {
            if (article[i].rayon.toLowerCase() < article[j].rayon.toLowerCase()) {
                temp1 = article[i].id_article;
                article[i].id_article = article[j].id_article;
                article[j].id_article = temp1;
                temp2 = article[i].label;
                article[i].label = article[j].label;
                article[j].label = temp2;
                temp3 = article[i].prix;
                article[i].prix = article[j].prix;
                article[j].prix = temp3;
                temp4 = article[i].rayon;
                article[i].rayon = article[j].rayon;
                article[j].rayon = temp4;
            }
        }
    }
}
function triageRayonDeroissant(article) {
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var i;
    var j;
    for (i = 0; i < article.length - 1; i++) {
        for (j = i + 1; j < article.length; j++) {
            if (article[i].rayon.toLowerCase() > article[j].rayon.toLowerCase()) {
                temp1 = article[i].id_article;
                article[i].id_article = article[j].id_article;
                article[j].id_article = temp1;
                temp2 = article[i].label;
                article[i].label = article[j].label;
                article[j].label = temp2;
                temp3 = article[i].prix;
                article[i].prix = article[j].prix;
                article[j].prix = temp3;
                temp4 = article[i].rayon;
                article[i].rayon = article[j].rayon;
                article[j].rayon = temp4;
            }
        }
    }
}
/**Function affichage izy jiaby */
function getAll(article) {
    for (var i = 0; i < article.length; i++) {
        console.log(article[i].id_article + " Libelle: " + article[i].label + "\t=>" + article[i].prix + "Ar\n");
    }
}
function getRayon(rayon5, articles) {
    var i;
    var str;
    i = 0;
    str = "";
    while (i < articles.length) {
        if (rayon5 === articles[i].rayon) {
            str += rayon5 + ": " + articles[i].label + "\n";
        }
        i = i + 1;
    }
    return console.log(str);
}
var article4 = new Article(1, "Petit_Beure", 1000, "5");
var article5 = new Article(2, "Pomme", 600, "4");
var article6 = new Article(3, "Citron", 400, "5");
var article1 = new Article(4, "Riz", 10000, "7");
var article2 = new Article(5, "Mais", 5500, "5");
var article3 = new Article(6, "Haricot", 7000, "7");
var lesArticles = [article1, article2, article3, article4, article5, article6];
//getRayon("5", lesArticles);
//triageByIdCroissant(lesArticles);
//getAll(lesArticles);
//triageByPrixCroissant(lesArticles);
//triageByPrixDecroissant(lesArticles);
triageArticle(lesArticles);
//triageRayonDeroissant(lesArticles);
console.log(lesArticles);
