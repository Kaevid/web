var questions = [
    {
        type: 'radio',
        question: 'Вкажіть властивість стилю position:',
        answersList: ["top",
                    "fixed",
                    "draw();",
                    "block"
                    ],
        answers: {
            a: null,
            b: null,
            c: null,
            d: null
        },
        correctAnswer: "block"
    },
    {
        type: 'radio',
        question: 'Який стиль відповідає за зовнішній відступ елементу',
        answersList: ["margin",
                    "outline",
                    "padding",
                    "outline-style"],
        answers: {
            a: null,
            b: null,
            c: null,
            d: null
        },
        correctAnswer: "margin" 
    },
    {
        type: 'checkbox',
        question: 'Які переваги дає застосування каскадних таблиць стилів',
        answersList: [
            "скорочення html коду",
            "одноманітність оформлення багатьох сторінок сайту",
            "можливість створення таблиць більш складної структури, ніж у html",
            "одноманітність оформлення однотипних елементів на одній сторінці сайту"
        ],
        answers: {
            a: null,
            b: null,
            c: null,
            d: null
        },
        correctAnswer: ["одноманітність оформлення багатьох сторінок сайту", "одноманітність оформлення однотипних елементів на одній сторінці сайту"]
    },
    {
        type: 'checkbox',
        question: 'Обери основні методи додавання стилів',
        answersList: [
            "Вбудовування (inline)",
            "Вкладення (embeding)",
            "Зв'язування (linking)",
            "Закріплення(backing)"
        ],
        answers: {
            a: null,
            b: null,
            c: null,
            d: null
        },
        correctAnswer: ["Вбудовування (inline)", "Зв'язування (linking)"]
    },
    {
        type: 'text',
        question: "Вкажіть правильний синтаксис CSS для виділення всіх елементів <p> жирним шрифтом",
        answers: {
            a: ''
        },
        correctAnswer: ["p {text-size:bold;}"]
    },
    {
        type: 'text',
        question: "Що таке градієнти в CSS?",
        answers: {
            a: ''
        },
        correctAnswer: ["Це властивість CSS, яке дозволяє відображати плавне перетворення між двома або більше, ніж двома заданими кольорами."]
    },
    {
        type: 'select',
        question: "Вкажіть правильний синтаксис для псевдоелементів у CSS.",
        answersList: [
            ["pseudo", "element", "selector"],
            ["element", "selector", "pseudo"],
            ["selector", "pseudo", "element"]
        ],
        answers: {
            a: null,
            b: null,
            c: null
        },
        correctAnswer: ["selector", "pseudo", "element"]
    },
    {
        type: 'select',
        question: "як зробити жирний текст у всіх елементах <p>",
        answersList: [
            ["text", 'decoration', 'none'],
            ["text", 'decoration', 'none'],
            ["text", 'decoration', 'none']
        ],
        answers: {
            a: null,
            b: null,
            c: null
        },
        correctAnswer: ["text", "decoration", "none"]
    },
    {
        type: 'dragndrop',
        question: 'Команди CSS',
        questions: {
            1: "margin-top",
            2: "text-align",
            3: "border",

        },
        answersList: [
            "35px", "solid", "ceter"
        ],
        answers: {
            a: null,
            b: null,
            c: null
        },
        correctAnswer: ["35px", "ceter", "solid"]
    },
    {
        type: 'dragndrop',
        question: 'Встановіть відповідності між змінними та результатом команди typeof(i)<br>',
        questions: {
            1: "vertical ",
            2: "list-style ",
            3: "background",
            4: "empty",
        },
        answersList: [
            "position", "image", "align", "cells"
        ],
        answers: {
            a: null,
            b: null,
            c: null,
            d: null
        },
        correctAnswer: ["align", "image", "position", "cells"]
    }
]

const getRandomElement = (arr) => {
    let random = Math.floor(Math.random() * arr.length);
    return arr.splice(random, 1)[0];
}
const compareArrays = (arr1, arr2) => {
    return (
        arr1.length === arr2.length && 
        arr1.every(obj => arr2.includes(obj))
    );
  };

var quizobj = document.getElementById('quiz');
var submitobj = document.getElementById('submit');
var resultsobj = document.getElementById('results');

questions.sort(() => Math.random() - 0.5);

generateQuiz(questions, quizobj, resultsobj, submitobj);

