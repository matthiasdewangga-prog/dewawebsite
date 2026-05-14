// Gift Messages
const giftMessages = [
    "Lo itu teman yang luar biasa! 🌟",
    "Makasih udah ngedukung gue, bro! 💪",
    "Ketawa bareng lo tuh yang terbaik! 😂",
    "Gue senang lo ada di hidup gue! 🤗"
];

let giftOpened = [];

function openGift(index) {
    if (giftOpened.includes(index)) {
        return;
    }

    giftOpened.push(index);
    const message = giftMessages[index];
    const giftMessageEl = document.getElementById('giftMessage');
    
    giftMessageEl.textContent = message;
    giftMessageEl.style.animation = 'none';
    setTimeout(() => {
        giftMessageEl.style.animation = 'slideIn 0.5s ease-out';
    }, 10);
}

// Quiz Answers
const quizAnswers = {
    'q1': 'kopi',
    'q2': 'hitam',
    'q3': 'bernard',
    'q4': 'santai'
};

let score = 0;
let answered = 0;

function checkAnswer(quizId, answer, button) {
    const resultEl = document.getElementById(quizId + '-result');
    const isCorrect = answer === quizAnswers[quizId];

    // Disable all buttons for this quiz
    const buttons = button.parentElement.querySelectorAll('.quiz-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    if (isCorrect) {
        score++;
        button.classList.add('correct');
        resultEl.textContent = '✅ Bener! Lo kenal gue banget!';
        resultEl.style.color = '#00D084';
    } else {
        button.classList.add('incorrect');
        resultEl.textContent = '❌ Salah! Hehe, ternyata lo belum sepenuhnya kenal gue 😄';
        resultEl.style.color = '#FF6B6B';
    }

    answered++;
    updateScore();
}

function updateScore() {
    const scoreBoard = document.getElementById('scoreBoard');
    
    if (answered === 4) {
        const percentage = (score / 4) * 100;
        let message = '';

        if (percentage === 100) {
            message = `🏆 SEMPURNA! ${score}/4 - Wow, lo kenal gue banget! Ini top! 🎊`;
        } else if (percentage >= 75) {
            message = `🥇 BAGUS! ${score}/4 - Lo emang temen sejati gue! 🎉`;
        } else if (percentage >= 50) {
            message = `🥈 LUMAYAN! ${score}/4 - Lumayan lah, setidaknya lo cukup kenal gue 😄`;
        } else {
            message = `🥉 WAHAHAHA ${score}/4 - Yaudahlah, tapi gue tetap sayang lo kok! 😂❤️`;
        }

        scoreBoard.innerHTML = `<p>${message}</p>`;
    }
}

// Bernard Bear interaction
const bernardBear = document.querySelector('.floating-bernard');

if (bernardBear) {
    bernardBear.addEventListener('click', function() {
        alert('Halo! Ini Bernard Bear, karakter favorit Dewangga! 🐻\nBernard itu cool dan independent, mirip kayak Dewangga! 😎');
    });
}

// Add some interactivity to Minion
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Dewangga loaded! Selamat datang! 🎉');
});

// Smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});