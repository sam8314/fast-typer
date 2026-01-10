let score = 0;

// user chooses word or sentence mode
let mode;
while (mode !== 'word' && mode !== 'sentence') {
    mode = prompt('Choose mode: word or sentence');
}

switch(mode) {
    case 'word':
        wordsMode();
        break;
    case 'sentence':
        sentencesMode();
        break;
    default:
        console.log('Invalid mode selected. Please refresh and try again.');
        break;
}

function wordsMode(){
    for (let i = 0; i < wordsAppList.length; i++) {
        let wordUser = prompt('Type this word: ' + wordsAppList[i]);
        if (wordUser === wordsAppList[i]) {
            score++;
        }
        else{
            score--;
        }
    }
    returnScore(wordsAppList.length, score);
}

function sentencesMode(){
    for (let i = 0; i < sentencesAppList.length; i++) {
        let sentenceUser = prompt('Type this sentence: ' + sentencesAppList[i]);
        if (sentenceUser === sentencesAppList[i]) {
            score++;
        }
        else{
            score--;
        }
    }
    returnScore(sentencesAppList.length, score);
}   

function returnScore(nbQuestions, score){
    return 'Your final score is: ' + score + '/' + nbQuestions;
}