function generateQuiz(questions, quizobj, resultsobj, submitobj){

	function showQuestions(questions, quizobj){

	var output = [];
	var answers;
    
    let selectIterator = 0;
    let dragIterator = 0;
	for(var i = 0; i < questions.length; i++){
        let selectIterator2 = 0;
		
		answers = [];

		for(letter in questions[i].answers){
            if (questions[i].type === 'radio' || questions[i].type === 'checkbox' || questions[i].type === 'dragndrop') {
                questions[i].answers[letter] = getRandomElement(questions[i].answersList);
            } else if (questions[i].type === 'select') {
                let arr = questions[i].answersList[selectIterator2];
                questions[i].answers[letter] = arr.slice();
                selectIterator2++;
            }

            switch (questions[i].type) {
                case 'radio':
                    answers.push(
                        `<p><label><input type="radio" name="question${i}" value="${questions[i].answers[letter]}">${letter}: ${questions[i].answers[letter]}</label></p>`
                    );
                    break;
                case 'checkbox':
                    answers.push(
                        `<p><label id="${letter+i}"><input type="checkbox" name="question${i}" value="${questions[i].answers[letter]}">${letter}: ${questions[i].answers[letter]}</label></p>`
                    );
                    break;
                case 'text':
                    answers.push(
                        `<p><label><input type="text" name="question${i}" id="question${i}"></label></p>`
                    );
                    break;
                case 'select':
                    let string = `<label>${letter}: <select name="question${i}" id="question${i}${selectIterator}"">`;
                    let opt = 0;
                    let size = questions[i].answers[letter].length;
                    while (opt < size) {
                    string += '<option value="'+questions[i].answers[letter][opt]+'">'+questions[i].answers[letter][opt]+'</option>';
                    opt++;
                    size = questions[i].answers[letter].length;
                    }
                    string += '</select></label>';
                
                    answers.push(string);
                    selectIterator++;
                    break;
                default:
                    answers.push(
                        '<div class="dragtext-container dropbox"><p draggable="true" class="dragtext" id="selanswer'+i+dragIterator+'">'+questions[i].answers[letter]+'</p></div>'
                    );
                    dragIterator++;
                    break;
            }
		}   

        let string = '';
        if (questions[i].type === 'dragndrop') {
            string += `<div class="question">${questions[i].question}</div>`;
            for (let j = 1; j <= Object.keys(questions[i].questions).length; j++) { 
            string += `<div class="questions-container">
                        <div class="questions">${j}. ${questions[i].questions[j]}</div>
                        <div class="dropbox" id="dropbox${i}${j}"></div>
                        </div>`;
            }
        } else {
            string += `<div class="question">${questions[i].question}</div>`;
        }
        string += `<div class="answers">${answers.join('')}</div>`;
        output.push(string);
	}
	quizobj.innerHTML = output.join('');
	}

	function showResults(questions, quizobj, resultsobj){
        var answerContainers = quizobj.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;

        let selectIterator = 0;
        let dragIterator = 0;
        
        for(let i = 0; i < questions.length; i++){
            switch (questions[i].type) {
                case 'radio':
                    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                    if(userAnswer === questions[i].correctAnswer) {
                        numCorrect++;
                        answerContainers[i].style.color = 'lightgreen';
                    } else {
                        answerContainers[i].style.color = 'red';
                    }
                    break;
                case 'checkbox':
                    userAnswers = [];
                    nodeList = (answerContainers[i].querySelectorAll('input[name=question'+i+']:checked')||{});
                    for (let j = 0; j < nodeList.length; j++) {
                        userAnswers.push(nodeList[j].value);
                    }
                    if (userAnswers.length == 0) {
                        var letters = Object.keys(questions[i].answers);
                        for (let j = 0; j < letters.length; j++) {
                            document.getElementById(letters[j]+i).style.color = 'red';
                        }
                    } else if (compareArrays(userAnswers, questions[i].correctAnswer)) {
                        numCorrect++;
                        for (let k in questions[i].answers) {
                            if (userAnswers.includes(questions[i].answers[k])) {
                                document.getElementById(k+i).style.color = 'lightgreen';
                            }
                        }
                    } else {
                        for (let k in questions[i].answers) {
                            if (questions[i].correctAnswer.includes(questions[i].answers[k]) && userAnswers.includes(questions[i].answers[k])) {
                                document.getElementById(k+i).style.color = 'lightgreen';
                            } else if (!questions[i].correctAnswer.includes(questions[i].answers[k]) && userAnswers.includes(questions[i].answers[k])) {
                                document.getElementById(k+i).style.color = 'red';
                            }
                        }
                    }
                    break;
                case 'text':
                    userAnswer = document.getElementById('question'+i).value;
                    if (questions[i].correctAnswer.includes(userAnswer)) {
                        numCorrect++;
                        document.getElementById('question'+i).style.color = 'lightgreen';
                    } else {
                        document.getElementById('question'+i).style.color = 'red';
                    }
                    break;
                case 'select':
                    userAnswers = [];
                nodeList = (answerContainers[i].querySelectorAll('select[name=question'+i+']'));
                for (let j = 0; j < nodeList.length; j++) {
                    userAnswers.push(nodeList[j].value);
                }
                score = 0;
                for (ans in userAnswers) {
                    if (questions[i].correctAnswer.includes(userAnswers[ans])) {
                        score++;
                        document.getElementById('question'+i+selectIterator).style.color = 'lightgreen';
                    }
                    else {
                        document.getElementById('question'+i+selectIterator).style.color = 'red';
                    }
                    selectIterator++;
                }
                if (score == questions[i].correctAnswer.length) {
                    numCorrect++;
                }
                break;
                case 'dragndrop':
                    score = 0;
                for (let j = 1; j <= Object.keys(questions[i].answers).length; j++) {
                    if (document.getElementById('dropbox'+i+j).dataset.value == questions[i].correctAnswer[j-1]) {
                        console.log(document.getElementById('selanswer'+i+dragIterator));
                        document.getElementById('selanswer'+i+dragIterator).style.color = 'lightgreen';
                        score++;
                    }
                    else {
                        document.getElementById('selanswer'+i+dragIterator).style.color = 'red';
                    }
                    dragIterator++;
                }
                if (score == Object.keys(questions[i].answers).length) {
                    numCorrect++;
                }
                break;
            }
	}
	resultsobj.innerHTML = numCorrect + ' out of ' + questions.length;
	}

    showQuestions(questions, quizobj);
    
    submitobj.addEventListener("click", () => {
        showResults(questions, quizobj, resultsobj);
    });

    var dragItems = document.querySelectorAll('p[draggable="true"]');
    dragItems.forEach(function addListeners() {
        addEventListener('dragstart', dragStart);
    })

    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    var dropBoxes = document.querySelectorAll('.dropbox');
    dropBoxes.forEach(box => {
        box.addEventListener('dragenter', dragEnter);
        box.addEventListener('dragover', dragOver);
        box.addEventListener('dragleave', dragLeave);
        box.addEventListener('drop', drop);
    });

    
    function dragEnter(event) {
        event.preventDefault();
        event.target.classList.add('dropbox-active');
    }
    
    function dragOver(event) {
        event.preventDefault();
    }
    
    function dragLeave(event) {
        event.target.classList.remove('dropbox-active');
    }
    
    function drop(event) {
        event.preventDefault();
        event.target.classList.remove('dropbox-active');
    
        const id = event.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        draggable.dataset.value = draggable.innerHTML;
    
        if (!event.target.hasChildNodes()) {
            draggable.parentNode.dataset.value = null;
            event.target.appendChild(draggable);
            event.target.dataset.value = draggable.dataset.value;
        }
    
        draggable.classList.remove('hide');
    }
}

