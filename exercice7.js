let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;


console.log("===== RÉCAPITULATIF =====");
console.log("Produit   :"+ nomProduit);
console.log("Quantité  :"+ quantite);
console.log("Prix unit.:"+ prix+ "MAD");

let sous_total = prix * quantite;
console.log("sous_total :"+ sous_total+"MAD");


let montantReduction = sous_total * (reductionPourcentage / 100);
if(codePromo != null || estMembre == true){
    console.log("le montant de la réduction est :", montantReduction);
}else
    console.log("0");

let total_final = sous_total - montantReduction ;
console.log("Total     :"+ total_final);

let solde = 0;
if(soldeCompte >= total_final){
    console.log("Statut : Paiement accepté");
    solde= soldeCompte - total_final;
    console.log("solde :"+solde);
}else
   console.log("Statut : Solde insuffisant"); 

console.log("=========================");