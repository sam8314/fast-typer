function chooseMode(){
    let mode;
    while (mode !== 'word' && mode !== 'sentence') {
        mode = prompt('Choose mode: word or sentence');
    }

    return mode;
}

function wordsMode(score){
    for (let i = 0; i < wordsAppList.length; i++) {
        let wordUser = prompt('Type this word: ' + wordsAppList[i]);
        if (wordUser === wordsAppList[i]) {
            score++;
        }
        else{
            score--;
        }
    }
}

function sentencesMode(score){
    for (let i = 0; i < sentencesAppList.length; i++) {
        let sentenceUser = prompt('Type this sentence: ' + sentencesAppList[i]);
        if (sentenceUser === sentencesAppList[i]) {
            score++;
        }
        else{
            score--;
        }
    }
}   

function returnScore(nbQuestions, score){
    return 'Your final score is: ' + score + '/' + nbQuestions;
}

function main(){
    let modeChosen = chooseMode();
    console.log("modeChosen:", modeChosen);

    let score = 0;

    switch(modeChosen) {
    case 'word':
        wordsMode(score);
        console.log(returnScore(wordsAppList.length, score));
        break;
    case 'sentence':
        sentencesMode(score);
        console.log(returnScore(sentencesAppList.length, score));
        break;
    default:
        console.log('Invalid mode selected. Please refresh and try again.');
        break;
}

}
