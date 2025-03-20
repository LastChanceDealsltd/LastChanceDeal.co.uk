document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the countdown timer
    const updateCountdown = () => {
        const timerDisplay = document.getElementById('timer');
        const countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

        let countdownFunction = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

            if (distance < 0) {
                clearInterval(countdownFunction);
                timerDisplay.innerHTML = "EXPIRED";
            }
        }, 1000);
    };

    updateCountdown(); // Initialize the countdown

    // Smooth scroll for anchor links within the page
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

    // Handle dropdown menu for the Shop
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});

