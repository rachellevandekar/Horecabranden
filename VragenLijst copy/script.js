//elementen selecteren 
const start = document.getElementById('start-btn');
const next = document.getElementById('next-btn');
const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
//const scoreContainer = document.getElementById('scoreContainer');
const vragenOverzicht = document.getElementById('vragen-overzicht');
const vragen = document.querySelector(".vraag-btn")
const containerOverzicht = document.getElementById('container-overzicht');
//const randomNumber = document.getElementById('randomNumber');
//const winnaar = document.getElementById('winnaar');
//const scoreText = document.querySelector(".score");

//let score = 0;
//let questionCounter = 0;

//const MAX_QUESTIONS = 4;
//const CORRECT_BONUS = 1;

//document.getElementById("start-btn").addEventListener("click", renderQuestion);
//funct = document.getElementById('question')

const db = firebase.firestore();
var vragCol = db.collection('vragen');
document.querySelector("#vraag1-btn").addEventListener("click", startQuiz);
document.querySelector("#vraag2-btn").addEventListener("click", startQuiz);
document.querySelector("#vraag3-btn").addEventListener("click", startQuiz);
document.querySelector("#vraag4-btn").addEventListener("click", startQuiz);

//db.collection('vragen').get().then(function(resp) { return resp.json() })
const countQuestions = 4;

const vragenDB = [{
    vraag: vragCol.doc("vraag1")
}, {
    vraag: vragCol.doc("vraag2")
}, {
    vraag: vragCol.doc("vraag3")
}, {
    vraag: vragCol.doc("vraag4")
}];

//console.log(vragenDB);

/*
db.collection("vragen").doc("vraag1")
    .get()
    .then(function(resp) {
        return resp.json()

    })
console.log(doc.data())*/

//console.log(vragenDB[])

db.collection('vragen').get().then((snapshot) => {
    snapshot.docs.map((doc, index) => {
        console.log(doc.data().antwoord, index);
    })
})


const getRandomQuestion = (req, res) => {
    const id = Math.floor(Math.random() * (countQuestions) + 1)
    var questionRef = db.collection('questions').doc(id.toString());
    var getDoc = questionRef.get()
        .then(doc => {
            if (!doc.exists) {
                throw new Error("No such document")
            } else {
                console.log('Document data:', doc.data());
                res.status(200).send(question_template({
                    id: doc.id,
                    vraag: doc.get('vraag'),
                    option1: doc.get('option1'),
                    option2: doc.get('option2'),
                    option3: doc.get('option3'),
                    option4: doc.get('option4')
                }));
            }
        })
        .catch(err => {
            console.log('Error getting document, err');

        });
}

