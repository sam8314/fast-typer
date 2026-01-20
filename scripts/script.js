/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    let spanScore = document.querySelector(".zoneScore span")
    let affichageScore = `${score} / ${nbMotsProposes}` 
    spanScore.innerText = affichageScore
}

/**
 * 
 * @param {string} proposition : mot ou phrase qui va s'afficher dans la zone proposition 
 */
function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition;
}

function clearZoneSaisie(){
    let inputEcriture = document.getElementById("inputEcriture");
    inputEcriture.value = "";
}

/**
 * 
 * @returns {string} : le mode de jeu mots ou phrases
 */
function getModeJeu() {
    if(document.getElementById("mots").checked) {
        return "mots";
    } else if(document.getElementById("phrases").checked) {
        return "phrases";
    }
}

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function logiqueJeu() {
    let mode = getModeJeu();
    let texteSaisi = document.getElementById("inputEcriture").value;
    let target = (mode === "mots"? wordsAppList[i] : sentencesAppList[i]);

    console.log("user typed valider");
    console.log('i=', i, "saisi=", texteSaisi, "target=", target);

    if (target === undefined) {
        afficherProposition("Fin du jeu");
        return;
    }

    if (texteSaisi === (target)) {
        score++;
        console.log("Score augmenté ! Nouveau score :", score);
    } else {
        console.log("Mot incorrect. Score inchangé :", score);
    }

    nbMotsProposes++;
    afficherResultat(score, nbMotsProposes);

    clearZoneSaisie();
    i++;
    
    let nextTarget = (mode === "mots" ? wordsAppList[i] : sentencesAppList[i]);
    if (nextTarget !== undefined) {
        afficherProposition(nextTarget);
    } else {
        afficherProposition("Fin du jeu");
    }  
}

let score = 0
let nbMotsProposes = 0
let i = 0;

function lancerJeu() {

    initAddEventListenerPopup();
    let btnModeList = document.querySelectorAll(".optionSource input");
    let btnValiderMot = document.getElementById("btnValiderMot");
    const form = document.querySelector('form');

    for (let j = 0; j < btnModeList.length; j++) {
    btnModeList[j].addEventListener("change", function() {
        let mode = getModeJeu();
        console.log('mode de jeu =', mode);
        if (mode === "mots") {
            afficherProposition(wordsAppList[i]);
        } else if (mode === "phrases") {
            afficherProposition(sentencesAppList[i]);
        }
    })};
    
    btnValiderMot.addEventListener("click", logiqueJeu);

    document.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            logiqueJeu();
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Il n’y a pas eu de rechargement de page");
        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        console.log(nom);
        console.log(email);
        afficherEmail(nom, email, `${score} / ${nbMotsProposes}`);
});
}