function UserObject(surname, name) {
    this.surname = surname;
    this.name = name;
}

function StudentObject(specialty, group) {

    this.specialty = specialty;
    this.group = group;

    this.setSpecialty = function(value) {
        this.specialty = value;
    };

    this.setGroup = function(value) {
        this.group = value;
    };

    this.clearName = function() {
        this.name = '';
    }

    this.clearSurname = function() {
        this.surname = '';
    }

    this.clearSpecialty = function() {
        this.specialty = '';
    }

    this.clearGroup = function() {
        this.group = '';
    }
}

var user = null

function task1() {
    let name = document.getElementById('userObjectName').value;
    let surname = document.getElementById('userObjectSurname').value;

    if (!name || !surname) {
        alert('Enter a name and surname');
        return;
    }

    user = new UserObject(name, surname);

    console.log(user);

    let output = document.getElementById('task1Result');
    output.innerHTML = `<p>User name: ${user.name}</p>\
                        <p>User surname: ${user.surname}</p>`;
}

var student = new StudentObject;

function task2() {
    var specialty = document.getElementById('studentObjectSpecialty').value;
    var group = document.getElementById('studentObjectGroup').value;
    

    student.setSpecialty(specialty);
    student.setGroup(group);

    console.log(student);

    if (specialty == "" || group == "") {
        alert('Please enter specialty and group');
        return;
    }
    

    var output = document.getElementById('task2Result');
    output.innerHTML = `<p>Student specialty: ${student.getSpecialty()}<\p>\
                        <p>Student group: ${student.getGroup()}<\p>`;
}

