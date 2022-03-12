
const articles = document.getElementsByTagName('article');
const thirdArticle = articles[2];

console.log(articles[0]);
// console.log(thirdArticle);

const elt = document.querySelector("#myId p.article > a");

console.log(elt);

const elt1 = document.getElementById('main');

console.log(elt1);

const elt1_2 = elt1.children;

console.log("Element Enfant : " + elt1_2);

const elt1_3 = elt1.parentElement;

console.log("Element Parent : " + elt1_3);

const elt1_4 = elt1.nextElementSibling;

console.log("Element suivant : "+ elt1_4);

const elt1_5 = elt1.previousElementSibling;

console.log("Element Précedent : " + elt1_5);

document.write(elt1_5);

let elt2 = document.getElementById('main');
elt2.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>";

//classList Pour 
elt2.classList.add("nouvelleClasse");    // Ajoute la classe nouvelleClasse à l'élément
/*elt2.classList.remove("nouvelleClasse"); // Supprime la classe nouvelleClasse que l'on venait d'ajouter
elt2.classList.contains("nouvelleClasse");   // Retournera false car on vient de la supprimer
*/elt2.classList.replace("oldClass", "newClass"); // Remplacera oldClass par newClass si oldClass était présente sur l'élément

