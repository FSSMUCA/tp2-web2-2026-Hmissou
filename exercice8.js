let nom = "  Fatima  ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

nom = nom.trim();
if (nom === "") nom = "Inconnu";
console.log('nom : "' + nom + '"');

age = Number(age);
if (Number.isNaN(age) || age < 0) {
    console.log("age : valeur invalide");
} else {
    console.log("age :", age, "(valide)");
}

if (email.indexOf("@") !== -1 && email.indexOf(".") > email.indexOf("@")) {
    console.log('email : "' + email + '" (valide)');
} else {
    console.log('email : "' + email + '" (invalide)');
}


let score = parseInt(scoreJeu);
if (Number.isNaN(score)) score = 0;
console.log("scoreJeu :", score);


let admin = (estAdmin === "true");
console.log("estAdmin :", admin);


let connexion = derniereConnexion ?? "Jamais connecté";
console.log("derniereConnexion :", connexion);


let nb = Number(nombreConnexions);
if (nb === 0) {
    console.log('nombreConnexions : "Aucune connexion"');
} else {
    console.log("nombreConnexions :", nb);
}