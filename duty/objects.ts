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
};

/**

 */

 class Chariot {
    total: number;
    articles: Article[];
    constructor(){

    }

};


