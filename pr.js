class Question {
    constructor(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}

class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    displayQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            const currentQuestion = this.questions[this.currentQuestionIndex];
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `<p>${currentQuestion.question}</p>`;

            currentQuestion.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.textContent = answer;
                button.addEventListener('click', () => {
                    if (index === currentQuestion.correctAnswer) {
                        this.score++;
                    }
                    this.currentQuestionIndex++;
                    this.displayQuestion();
                });
                questionElement.appendChild(button);
            });

            const quizContainer = document.getElementById('quiz');
            quizContainer.innerHTML = '';
            quizContainer.appendChild(questionElement);
        } else {
            const quizContainer = document.getElementById('quiz');
            quizContainer.innerHTML = `<h1>Kuizi u kompletua</h1>
                                            <p>Piket tuaja jan: ${this.score}/${this.questions.length}</p>
                                            <button onclick="location.reload()">Provo perseri</button>`;
        }
    }
}

const questions = [
    new Question('Cili eshte kryeqyteti i Frances?', ['Paris', 'Berlin', 'Prishtina','Tirana'], 0),
    new Question('Cili eshte kryeqyteti i Gjermanis?', ['Berlin', 'Paris', 'Tirana', 'Prishtina'], 0),
    new Question('Cili eshte kryeqyteti i kosoves?', ['Prishtina', 'Berlin', 'Paris','Tirana'], 0),
    new Question('Cili eshte kryeqyteti i Shqiperis?', ['Tirana','Prishtina', 'Berlin', 'Paris'], 0),
];

const quiz = new Quiz(questions);
quiz.displayQuestion();