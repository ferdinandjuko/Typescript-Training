/*
INTERFACE (pour l'objet user) - exemple
=> Une interface TypeScript permet de définir la signature (ou le contrat) d'une classe où
	même une fonction (Modele & Structure de typage).
*/
interface Users {
	id: number;
	name: string;
	email: string;
	access: boolean;

}

/*
OBJET - exemple
*/
const user1: Users = {
	id: 1,
	name: 'Rakoto',
	email: 'rakoto@gmail.com',
	access: true,
};
var acces:	string;
if(user1.access==true){
	acces="accepté";
	console.log(user1.name + "\td'email: " + user1.email + "\t  accès serait " + acces);
} else {
	acces="refusé";
	console.log(user1.name + "d'email: " + user1.email + "\t  accès serait " + acces);
}

/*
CLASS - exemple
*/
class Cars {
	matricule: number;
	model: string;
	color: string;
	key?: boolean; //'?' signifie que ce champ est optionnel lors de l'instanciation

	constructor(matricule: number, model: string, color: string, key?: boolean) {
		this.matricule = matricule;
		this.model = model;
		this.color = color;
		this.key = key;
	}

	getKey(){
		return this.key;
	}
}


