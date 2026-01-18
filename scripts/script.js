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

function logiqueJeu(i, nbMotsProposes, score) {
    console.log("user typed valider");
    i++;
    console.log('i=', i);
    console.log('mot à taper =', wordsAppList[i]);
    console.log('phrase à taper =', sentencesAppList[i]); 

    let mode = getModeJeu();
    console.log('mode de jeu =', mode);

    let target = (mode === "mots"? wordsAppList[i-1] : sentencesAppList[i-1]);
    if (target===undefined) {
        console.log("Fin du jeu");
        afficherProposition("Fin du jeu");
    }

    if (mode === "mots") {
        afficherProposition(wordsAppList[i]);
    } else if (mode === "phrases") {
        afficherProposition(sentencesAppList[i]);
    }
    
    nbMotsProposes++;

    let motSaisi = document.getElementById("inputEcriture").value;

    if (motSaisi === (target)) {
        score++;
        console.log("Score augmenté ! Nouveau score :", score);
    } else {
        console.log("Mot incorrect. Score inchangé :", score);
    }
    afficherResultat(score, nbMotsProposes);

    clearZoneSaisie();
}

function lancerJeu() {
    let score = 0
    let nbMotsProposes = 0
    let i = 0;
    let targetList = wordsAppList; // by default

    /**
    let btnModeMots = document.getElementById("mots")
    btnModeMots.addEventListener("click", function() {
        console.log("mode mots sélectionné");
        afficherProposition(wordsAppList[i]);
    });

    let btnModePhrases = document.getElementById("phrases")
    btnModePhrases.addEventListener("click", function() {
        console.log("mode phrases sélectionné");
        afficherProposition(sentencesAppList[i]);
    });
    */

    let btnModeList = document.querySelectorAll(".optionSource input");

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

    let btnValiderMot = document.getElementById("btnValiderMot")
    btnValiderMot.addEventListener("click", function() {
        logiqueJeu(i, nbMotsProposes, score);
    });

    document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        logiqueJeu(i, nbMotsProposes, score);
    }
    });
    
}