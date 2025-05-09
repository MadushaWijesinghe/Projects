//Madusha Lakmali Wijesinghe (M23W0114)

document.addEventListener("DOMContentLoaded", function() {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = timeString;
    }
    setInterval(updateClock, 1000); // Update clock every second
    updateClock(); // Initial call to display clock immediately

    const form = document.getElementById('contactForm');
    const outputContainer = document.getElementById('output');
    const errorContainer = document.getElementById('error');
    const emailInput = document.getElementById('email');

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        let formOutput = '';
        let hasErrors = false;

        formData.forEach((value, key) => {
            if (!value) {
                hasErrors = true;
            }
            formOutput += `<p><strong>${key}:</strong> ${value}</p>`;
        });

        //Madusha Lakmali Wijesinghe (M23W0114)
        if (!validateEmail(emailInput.value)) {
            hasErrors = true;
            emailInput.classList.add('error');
            emailInput.nextElementSibling.style.display = 'block';
        } else {
            emailInput.classList.remove('error');
            emailInput.nextElementSibling.style.display = 'none';
        }

        if (hasErrors) {
            errorContainer.style.display = 'block';
        } else {
            errorContainer.style.display = 'none';
            outputContainer.innerHTML = formOutput;

            let ball = document.getElementById("ball");
            ball.style.bottom = "0"; 
            ball.style.left = "0"; 
            let distance = 0;
            let animation = setInterval(frame, 5);
            function frame() {
                if (distance == 300) {
                    clearInterval(animation);
                } else {
                    distance++; 
                    ball.style.bottom = distance + 'px'; 
                    ball.style.left = distance + 'px'; 
                }
            }
        }
    });
});

//Madusha Lakmali Wijesinghe (M23W0114)

function updateTextInput(val) {
    document.getElementById('satisfactionValue').value = val;
}

// JavaScript Animation for Ball
const ball = document.getElementById('ball');
const formContainer = document.getElementById('formContainer');
let positionX = 0;
let direction = 1; // 1 for right, -1 for left
const speed = 2; // Speed of the ball

function getColor(positionX) {
    const colors = [
        '#FFD700', // Gold
        '#C0C0C0', // Silver
        '#8B0000', // Dark Red (Burgundy)
        '#000080', // Navy
        '#006400', // Dark Green
        '#4B0082', // Indigo
        '#800000', // Maroon
        '#B8860B'  // Dark Goldenrod
    ];

    const index = Math.floor(positionX / 100) % colors.length;
    return colors[index];
}

//Madusha Lakmali Wijesinghe (M23W0114)

function animateBall() {

    const formWidth = formContainer.offsetWidth;

    positionX += speed * direction;
    if (positionX + ball.offsetWidth >= window.innerWidth || positionX <= 0) {
        direction *= -1;
    }
    ball.style.left = positionX + 'px';
    ball.style.backgroundColor = getColor(positionX); // Change color based on position
    requestAnimationFrame(animateBall);
}

animateBall(); // Start the animations