
class Article {
    id_article: number;
    label: string;
    prix: number;
    rayon: string;

    constructor( id_article: number, label: string, prix: number , rayon: string){
        this.id_article = id_article;
        this.label = label;
        this.prix = prix;
        this.rayon = rayon;
    }
    getLabel(){
        return this.label;
    }

};

/** 
function de triage article
*/
function triageArticle(article: Article[]) {
    let temp1: number;    let temp2: string;
    let temp3: number;    let temp4: string;
    let i:number;   let j:number;

        for(let i = 0; i< article.length-1; i++){
            for(let j = i+1; j <= article.length; j++){
                
                if(article[j].getLabel().localeCompare(article[i].getLabel())>0) {
                    
                    temp1 = article[i].id_article;
                    article[j].id_article = article[i].id_article;
                    article[i].id_article = temp1;
                    
                    temp2 = article[i].label;
                    article[j].label = article[i].label;
                    article[i].label = temp2;

                    temp3 = article[i].prix;
                    article[j].prix = article[i].prix;
                    article[i].prix = temp3;
                
                    temp4 = article[i].rayon;
                    article[j].rayon = article[i].rayon;
                    article[i].rayon = temp4;
                
                }
    
            }
        }
}

/**Function affichage izy jiaby */
function getAll(article: Article[]) {
    for(let i = 0; i < article.length; i++) {
        console.log(article[i].id_article  + " Libelle: " + article[i].label + "=>" + article[i].prix + "Ar\n");
    }
}
const article1 = new Article(4, "Riz", 10000, "7");
const article2 = new Article(5, "Mais", 5500, "7");
const article3 = new Article(6, "Haricot", 7000, "7");

var lesArticles = [article1, article2, article3];
for(let k = 0; k < lesArticles.length; k++) {
    console.log(lesArticles[k].id_article + " "+  lesArticles[k].getLabel() + "\n");
}
console.log(article1.getLabel());
/*  

for(let i = 0; i < lesArticles.length; i++) {
    console.log(lesArticles[i].id_article  + " Libelle: " + lesArticles[i].label + "=>" + lesArticles[i].prix + "Ar\n");
}*/

class Chariot {
        total: number;
        articles: Article[];
    constructor(){

    }

}


/*
3. Facture {
    date: string (tsy mampiasa type "Date" tsika), name, address, city, cardCode: string, tel: string, email: string
    }
*/

class Facture {
    date:   string; nom:    string; adress: string;
    city:   string; carCode:string; tel:    string;
    email:  string;

    constructor(date: string,nom: string, adress: string, city: string, carCode:string, tel: string, email:  string){
        this.date = date;
        this.nom = nom;
        this.adress = adress;
        this.city = city;
        this.carCode = carCode;
        this.tel = tel;
        this.email = email;
    }
}

class Command {
    facture: Facture;
    chariot: Chariot;
}

triageArticle(lesArticles);
getAll(lesArticles);

