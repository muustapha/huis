//    // Changement de couleur des paragraphes
const paragraphes = document.querySelectorAll("p");
let couleurIndexParagraphe = 0;

for (const paragraphe of paragraphes) {
    paragraphe.addEventListener("click", () => {
        const couleurs = ["orange", "purple"];
        couleurIndexParagraphe = (couleurIndexParagraphe + 1) % couleurs.length;
        paragraphe.style.color = couleurs[couleurIndexParagraphe];
    });
}


//    // Version 1 : Changer la couleur de tous les titres en cliquant sur l'un des titres (rotation sur 3 couleurs)
//    const couleurs = ["red", "green", "blue"];
//    const titre1 = document.querySelector("h1");
//    const titre2= document.querySelector("h2");
//    const titre3= document.querySelector("h3");
//    const titres = document.querySelectorAll("h1,h2,h3"); // Remplacez "h1" par le sélecteur approprié pour vos titres
//    let couleurIndex = 0;
//  // Remplacez "h1" par le sélecteur approprié.
//     for (const titre of titres) {
//         titre.style.color = couleurs[couleurIndex];}
//         titre.addEventListener("click", () => {
//             couleurIndex = (couleurIndex + 1) % couleurs.length;
//             titre.style.color = couleurs[couleurIndex];
//         });


// // Version 1 : Changer la couleur de tous les titres en cliquant sur l'un des titres (rotation sur 3 couleurs)
// const couleurs = ["red", "green", "blue"];
// const titre1 = document.querySelector("h1");
// const titre2 = document.querySelector("h2");
// const titre3 = document.querySelector("h3");
// const titres = [titre1, titre2, titre3]; // Remplacez "h1", "h2", "h3" par les sélecteurs appropriés pour vos titres
// let couleurIndex = 0;

// // Parcourez tous les titres et ajoutez l'événement "click" à chacun d'eux.
// for (const titre of titres) {
//     titre.style.color = couleurs[couleurIndex];
//     titre.addEventListener("click", () => {
//         couleurIndex = (couleurIndex + 1) % couleurs.length;
//         titre.style.color = couleurs[couleurIndex];
//     });
//
// Version 1 : Changer la couleur de tous les titres en cliquant sur l'un d'eux (rotation sur 3 couleurs)
const couleurs = ["red", "green", "blue"];
const titres = document.querySelectorAll("h1, h2, h3"); // Remplacez "h1", "h2", "h3" par les sélecteurs appropriés pour vos titres

let couleurIndex = 0;

// Fonction pour mettre à jour la couleur de tous les titres.
function changerCouleurTitres() {
    titres.forEach((titre) => {
        titre.style.color = couleurs[couleurIndex];
    });

    // Incrémentez l'index de couleur pour la prochaine fois.
    couleurIndex = (couleurIndex + 1) % couleurs.length;
}

// Ajoutez un gestionnaire d'événement "click" à chaque titre.
titres.forEach((titre) => {
    titre.addEventListener("click", changerCouleurTitres);
});