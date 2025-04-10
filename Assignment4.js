// Store the answers in localStorage
function storeAnswer(questionNumber, answer = null) {
    if (answer) {
        localStorage.setItem('question' + questionNumber, answer);
    } else {
        const inputElement = document.getElementById('answer' + questionNumber);
        localStorage.setItem('question' + questionNumber, inputElement.value);
    }
}


const slider = document.getElementById("question4");
const sliderValue = document.getElementById("sliderValue");

slider.oninput = function() {
    sliderValue.innerHTML = this.value;
    localStorage.setItem('question4', this.value); // Store the slider value
}


window.onload = function() {
    if (document.getElementById("result1")) {
        document.getElementById("result1").innerHTML = localStorage.getItem('question1') || 'No answer provided';
    }
    if (document.getElementById("result2")) {
        document.getElementById("result2").innerHTML = localStorage.getItem('question2') || 'No answer provided';
    }
    if (document.getElementById("result3")) {
        document.getElementById("result3").innerHTML = localStorage.getItem('question3') || 'No answer provided';
    }
    if (document.getElementById("result4")) {
        document.getElementById("result4").innerHTML = localStorage.getItem('question4') + '%';
    }
    if (document.getElementById("result5")) {
        document.getElementById("result5").innerHTML = localStorage.getItem('question5') || 'No answer provided';
    }
    if (document.getElementById("result6")) {
        document.getElementById("result6").innerHTML = localStorage.getItem('question6') || 'No answer provided';
    }
    if (document.getElementById("result7")) {
        document.getElementById("result7").innerHTML = localStorage.getItem('question7') || 'No answer provided';
    }
    if (document.getElementById("result8")) {
        document.getElementById("result8").innerHTML = localStorage.getItem('question8') || 'No answer provided';
    }
}//all the answer to form a bagel profile
