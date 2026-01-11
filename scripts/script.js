function chooseMode(){
    let modeWordBtn = document.getElementById('mots');
    modeWordBtn.addEventListener("click", () => {
        console.log("Vous avez cliqué sur le bouton mots")
    });

    let modeSentenceBtn = document.getElementById('phrases');
    modeSentenceBtn.addEventListener("click", () => {
        console.log("Vous avez cliqué sur le bouton phrases")
    });

    if (modeWordBtn.clicked){return 'word';}
    else if (modeSentenceBtn.clicked){return 'sentence';}
    else {return null;}
}

function updateScore(nbQuestions, score){
    let scoreText='Votre score : ' + score + '/' + nbQuestions;
    let zoneScore = document.querySelector('.zoneScore');
    zoneScore.innerHTML = scoreText;
}

function getUserTyped(compteur){
    let validationBtn = document.getElementById('btnValiderMot');

    let userType = document.getElementById('inputEcriture');
    console.log(userType.value);

    validationBtn.addEventListener("click", () => {
        console.log("Vous avez cliqué sur le bouton valider");
        console.log("Le mot tapé est : ", userType.value);
        compteur++;
    });

    return userType.value;
}

function main(){
    let modeChosen = chooseMode();
    let targetList = wordsAppList; //by default
    targetList = (modeChosen === 'word') ? wordsAppList : sentencesAppList;

    let compteur = 0;
    let score = 0;
    let targetNode = targetList[compteur];
    console.log("L'élément cible est : ", targetNode);

    let zoneProposition = document.querySelectorAll('.zoneProposition');
    zoneProposition.innerHTML += targetNode;

    if (getUserTyped(compteur) === targetNode) {
        score += 1;
        scoreText = getScoreSentence(targetList.length, score);
    }
    

}
