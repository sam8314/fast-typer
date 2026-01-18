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

    let btnModeList = document.querySelectorAll(".optionSource input");
    let btnValiderMot = document.getElementById("btnValiderMot");

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
}