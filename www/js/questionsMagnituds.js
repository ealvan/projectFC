Survey
    .StylesManager
    .applyTheme("modern");

// const surveyJson = {
//     elements: [{
//         name: "FirstName",
//         title: "Enter your first name:",
//         type: "text"
//     }, {
//         name: "LastName",
//         title: "Enter your last name:",
//         type: "text"
//     }]
// };
// const surveyJson = {
//     title: "American History",
//     pages: [{
//         elements: [{
//             type: "radiogroup",
//             name: "civilwar",
//             title: "When was the American Civil War?",
//             choices: [
//                 "1796-1803", "1810-1814", "1861-1865", "1939-1945"
//             ],
//             correctAnswer: "1861-1865"
//         }]
//     }, {
//         elements: [{
//             type: "radiogroup",
//             name: "libertyordeath",
//             title: "Whose quote is this: \"Give me liberty, or give me death\"?",
//             choicesOrder: "random",
//             choices: [
//                 "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
//             ],
//             correctAnswer: "Patrick Henry"
//         }]
//     }, {
//         elements: [{
//             type: "radiogroup",
//             name: "magnacarta",
//             title: "What is Magna Carta?",
//             choicesOrder: "random",
//             choices: [
//                 "The foundation of the British parliamentary system",
//                 "The Great Seal of the monarchs of England",
//                 "The French Declaration of the Rights of Man",
//                 "The charter signed by the Pilgrims on the Mayflower"
//             ],
//             correctAnswer: "The foundation of the British parliamentary system"
//         }]
//     }]
// };

/*
You are about to start a quiz on American history. 
<br>You will have 10 seconds for every question and 25 seconds to end the quiz.
<br>Enter your name below and click <b>Start Quiz</b> to begin.

*/
var questionsNumber=7;
var time_perQuestion = 10;
var maxtime = time_perQuestion*questionsNumber;

function  printMessage(){
    return "Estas a punto de empezar el quiz de Magnitudes Físicas<br>"+
    `Con un total de ${questionsNumber} preguntas<br>`+
    `Tendrás ${time_perQuestion} segundos por cada pregunta<br>` +
    `El tiempo permitido para terminar el quiz es de ${maxtime} segundos`;
}
const surveyJson = {
    title: "Quiz de Magnitudes Físicas",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: time_perQuestion,
    maxTimeToFinish: maxtime,
    firstPageIsStarted: true,
    startSurveyText: "Comienzo del Quiz",
    pages: [{
        elements: [{
            type: "html",
            html: printMessage()
        }, {
            type: "text",
            name: "username",
            titleLocation: "hidden",
            isRequired: true
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "civilwar",
            title: "Principalmente, ¿Cuántos tipos de Magnitudes Físicas hay?",
            choices: [
                "1","3","2","6"
            ],
            correctAnswer: "2"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "libertyordeath",
            title: "Las magnitudes por su origen se clasifican en:",
            choicesOrder: "random",
            choices: [
                "Magnitudes Fundamendales, Derivadas y Auxiliares",
                "Magnitudes escalares, fundamendales y tensoriales",
                "Magnitudes fundamendales, tensoriales y Auxiliares",
                "Magnitudes vectoriales, fundamendales y tensoriales",
            ],
            correctAnswer: "Magnitudes Fundamendales, Derivadas y Auxiliares"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "magnacarta",
            title: "¿Qué es una magnitud física?",
            choicesOrder: "random",
            choices: [
                "Son muy importantes y nos sirven de base para escribir las demás magnitudes",
                "Son aquellas que están expresadas a través de las magnitudes tensoriales",
                "Es toda propiedad de los cuerpos o sistemas que puede ser medida.",
                "Ninguna de las anteriores"
            ],
            correctAnswer: "Es toda propiedad de los cuerpos o sistemas que puede ser medida."
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "temperatura",
            title: "La masa es a \"Kilogramos\" como la temperatura es a:",
            choicesOrder: "random",
            choices: [
                "Kelvin(K)",
                "Segundos(K)",
                "Amperio(A)",
                "Intensidad Luminosa(Candela)",
                "Ninguna de las anteriores"
            ],
            correctAnswer: "Kelvin(K)"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "Pertenece",
            title: "Indique cual de las siguiente pertenece al grupo de las Magnitudes Derivadas:",
            choicesOrder: "random",
            choices: [
                "Kelvin(K)",
                "Segundos(K)",
                "Amperio(A)",
                "Intensidad Luminosa(Candela)",
                "Fuerza(N)",
                "Fuerza(F)"
            ],
            correctAnswer: "Fuerza(N)",
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "Pertenece2",
            title: "¿Cuál de las siguientes NO pertenece al grupo de las Magnitudes Naturales?",
            choicesOrder: "random",
            choices: [
                "Magnitudes Fundamentales",
                "Magnitudes escalares",
                "Magnitudes vectoriales",
                "Magnitudes tensoriales"
            ],
            correctAnswer: "Magnitudes Fundamentales",
        }]
    }
],
    completedHtml: "<h4>Tienes <b>{correctAnswers} preguntas correctas </b> de <b>{questionCount}</b> en total</h4>",
    completedHtmlOnCondition: [{
        expression: "{correctAnswers} == 0",
        html: "<h4>Desafortunadamente, no diste con ninguna respuesta. Puedes intentar de nuevo.</h4>"
    }, {
        expression: "{correctAnswers} == {questionCount}",
        html: "<h4>Felicidades, tu has respondido todas las preguntas correctamente!!</h4>"
    }]
};
const survey = new Survey.Model(surveyJson);

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});