const checkanswer = (req, res) => {


    let id = req.body.id;
    let answer = req.body.answer;

    var questionRef = db.collection('questions').doc(id.toString());
    var getDoc = questionRef.get()
        .then(doc => {
            if (!doc.exists) {
                throw new Error("No such document");
            } else {
                if (doc.get('answer') === answer) {
                    res.status(200).send(correct_answer_template());
                } else {
                    res.status(200).send(wrong_answer_template({
                        correct_answer: getAnswer(doc, doc.get('answer'))
                    }));
                }
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
            res.status(400).send('Error');
        });
}

function getAnswer(doc, answer) {
    let answer_text = "";
    switch (answer) {
        case "1":
            answer_text = doc.get('option1');
            break;
        case "2":
            answer_text = doc.get('option2');
            break;
        case "3":
            answer_text = doc.get('option3');
            break;
        case "4":
            answer_text = doc.get('option4');
            break;
    }
    return answer_text;
}














let vragenNummer = 0; //runningQuestion

//console.log(vragenDB);
//vragen.addEventListener('click', renderQuestion)

function volgendeVraag() {
    if (vragenNummer >= 4) {

    } else {
        vragenNummer++;
        renderQuestion();
    }
}

function startQuiz() {
    //questionCounter = 0;
    //availableQuestions = [...questions];
    //score = 0;
    //start.classList.add('hide')
    containerOverzicht.classList.add('hide')
        //runningQuestion = -1;
    quiz.classList.remove('hide')

    renderQuestion();

    next.innerText = 'Volgende'
    start.innerText = 'Overzicht'
    start.classList.remove('hide')
    next.classList.remove('hide')

}


//console.log(vragen)

// vraag laden
function renderQuestion() {

    //showQuestion(questions[runningQuestion])

    //let functVar = funct.value;
    let user = vragenDB[vragenNummer];


    vragCol.doc("vraag1").get().then(function(snapshot) {
        document.getElementById('question').innerHTML = snapshot.data().vraag;
        document.getElementById('antwoordA').innerHTML = snapshot.data().a;
        document.getElementById('antwoordB').innerHTML = snapshot.data().b;
        document.getElementById('antwoordC').innerHTML = snapshot.data().c;
        document.getElementById('antwoordD').innerHTML = snapshot.data().d;

    })

}


next.addEventListener('click', () => {

    vragenNummer++
    renderQuestion();

})


/*
//knoppen begin en volgende
//vragen.addEventListener('click', startQuiz)
next.addEventListener('click', () => {

    runningQuestion++
    renderQuestion();

})

*/
/*
start.addEventListener('click', () => {
    // containerOverzicht.classList.remove('hide')
    //quiz.classList.add('hide')
    //  start.classList.add('hide')
    //next.classList.add('hide')
    startQuiz();

})*/



/*
//vraag en antwoorden weergeven 
function showQuestion(question) {


    //vraag weergeven
    questionElement.innerText = question.question;


    //antwoorden weergeven, loop en maak button met antwoord
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });




}*/
/*
//alles terug naar default bij elke nieuwe vraag, 1 vraag weergeven
function resetState() {
    clearStatusClass(document.body)
    next.classList.add('hide')

    //loop door alle children voor answerButtonsElement + weghalen
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }


    while (questionElement.firstChild) {
        questionElement.removeChild(questionElement.firstChild)

    }

}
*/
//const lastQuestion = questions.length - 1;

// na beantwoorden vraag laat volgende knop zien
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)

    })

    if (lastQuestion.length > runningQuestion - 1) {
        runningQuestion++;
        renderQuestion();


    } else {
        next.innerText = 'Volgende'
        start.innerText = 'Overzicht'
        start.classList.remove('hide')
        next.classList.remove('hide')
    }



    if (correct) {

        incrementScore(CORRECT_BONUS);
        console.log(score);
        scoreText.innerText = score;
        localStorage.setItem('mostRecentScore', score);

    }

    if (score > 3) {
        console.log("gewonnen")
        winnaar.classList.remove('hide')
        winnaar.innerText = "je hebt gewonnen";

    }


};



//geef kleur voor goed en fout
function setStatusClass(element, correct) {

    clearStatusClass(element)
    if (correct) {

        element.classList.add('correct')

    } else {
        element.classList.add('wrong')

    }

}



incrementScore = num => {
    score += num;
    scoreText.innerText = score;

};



//haal kleuren goed en fout weg
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}


const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore + " vs 3";




/*
//de vragen en antwoorden - array
const questions = [{
    question: 'Wat moet je vooral NIET doen bij een vlam in de pan?',
    answers: [
        { text: 'deksel op de pan', correct: false },
        { text: 'afzuigkap uitzetten', correct: false },
        { text: 'water er overheen gooien', correct: true },
        { text: 'gas uitzetten', correct: false }
    ]
}, {
    question: 'Waar ontstaat brand het meest?',
    answers: [
        { text: 'pan', correct: false },
        { text: 'afzuiging', correct: true },
        { text: 'oven', correct: false },
        { text: 'meterkast', correct: false }
    ]
}, {
    question: 'Wat moet je NIET doen bij brand?',
    answers: [
        { text: 'wegrennen', correct: true },
        { text: 'rustig blijven', correct: false },
        { text: 'brandweer bellen', correct: false },
        { text: 'veilig naar buiten', correct: false }
    ]
}, {
    question: 'Is een schone werkomgeving belangrijk?',
    answers: [
        { text: 'ja', correct: true },
        { text: 'nee', correct: false },
    ]
}]
*/

/*
db.collection('vragen').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data())
        })
    })*/
/*
docData.forEach((item) => {
    firestore().collection('timeSlot')
        .where('vraag1', '==', item)
        .get()
        .then(function(doc) {
            doc.forEach(function(docV) {
                console.log(docV.data());
            });
        });
});
*/

/*
const vragenDB = vragCol.where('vraag', '==', 'afzuiging')


vragenDB.get().then(snapsh => {
    snapsh.docs.forEach(doc => {
        console.log(doc.data())
    })
})*/