function task2clearspecialty() {
    var specialtyInput = document.getElementById('studentObjectSpecialty');
    specialtyInput.value = '';
    student.clearSpecialty();
    var output = document.getElementById('task2Result');
    output.innerHTML = `<p>Спеціальність студента: ${student.specialty}<\p>\
                        <p>Група студента: ${student.group}<\p>`;
}

function task2cleargroup() {
    var groupInput = document.getElementById('studentObjectGroup');
    groupInput.value = '';
    student.clearGroup();
    var output = document.getElementById('task2Result');
    output.innerHTML = `<p>Спеціальність студента: ${student.specialty}<\p>\
                        <p>Група студента: ${student.group}<\p>`;
}



function task3user() {
    var user2 = Object.create(user);

    var output = document.getElementById('task3Result1');
    output.innerHTML = `<p>Ім'я користувача: ${user2.name}<\p>\
                        <p>Прізвище користувача: ${user2.surname}<\p>`;
}

function task3student() {
    let student2 = Object.create(student);

    var output = document.getElementById('task3Result2');
    output.innerHTML = `<p>Спеціальність студента: ${student2.specialty}<\p>\
                        <p>Група студента: ${student2.group}<\p>`;
}

function task4() {
    StudentObject.prototype.showData = function() {
        var output = document.getElementById('task4Result');

        output.innerHTML = `<p>Спеціальність студента: ${this.specialty}<\p>\
                            <p>Група студента: ${this.group}<\p>`
    }
    let student2 = Object.create(student);
    student2.showData();
}

function Progress(test, attempt, grades) {
    StudentObject.call(this, test, attempt, grades);
    this.averageGrade = 0;

    this.calculateAverageGrade = function() {
        if (this.grades.length == 0) {
            alert('Оцінки відсутні');
        }
        else {
            let sum = 0;
            for (let i = 0; i < this.grades.length; i++) {
                sum += Number(this.grades[i]);
            }   
            this.averageGrade = sum / this.grades.length;
        }
    }

    this.showData = function() {
        console.log('Test: ' + this.test + '\nAttempt: ' + this.attempt + '\nGrades: ' + this.grades + '\nAverage grade: ' + this.averageGrade);
    }
}

var progress = new Progress;

function task5GetGrades() {
    var test = document.getElementById('progressTest').value;
    var attempt = document.getElementById('progressAttempt').value;

    if (test == "" || attempt == "") {
        alert('Введіть тест та спробу');
        return;
    }
    else if (isNaN(attempt)) {
        alert('Спроба повинна бути числом');
        return;
    }

    progress.test = test;
    progress.attempt = attempt;
    progress.grades = [];

    var inputsContainer = document.getElementById('inputsContainer');
    let output = '';
    for (let i = 0; i < attempt; i++) {
        output += `<input type="text" id="progressGrade${i}" placeholder="Оцінка ${i + 1}">`;
    }
    inputsContainer.innerHTML = output;

    var button = document.getElementById('task5GetAverageGrade');
    button.classList.remove('hide');

}

function task5GetAverageGrade() {
    let attempts = document.getElementById('progressAttempt').value;
    for (let i = 0; i < attempts; i++) {
        let grade = document.getElementById(`progressGrade${i}`).value;
        if (grade == "") {
            alert('Введіть оцінку');
            return;
        }
        else if (isNaN(grade)) {
            alert('Оцінка повинна бути числом');
            return;
        }
        progress.grades.push(grade);
    }

    progress.calculateAverageGrade();
    
    var output = document.getElementById('task5Result');
    output.innerHTML = `<p>Середня оцінка: ${progress.averageGrade}<\p>`;
}