let allQuestions = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3
    },
    {
        'question': 'Was bedeutet das HTML-Tag &lt;a&gt;?',
        'answer_1': 'Text Fett',
        'answer_2': 'Container',
        'answer_3': 'Ein Link',
        'answer_4': 'Kursiv',
        'right_answer': 3
    },
    {
        'question': 'Wie bindet man eine Website in eine Website ein?',
        'answer_1': '&lt;iframe&gt;. &lt;frame&gt; und &lt;frameset&gt;',
        'answer_2': '&lt;iframe&gt;',
        'answer_3': '&lt;frame&gt;',
        'answer_4': '&lt;frameset&gt;',
        'right_answer': 2
    },
    {
        'question': 'Wie stellt man Text am BESTEN fett dar?',
        'answer_1': '&lt;strong&gt;',
        'answer_2': 'CSS nutzen',
        'answer_3': '&lt;bold&gt;',
        'answer_4': '&lt;b&gt;',
        'right_answer': 1
    },
    {
        'question': 'Welches Attribut kann man NICHT für Textarea verwenden?',
        'answer_1': 'readonly',
        'answer_2': 'max',
        'answer_3': 'from',
        'answer_4': 'spellcheck',
        'right_answer': 1
    },
    {
        'question': 'Wie wählst du alle Element vom Typ &lt;a&gt; mit dem Attribut title aus?',
        'answer_1': 'a[title]{...}',
        'answer_2': 'a &lt; title{...}',
        'answer_3': 'a.title {...}',
        'answer_4': 'a = title{...}',
        'right_answer': 1
    },
    {
        'question': 'Wie definiert man in JavaScript eine Variable?',
        'answer_1': 'let 100 = rate;',
        'answer_2': '100 = let rate;',
        'answer_3': 'rate = 100;',
        'answer_4': 'let rate = 100;',
        'right_answer': 4
    }
];

let right_answer;
let question_number = 0;
let progress = 0;
console.log('Number of questions:', allQuestions.length);

function hideElements() {
    document.getElementById('next-btn').classList.add('d-none');
    document.getElementById('right-answer').classList.add('d-none');
}

function nextQuestion() {
    hideElements();

    if (question_number == allQuestions.length) {
        finishQuiz();
    } else {
        question_number = question_number + 1;
        progress = Math.round((question_number / allQuestions.length) * 100);
        document.getElementById('progress-bar').innerHTML = progress + '%';
        document.getElementById('progress-bar').style.width = progress + '%';
        loadQuestion();
    }
}

function finishQuiz() {
    document.getElementById('quiz-finished-container').classList.remove('d-none');
    document.getElementById('quiz-container').classList.add('d-none');
}

function loadQuestion() {
    document.getElementById('question').innerHTML = allQuestions[question_number - 1]['question'];
    document.getElementById('answer1').innerHTML = allQuestions[question_number - 1]['answer_1'];
    document.getElementById('answer2').innerHTML = allQuestions[question_number - 1]['answer_2'];
    document.getElementById('answer3').innerHTML = allQuestions[question_number - 1]['answer_3'];
    document.getElementById('answer4').innerHTML = allQuestions[question_number - 1]['answer_4'];
    right_answer = allQuestions[question_number - 1]['right_answer'];
}

function answer(a) {
    if (a == right_answer) { //Right answer
        document.getElementById('wrong-answer').classList.add('d-none');
        document.getElementById('right-answer').classList.remove('d-none');
        //Show next button
        document.getElementById('next-btn').classList.remove('d-none');
    } else {
        document.getElementById('right-answer').classList.add('d-none');
        document.getElementById('wrong-answer').classList.remove('d-none');
    }
}

