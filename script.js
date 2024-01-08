let questionCount = 0;



function openCelebrationPage() {
    // Redirect to a new webpage with celebration content
    window.location.href = "celebration.html";
}





let noButtonMoved = false;

function getRandomPosition() {
    const maxX = window.innerWidth - 100; // Adjust the values based on your layout
    const maxY = window.innerHeight - 100; // Adjust the values based on your layout

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return `translate(${randomX}px, ${randomY}px)`;
}

function moveAway() {
    const noButton = document.getElementById('noButton');

    if (!noButtonMoved) {
        noButton.style.transform = getRandomPosition();
        noButtonMoved = true;
    } else {
        noButton.style.transform = getRandomPosition();
    }
}

function showNextQuestion() {
    const questionText = document.getElementById('questionText');

    if (questionText.innerText === "Would you like to go on a date with me pleeeeease?") {
        questionText.innerText = "Are you sure?? There is no going back!";
    } else if (questionText.innerText === "Are you sure?? There is no going back!") {
        // Open a new webpage with celebration
        openCelebrationPage();
    }
}


function showNextQuestion() {
    if (questionCount === 0) {
        document.getElementById('questionText').innerText = "Are you sure?? There is no going back!";
    } else if (questionCount === 1) {
        // Open a new webpage with celebration
        openCelebrationPage();
        return;
    }

    questionCount++;
}