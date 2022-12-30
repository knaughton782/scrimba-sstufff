// dependency: js-confetti!0.10.2 
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

document.getElementById("button").addEventListener("click", fireConfetti)

function fireConfetti() {
    jsConfetti.addConfetti({
        confettiNumber: 10,
        emojis: ['💜','🧡','💛','💚','💙', '💻', '✨'],
        emojiSize: 70,
    })
}